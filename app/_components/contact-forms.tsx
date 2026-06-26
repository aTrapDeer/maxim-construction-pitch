"use client";

import Link from "next/link";
import Script from "next/script";
import { useActionState, useEffect, useRef, useState } from "react";
import { Icon } from "./site";
import { submitContactForm } from "../contact/actions";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  submittedAt?: number;
};

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: "light";
      "response-field": false;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
      "timeout-callback": () => void;
    },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const inputClass =
  "w-full rounded-sm border border-brand-border bg-brand-light px-4 py-3 text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white";

const textAreaClass =
  "w-full resize-y rounded-sm border border-brand-border bg-brand-light px-4 py-3 text-brand-dark outline-none transition placeholder:text-brand-muted/70 focus:border-brand-accent focus:bg-white";

const LabelText = ({ children }: { children: React.ReactNode }) => (
  <span className="mb-2 block font-label text-xs font-bold uppercase tracking-widest text-brand-muted">
    {children}
  </span>
);

function SubmittedPanel({ className }: { className?: string }) {
  return (
    <div
      aria-live="polite"
      className={`flex flex-col items-start gap-5 rounded-sm border border-brand-border bg-white p-8 shadow-minimal sm:p-12 ${className ?? ""}`}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
        <Icon name="check_circle" className="text-3xl" />
      </span>
      <h2 className="font-headline text-3xl font-black tracking-tighter text-brand-dark">
        Your message has been sent
      </h2>
      <p className="max-w-md text-lg leading-relaxed text-brand-muted">
        Thank you for reaching out. Maxim has received your submission and will
        get back to you as soon as possible.
      </p>
    </div>
  );
}

function StatusMessage({ state }: { state: ContactFormState }) {
  if (!state.message) {
    return null;
  }

  return (
    <p
      aria-live="polite"
      className={`text-sm font-semibold ${
        state.status === "success" ? "text-green-700" : "text-brand-accent"
      }`}
    >
      {state.message}
    </p>
  );
}

function TurnstileField({
  action,
  resetKey,
  onReadyChange,
}: {
  action: string;
  resetKey?: number;
  onReadyChange: (ready: boolean) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tokenRef = useRef<HTMLInputElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!turnstileSiteKey || !scriptReady || !containerRef.current) {
      onReadyChange(false);
      return;
    }

    if (widgetIdRef.current || !window.turnstile) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: turnstileSiteKey,
      action,
      theme: "light",
      "response-field": false,
      callback: (token) => {
        if (tokenRef.current) {
          tokenRef.current.value = token;
        }

        onReadyChange(true);
      },
      "expired-callback": () => {
        if (tokenRef.current) {
          tokenRef.current.value = "";
        }

        onReadyChange(false);
      },
      "error-callback": () => {
        if (tokenRef.current) {
          tokenRef.current.value = "";
        }

        onReadyChange(false);
      },
      "timeout-callback": () => {
        if (tokenRef.current) {
          tokenRef.current.value = "";
        }

        onReadyChange(false);
      },
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [action, onReadyChange, scriptReady]);

  useEffect(() => {
    if (!resetKey || !widgetIdRef.current || !window.turnstile) {
      return;
    }

    if (tokenRef.current) {
      tokenRef.current.value = "";
    }

    onReadyChange(false);
    window.turnstile.reset(widgetIdRef.current);
  }, [onReadyChange, resetKey]);

  if (!turnstileSiteKey) {
    return (
      <p className="text-sm font-semibold text-brand-accent">
        The security check is not configured yet.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
        onLoad={() => setScriptReady(true)}
      />
      <input ref={tokenRef} type="hidden" name="cf-turnstile-response" />
      <div ref={containerRef} />
    </div>
  );
}

function HiddenFormFields({ formType }: { formType: string }) {
  return (
    <>
      <input type="hidden" name="form_type" value={formType} />
      <label className="hidden" aria-hidden="true">
        Website
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
    </>
  );
}

