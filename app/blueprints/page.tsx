import Link from "next/link";
import { Icon, PageShell, SectionEyebrow } from "../_components/site";

export const metadata = {
  title: "Bid Documents & Subcontractor Opportunities",
  description:
    "Subcontractor access point for Maxim Construction bid documents, prints, project specifications, and upcoming St. Louis project opportunities.",
  alternates: { canonical: "/blueprints" },
};

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
            upcoming Maxim project opportunities.
          </p>
        </div>
      </section>

      <section className="tectonic-grid bg-brand-light py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionEyebrow>Documents</SectionEyebrow>
            <h2 className="mb-6 font-headline text-4xl font-black leading-tight tracking-tighter text-brand-dark md:text-5xl">
              REQUEST ACCESS TO BID DOCUMENTS
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-brand-muted">
              This page is for trade partners who need prints, specifications,
              owner requirements, timelines, or other project files connected
              to Maxim bid opportunities.
            </p>
            <Link
              href="/contact#bid-request"
              className="inline-flex items-center gap-3 rounded-sm bg-brand-accent px-8 py-4 font-headline font-bold tracking-wide text-white! shadow-hover transition-all hover:bg-brand-dark"
            >
              REQUEST BID ACCESS <Icon name="arrow_forward" />
            </Link>
          </div>

          <article className="rounded-sm border border-brand-border bg-white p-6 shadow-minimal sm:p-8 lg:col-span-8">
            <div className="mb-8 flex flex-col gap-5 border-b border-brand-border pb-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="mb-4 inline-flex border border-brand-border px-3 py-1 font-label text-[10px] font-bold uppercase tracking-widest text-brand-muted">
                  Contractor Opportunities
                </span>
                <h3 className="max-w-2xl font-headline text-3xl font-black leading-tight tracking-tighter text-brand-dark md:text-5xl">
                  ARE YOU A CONTRACTOR LOOKING FOR PROJECT OPPORTUNITIES?
                </h3>
              </div>
              <Icon name="document" className="text-4xl text-brand-accent" />
            </div>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-brand-muted">
              Share your company details, trade scope, service area, and the
              type of work you are qualified to support. Maxim can review your
              information and follow up with active or upcoming bid
              opportunities that may be a fit.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                "Company and contact details",
                "Trade scope and capabilities",
                "Project or document request",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-brand-border bg-brand-light p-5"
                >
                  <span className="mb-3 block h-2 w-2 bg-brand-accent" />
                  <p className="font-semibold text-brand-dark">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact#bid-request"
              className="inline-flex items-center gap-3 rounded-sm bg-brand-dark px-8 py-4 font-headline font-bold tracking-wide text-white! transition-all hover:bg-brand-accent"
            >
              SHARE CONTRACTOR DETAILS <Icon name="arrow_forward" />
            </Link>
          </article>
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
              the quote page.
            </p>
          </div>
          <Link
            href="/quote"
            className="inline-flex items-center gap-3 rounded-sm border-2 border-brand-dark px-8 py-4 font-headline font-bold tracking-wide text-brand-dark transition-all hover:bg-brand-dark hover:text-white!"
          >
            START YOUR PROJECT <Icon name="arrow_forward" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
