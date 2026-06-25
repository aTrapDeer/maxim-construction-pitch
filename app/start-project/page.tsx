import Link from "next/link";
import { ProjectInquiryForm } from "../_components/contact-forms";
import { Icon, PageShell, SectionEyebrow } from "../_components/site";

export const metadata = {
  title: "Quote",
  description:
    "Submit a project inquiry to Maxim Construction for estimating, scheduling, and next-step coordination.",
};

export default function StartProjectPage() {
  return (
    <PageShell>
      <section className="bg-brand-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionEyebrow>Get Quote</SectionEyebrow>
          <h1 className="mb-8 max-w-4xl font-headline text-5xl font-black leading-tight tracking-tighter md:text-7xl">
            START YOUR PROJECT WITH MAXIM
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-white/72">
            Share the project basics and Maxim&apos;s team can route the request
            for estimating, scheduling, site review, and next-step coordination.
          </p>
        </div>
      </section>

      <section className="tectonic-grid bg-brand-light py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionEyebrow>Submission Form</SectionEyebrow>
            <h2 className="mb-6 font-headline text-4xl font-black leading-tight tracking-tighter text-brand-dark">
              PROJECT INQUIRY DETAILS
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-brand-muted">
              Use this form for client project requests. Subcontractors looking
              for bid packages should use the Bid Documents page.
            </p>
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