export function BidRequestForm() {
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.status === "success") {
    return (
      <SubmittedPanel className="scroll-mt-28 lg:col-span-8" />
    );
  }

  return (
    <form
      id="bid-request"
      action={formAction}
      className="scroll-mt-28 rounded-sm border border-brand-border bg-white p-6 shadow-minimal sm:p-8 lg:col-span-8"
    >
      <HiddenFormFields formType="bid_request" />

      <div className="mb-8 flex flex-col gap-3 border-b border-brand-border pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-headline text-3xl font-black tracking-tighter text-brand-dark">
            Bid Request Form
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted">
            Request prints, specs, timelines, or SharePoint access for bid
            packages.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-headline font-bold text-brand-dark transition-colors hover:text-brand-accent"
        >
          Client project page <Icon name="arrow_forward" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <label className="block">
          <LabelText>Name</LabelText>
          <input name="name" type="text" required className={inputClass} />
        </label>

        <label className="block">
          <LabelText>Company</LabelText>
          <input name="company" type="text" required className={inputClass} />
        </label>

        <label className="block">
          <LabelText>Email</LabelText>
          <input name="email" type="email" required className={inputClass} />
        </label>

        <label className="block">
          <LabelText>Phone</LabelText>
          <input name="phone" type="tel" className={inputClass} />
        </label>

        <label className="block md:col-span-2">
          <LabelText>Project / Bid Name</LabelText>
          <input
            name="project_or_bid_name"
            type="text"
            placeholder="Example: upcoming plant maintenance bid, office renovation, equipment support request"
            className={`${inputClass} placeholder:text-brand-muted/70`}
          />
        </label>

        <label className="block md:col-span-2">
          <LabelText>Documents Requested</LabelText>
          <textarea
            name="documents_requested"
            required
            rows={6}
            placeholder="Tell Maxim what prints, specs, timelines, or bid documents you need access to."
            className={textAreaClass}
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-brand-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-md space-y-3">
          <p className="text-sm leading-relaxed text-brand-muted">
            The request is sent directly to Maxim and labeled as a bid request
            for internal routing.
          </p>
          <StatusMessage state={state} />
          <TurnstileField
            action="bid_request"
            resetKey={state.submittedAt}
            onReadyChange={setTurnstileReady}
          />
        </div>
        <button
          type="submit"
          disabled={pending || !turnstileReady}
          className="inline-flex items-center justify-center gap-3 rounded-sm bg-brand-accent px-8 py-4 font-headline font-bold tracking-wide text-white shadow-hover transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "SENDING..." : "SUBMIT BID REQUEST"}
          <Icon name="arrow_forward" />
        </button>
      </div>
    </form>
  );
}

const projectTypes = [
  "Construction Management",
  "Factory Maintenance",
  "Office Renovation",
  "Specialty Skills",
  "Other / Not Sure",
];

export function ProjectInquiryForm() {
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.status === "success") {
    return <SubmittedPanel className="lg:col-span-8" />;
  }

  return (
    <form
      action={formAction}
      className="rounded-sm border border-brand-border bg-white p-6 shadow-minimal sm:p-8 lg:col-span-8"
    >
      <HiddenFormFields formType="project_inquiry" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <label className="block">
          <LabelText>Name</LabelText>
          <input name="name" type="text" required className={inputClass} />
        </label>

        <label className="block">
          <LabelText>Company</LabelText>
          <input name="company" type="text" className={inputClass} />
        </label>

        <label className="block">
          <LabelText>Email</LabelText>
          <input name="email" type="email" required className={inputClass} />
        </label>

        <label className="block">
          <LabelText>Phone</LabelText>
          <input name="phone" type="tel" className={inputClass} />
        </label>

        <label className="block">
          <LabelText>Project Type</LabelText>
          <select
            name="project_type"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <LabelText>Project Location</LabelText>
          <input name="project_location" type="text" className={inputClass} />
        </label>

        <label className="block md:col-span-2">
          <LabelText>Timeline</LabelText>
          <input
            name="timeline"
            type="text"
            placeholder="Example: needs review this month, upcoming shutdown window, flexible schedule"
            className={`${inputClass} placeholder:text-brand-muted/70`}
          />
        </label>

        <label className="block md:col-span-2">
          <LabelText>Project Scope</LabelText>
          <textarea
            name="project_scope"
            required
            rows={7}
            placeholder="Tell Maxim what needs to be built, renovated, maintained, moved, repaired, or reviewed."
            className={textAreaClass}
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-brand-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-md space-y-3">
          <p className="text-sm leading-relaxed text-brand-muted">
            Submissions are sent directly to Maxim&apos;s project inquiry
            routing.
          </p>
          <StatusMessage state={state} />
          <TurnstileField
            action="project_inquiry"
            resetKey={state.submittedAt}
            onReadyChange={setTurnstileReady}
          />
        </div>
        <button
          type="submit"
          disabled={pending || !turnstileReady}
          className="inline-flex items-center justify-center gap-3 rounded-sm bg-brand-accent px-8 py-4 font-headline font-bold tracking-wide text-white shadow-hover transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "SENDING..." : "SUBMIT PROJECT"}
          <Icon name="arrow_forward" />
        </button>
      </div>
    </form>
  );
}
