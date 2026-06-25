import { BidRequestForm } from "../_components/contact-forms";
import { PageShell, SectionEyebrow } from "../_components/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact Maxim Construction for bid document access, subcontractor bid requests, and general website inquiries.",
};

const bidPackages = [
  "Active bid opportunity",
  "Upcoming bid opportunity",
  "Project prints",
  "Owner specifications",
  "Timeline or scope clarification",
  "SharePoint / document access",
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="bg-brand-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h1 className="mb-8 max-w-4xl font-headline text-5xl font-black leading-tight tracking-tighter md:text-7xl">
            BID REQUESTS AND GENERAL CONTACT
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-white/72">
            Subcontractors can request access to project documents here. Client
            project inquiries should use the quote page.
          </p>
        </div>
      </section>

      <section className="tectonic-grid bg-brand-light py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <SectionEyebrow>Bid Access</SectionEyebrow>
            <h2 className="mb-6 font-headline text-4xl font-black leading-tight tracking-tighter text-brand-dark">
              CONTRACTOR DOCUMENT REQUEST
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-brand-muted">
              Use this for bid package access, prints, specifications, project
              timelines, and document questions tied to Maxim subcontractor
              opportunities.
            </p>
            <div className="rounded-sm border border-brand-border bg-white p-6 shadow-minimal">
              <h3 className="mb-5 font-headline text-xl font-bold text-brand-dark">
                Typical requests
              </h3>
              <ul className="space-y-3">
                {bidPackages.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-brand-accent" />
                    <span className="text-brand-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <BidRequestForm />
        </div>
      </section>
    </PageShell>
  );
}
