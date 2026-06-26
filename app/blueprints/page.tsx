import Link from "next/link";
import { BidRequestForm } from "../_components/contact-forms";
import { Icon, PageShell, SectionEyebrow } from "../_components/site";

export const metadata = {
  title: "Bid Documents & Subcontractor Opportunities",
  description:
    "Subcontractor access point for Maxim Construction bid documents, prints, project specifications, and upcoming St. Louis project opportunities. Request bid access online.",
  alternates: { canonical: "/blueprints" },
};

const bidPackages = [
  "Active bid opportunity",
  "Upcoming bid opportunity",
  "Project prints",
  "Owner specifications",
  "Timeline or scope clarification",
  "SharePoint / document access",
];

export default function BlueprintsPage() {
  return (
    <PageShell>
      <section className="bg-brand-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionEyebrow>View Blueprints</SectionEyebrow>
          <h1 className="mb-8 max-w-4xl font-headline text-5xl font-black leading-tight tracking-tighter md:text-7xl">
            BID DOCUMENT ACCESS FOR SUBCONTRACTORS
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-white/72">
            A dedicated access point for subcontractors reviewing active or
            upcoming Maxim project opportunities. Request prints,
            specifications, and bid documents below.
          </p>
        </div>
      </section>

      <section className="tectonic-grid bg-brand-light py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <SectionEyebrow>Documents</SectionEyebrow>
            <h2 className="mb-6 font-headline text-4xl font-black leading-tight tracking-tighter text-brand-dark md:text-5xl">
              REQUEST ACCESS TO BID DOCUMENTS
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-brand-muted">
              This page is for trade partners who need prints, specifications,
              owner requirements, timelines, or other project files connected
              to Maxim bid opportunities.
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

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <SectionEyebrow>Clients</SectionEyebrow>
            <h2 className="mb-3 font-headline text-4xl font-black tracking-tighter text-brand-dark">
              Starting a new project?
            </h2>
            <p className="max-w-2xl text-brand-muted">
              Client project inquiries and quote requests are handled through
              the contact page.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-sm border-2 border-brand-dark px-8 py-4 font-headline font-bold tracking-wide text-brand-dark transition-all hover:bg-brand-dark hover:text-white!"
          >
            START YOUR PROJECT <Icon name="arrow_forward" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
