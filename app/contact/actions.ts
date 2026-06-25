"use server";

import { SendEmailCommand, SESv2Client } from "@aws-sdk/client-sesv2";
import { headers } from "next/headers";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  submittedAt?: number;
};

type Field = {
  name: string;
  label: string;
  required?: boolean;
  multiline?: boolean;
  maxLength?: number;
};

const forms = {
  bid_request: {
    label: "Bid Request",
    success:
      "Your bid request was sent. Maxim will review it and follow up with next steps.",
    fields: [
      { name: "name", label: "Name", required: true, maxLength: 120 },
      { name: "company", label: "Company", required: true, maxLength: 160 },
      { name: "email", label: "Email", required: true, maxLength: 180 },
      { name: "phone", label: "Phone", maxLength: 80 },
      {
        name: "project_or_bid_name",
        label: "Project / Bid Name",
        maxLength: 220,
      },
      {
        name: "documents_requested",
        label: "Documents Requested",
        required: true,
        multiline: true,
        maxLength: 4000,
      },
    ],
  },
  project_inquiry: {
    label: "Project Inquiry",
    success:
      "Your project inquiry was sent. Maxim will route it for estimating and next-step coordination.",
    fields: [
      { name: "name", label: "Name", required: true, maxLength: 120 },
      { name: "company", label: "Company", maxLength: 160 },
      { name: "email", label: "Email", required: true, maxLength: 180 },
      { name: "phone", label: "Phone", maxLength: 80 },
      {
        name: "project_type",
        label: "Project Type",
        required: true,
        maxLength: 160,
      },
      { name: "project_location", label: "Project Location", maxLength: 220 },
      { name: "timeline", label: "Timeline", maxLength: 220 },
      {
        name: "project_scope",
        label: "Project Scope",
        required: true,
        multiline: true,
        maxLength: 4000,
      },
    ],
  },
} satisfies Record<string, { label: string; success: string; fields: Field[] }>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const turnstileVerifyUrl =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type TurnstileResult = {
  success?: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

function errorState(message: string): ContactFormState {
  return {
    status: "error",
    message,
    submittedAt: Date.now(),
  };
}

function getString(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function cleanSubject(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatText(label: string, values: Record<string, string>) {
  const lines = [`${label} submitted from maximconstruction.net`, ""];

  for (const [fieldLabel, value] of Object.entries(values)) {
    lines.push(`${fieldLabel}:`);
    lines.push(value || "Not provided");
    lines.push("");
  }

  return lines.join("\n");
}

function formatHtml(label: string, values: Record<string, string>) {
  const rows = Object.entries(values)
    .map(
      ([fieldLabel, value]) => `
        <tr>
          <th align="left" style="padding:12px;border-bottom:1px solid #e5e5e5;vertical-align:top;width:180px;">${escapeHtml(fieldLabel)}</th>
          <td style="padding:12px;border-bottom:1px solid #e5e5e5;white-space:pre-wrap;">${escapeHtml(value || "Not provided")}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#171717;line-height:1.5;">
      <h1 style="font-size:22px;margin:0 0 16px;">${escapeHtml(label)}</h1>
      <p style="margin:0 0 20px;color:#737373;">Submitted from maximconstruction.net</p>
      <table cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;max-width:760px;border:1px solid #e5e5e5;">
        ${rows}
      </table>
    </div>`;
}

function getRecipients() {
  return (process.env.CONTACT_FORM_TO_EMAIL ?? "")
    .split(/[;,]/)
    .map((email) => email.trim())
    .filter(Boolean);
}

function envError() {
  const missing = [
    "CONTACT_FORM_FROM_EMAIL",
    "CONTACT_FORM_TO_EMAIL",
    "AWS_ACCESS_KEY_ID",
    "AWS_SECRET_ACCESS_KEY",
    "AWS_REGION",
    "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
    "TURNSTILE_SECRET_KEY",
  ].filter((key) => !process.env[key]);

  return missing.length > 0
    ? `Missing required contact form environment variables: ${missing.join(", ")}`
    : "";
}

async function getRequestIp() {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");

  return (
    headersList.get("cf-connecting-ip") ??
    forwardedFor?.split(",")[0]?.trim() ??
    undefined
  );
}

async function verifyTurnstileToken(formData: FormData, formType: string) {
  const token = getString(formData, "cf-turnstile-response");
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!token) {
    return {
      ok: false,
      message: "Please complete the security check before submitting.",
    };
  }

  if (!secret) {
    console.error("Missing TURNSTILE_SECRET_KEY.");
    return {
      ok: false,
      message:
        "The contact form is not configured yet. Please contact Maxim directly.",
    };
  }

  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);

  const requestIp = await getRequestIp();

  if (requestIp) {
    body.append("remoteip", requestIp);
  }

  try {
    const response = await fetch(turnstileVerifyUrl, {
      method: "POST",
      body,
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Turnstile verification request failed", response.status);
      return {
        ok: false,
        message:
          "The security check could not be verified. Please try again.",
      };
    }

    const result = (await response.json()) as TurnstileResult;

    if (!result.success) {
      console.error("Turnstile verification failed", result["error-codes"]);
      return {
        ok: false,
        message:
          "The security check could not be verified. Please try again.",
      };
    }

    if (result.action && result.action !== formType) {
      console.error("Turnstile action mismatch", {
        expected: formType,
        actual: result.action,
      });
      return {
        ok: false,
        message:
          "The security check could not be verified. Please try again.",
      };
    }

    return { ok: true, message: "" };
  } catch (error) {
    console.error("Turnstile verification error", error);
    return {
      ok: false,
      message:
        "The security check could not be verified. Please try again.",
    };
  }
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = getString(formData, "website");

  if (honeypot) {
    return {
      status: "success",
      message: "Your request was sent.",
      submittedAt: Date.now(),
    };
  }

  const formType = getString(formData, "form_type");
  const form = forms[formType as keyof typeof forms];

  if (!form) {
    return errorState(
      "This form could not be sent. Please refresh the page and try again.",
    );
  }

  const email = getString(formData, "email");

  if (!emailPattern.test(email)) {
    return errorState("Please enter a valid email address.");
  }

  const values: Record<string, string> = {};

  for (const field of form.fields) {
    const value = getString(formData, field.name);

    if (field.required && !value) {
      return errorState(
        `Please complete the ${field.label.toLowerCase()} field.`,
      );
    }

    if (field.maxLength && value.length > field.maxLength) {
      return errorState(
        `${field.label} is too long. Please shorten it and try again.`,
      );
    }

    values[field.label] = value;
  }

  const configError = envError();
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL ?? "";
  const toEmails = getRecipients();

  if (configError || toEmails.length === 0) {
    console.error(configError || "CONTACT_FORM_TO_EMAIL has no recipients.");
    return errorState(
      "The contact form is not configured yet. Please contact Maxim directly.",
    );
  }

  const turnstile = await verifyTurnstileToken(formData, formType);

  if (!turnstile.ok) {
    return errorState(turnstile.message);
  }

  const companyOrName = values.Company || values.Name || "Website Submission";
  const subject = cleanSubject(`[Maxim Website] ${form.label} - ${companyOrName}`);
  const client = new SESv2Client({ region: process.env.AWS_REGION });

  try {
    await client.send(
      new SendEmailCommand({
        FromEmailAddress: fromEmail,
        Destination: {
          ToAddresses: toEmails,
        },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: {
              Data: subject,
              Charset: "UTF-8",
            },
            Body: {
              Text: {
                Data: formatText(form.label, values),
                Charset: "UTF-8",
              },
              Html: {
                Data: formatHtml(form.label, values),
                Charset: "UTF-8",
              },
            },
          },
        },
      }),
    );

    return {
      status: "success",
      message: form.success,
      submittedAt: Date.now(),
    };
  } catch (error) {
    console.error("Failed to send contact form email", error);
    return errorState(
      "The form could not be sent right now. Please try again in a moment.",
    );
  }
}
