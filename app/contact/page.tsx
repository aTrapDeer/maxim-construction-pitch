import Link from "next/link";
import { ProjectInquiryForm } from "../_components/contact-forms";
import { Icon, PageShell, SectionEyebrow } from "../_components/site";

export const metadata = {
  title: "Contact & Get a Quote | St. Louis, MO",
  description:
    "Contact Maxim Construction in St. Louis, MO at (314) 481-4111 or start a project online. Construction management, factory maintenance, office renovation, and specialty skilled work.",
  alternates: { canonical: "/contact" },
};

const contactDetails = [
  {
    icon: "domain",
    label: "Office",
    lines: ["5922 S Broadway", "St. Louis, MO 63111"],
  },
  {
    icon: "settings_suggest",
    label: "Phone",
    lines: ["(314) 481-4111"],
    href: "tel:+13144811411",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="bg-brand-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h1 className="mb-8 max-w-4xl font-headline text-5xl font-black leading-tight tracking-tighter md:text-7xl">
            START YOUR PROJECT WITH MAXIM
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-white/72">
            Call Maxim in St. Louis or share your project details below. We
            handle construction management, factory maintenance, office
            renovation, and specialty skilled work for commercial and
            industrial clients.
          </p>
        </div>
      </section>

      <section className="tectonic-grid bg-brand-light py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionEyebrow>Project Inquiry</SectionEyebrow>
            <h2 className="mb-6 font-headline text-4xl font-black leading-tight tracking-tighter text-brand-dark">
              GET A QUOTE
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-brand-muted">
              Use this form for client project requests and quotes. Maxim&apos;s
              team can route the request for estimating, scheduling, site
              review, and next-step coordination.
            </p>

            <div className="mb-8 space-y-4">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-4 rounded-sm border border-brand-border bg-white p-5 shadow-minimal"
                >
                  <Icon
                    name={detail.icon}
                    className="mt-1 text-2xl text-brand-accent"
                  />
                  <div>
                    <span className="mb-1 block font-label text-xs font-bold uppercase tracking-widest text-brand-muted">
                      {detail.label}
                    </span>
                    <address className="not-italic leading-relaxed text-brand-dark">
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="font-bold transition-colors hover:text-brand-accent"
                        >
                          {detail.lines[0]}
                        </a>
                      ) : (
                        detail.lines.map((line) => <div key={line}>{line}</div>)
                      )}
                    </address>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/blueprints"
              className="inline-flex items-center gap-2 font-headline font-bold text-brand-dark transition-colors hover:text-brand-accent"
            >
              Contractor bid documents <Icon name="arrow_forward" />
            </Link>
          </div>

          <ProjectInquiryForm />
        </div>
      </section>
    </PageShell>
  );
}
