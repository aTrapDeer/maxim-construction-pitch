import Link from "next/link";
import {
  Icon,
  PageShell,
  SectionEyebrow,
  processSteps,
} from "../_components/site";

export const metadata = {
  title: "Our Construction Process | Consultation to Close-Out",
  description:
    "Maxim's front-to-back project process from consultation and engineering through design, execution, punch list, and close-out for industrial, commercial, and maintenance work.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <PageShell>
      <section className="bg-brand-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionEyebrow>Process</SectionEyebrow>
          <h1 className="mb-8 max-w-4xl font-headline text-5xl font-black leading-tight tracking-tighter md:text-7xl">
            FROM FIRST CONVERSATION TO FINAL CLOSE-OUT
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-white/72">
            Maxim&apos;s workflow keeps industrial, commercial, and maintenance
            projects clear at every handoff: consultation, engineering, design,
            execution, punch list, and close-out.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-sm border border-brand-border bg-brand-light p-8 shadow-minimal"
              >
                <span className="mb-8 block font-headline text-5xl font-black tracking-tighter text-brand-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mb-4 font-headline text-2xl font-bold tracking-tight text-brand-dark">
                  {step.title}
                </h2>
                <p className="leading-relaxed text-brand-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tectonic-grid bg-brand-light py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionEyebrow>Start Your Project</SectionEyebrow>
            <h2 className="mb-6 font-headline text-4xl font-black leading-tight tracking-tighter text-brand-dark md:text-5xl">
              BUILT FOR CLEAN COORDINATION BEFORE FIELD WORK STARTS
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-brand-muted">
              The process page gives clients a practical view of how Maxim
              plans, coordinates, executes, and finishes work without burying
              the homepage in technical detail.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-sm bg-brand-accent px-8 py-4 font-headline font-bold tracking-wide text-white! shadow-hover transition-all hover:bg-brand-dark"
            >
              GET QUOTE <Icon name="arrow_forward" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
