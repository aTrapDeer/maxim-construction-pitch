import Image from "next/image";
import Link from "next/link";
import {
  HeroImage,
  Icon,
  PageShell,
  SectionEyebrow,
  processSteps,
  services,
  stats,
} from "./_components/site";

export default function Home() {
  return (
    <PageShell>
      <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-brand-dark py-20">
        <HeroImage />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <div className="flex flex-col justify-center lg:col-span-9">
            <h1 className="animate-fade-in-up opacity-0-init mb-8 font-headline text-5xl font-black leading-[0.92] tracking-tighter text-white sm:text-6xl md:text-8xl lg:text-[7rem]">
              BUILDING <br />
              <span className="bg-linear-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">
                EXCELLENCE
              </span>{" "}
              <br />
              FROM CONCEPT
            </h1>

            <p className="animate-fade-in-up animation-delay-100 opacity-0-init mb-10 max-w-2xl text-xl font-light leading-relaxed text-white/80 md:text-2xl">
              Executing high-stakes infrastructure, industrial, and commercial
              projects with surgical precision.
            </p>

            <div className="animate-fade-in-up animation-delay-200 opacity-0-init flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-sm bg-brand-accent px-8 py-4 font-headline font-bold tracking-wide text-white! shadow-hover transition-all duration-300 hover:bg-white hover:text-brand-dark!"
              >
                START YOUR PROJECT
                <Icon
                  name="arrow_forward"
                  className="text-white group-hover:text-brand-dark"
                />
              </Link>
              <Link
                href="/blueprints"
                className="inline-flex items-center justify-center rounded-sm border-2 border-white bg-white/10 px-8 py-4 font-headline font-bold tracking-wide text-white! backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 hover:border-white hover:bg-white hover:text-brand-dark!"
              >
                BID OPPORTUNITIES
              </Link>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-300 opacity-0-init hidden self-end pb-4 lg:col-span-3 lg:block">
            <div className="border-l border-brand-accent pl-6">
              <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-white/60">
                Field Focus
              </span>
              <p className="font-headline text-xl font-medium text-white">
                Construction management, plant maintenance, office renovation,
                and specialty skilled work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-border bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => {
            const valueMatch = stat.value.match(/^([\d.]+)(.*)$/);
            const numericPart = valueMatch ? valueMatch[1] : stat.value;
            const suffixPart = valueMatch ? valueMatch[2] : "";

            return (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="font-headline text-4xl font-black tracking-tighter text-brand-dark md:text-5xl">
                  {numericPart}
                  {suffixPart && (
                    <span className="text-brand-accent">{suffixPart}</span>
                  )}
                </span>
                <span className="font-label text-xs font-semibold uppercase tracking-widest text-brand-muted">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="tectonic-grid bg-brand-light py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <SectionEyebrow>Services</SectionEyebrow>
              <h2 className="font-headline text-4xl font-black leading-tight tracking-tighter text-brand-dark md:text-6xl">
                INDUSTRIAL AND COMMERCIAL WORK, ORGANIZED BY NEED
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-headline font-bold text-brand-dark transition-colors hover:text-brand-accent"
            >
              View Services <Icon name="arrow_forward" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-sm border border-brand-border/50 bg-white p-8 shadow-minimal transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} project work`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-15 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-white/88 to-transparent" />
                <div className="relative z-10">
                  <Icon
                    name={service.icon}
                    className="mb-5 text-4xl text-brand-accent"
                  />
                  <h3 className="mb-3 font-headline text-3xl font-bold tracking-tight text-brand-dark">
                    {service.title}
                  </h3>
                  <p className="mb-6 max-w-xl leading-relaxed text-brand-muted">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest text-brand-dark transition-all group-hover:gap-4 group-hover:text-brand-accent">
                    See project examples <Icon name="north_east" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-brand-border bg-white py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Process</SectionEyebrow>
            <h2 className="mb-8 font-headline text-4xl font-black leading-tight tracking-tighter text-brand-dark md:text-6xl">
              FRONT-TO-BACK PROJECT CONTROL
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-brand-muted">
              Maxim&apos;s process moves from consultation and engineering into
              design, execution, punch list, and close-out, keeping the work
              organized from first conversation to final handoff.
            </p>
            <Link
              href="/process"
              className="inline-flex items-center gap-3 rounded-sm bg-brand-dark px-8 py-4 font-headline font-bold tracking-wide text-white! transition-all hover:bg-brand-accent"
            >
              VIEW PROCESS <Icon name="arrow_forward" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {processSteps.slice(0, 4).map((step, index) => (
              <div
                key={step.title}
                className="rounded-sm border border-brand-border bg-brand-light p-6"
              >
                <span className="mb-5 block font-headline text-4xl font-black tracking-tighter text-brand-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-headline text-xl font-bold text-brand-dark">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-28 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionEyebrow>About Maxim</SectionEyebrow>
            <h2 className="mb-8 font-headline text-4xl font-black leading-tight tracking-tighter text-white md:text-6xl">
              LOCAL SKILLED CRAFTSMEN WITH BROADER FABRICATION REACH
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-white/72">
              Maxim pairs project leadership with local skilled craftsmen and
              trusted fabrication relationships, giving clients a practical
              team for complex industrial, commercial, and maintenance work.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-5">
            {["ISN membership", "KOKA membership", "Fabrication relationships"].map(
              (credential) => (
                <div
                  key={credential}
                  className="flex items-center gap-4 border border-white/10 bg-white/5 p-5"
                >
                  <Icon name="verified" className="text-2xl text-brand-accent" />
                  <span className="font-headline text-lg font-bold text-white">
                    {credential}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-28 text-brand-dark">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionEyebrow>Get Quote</SectionEyebrow>
          <h2 className="mb-8 font-headline text-4xl font-black leading-tight tracking-tighter md:text-6xl">
            READY TO START THE PROJECT?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-brand-muted">
            Client project requests now start from one dedicated submission
            page so the right project details are collected before Maxim routes
            the inquiry internally.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group flex w-full items-center justify-center gap-3 rounded-sm bg-brand-accent px-10 py-5 font-headline text-lg font-bold tracking-wide text-white! shadow-hover transition-all duration-300 hover:bg-brand-dark sm:w-auto"
            >
              START YOUR PROJECT
              <Icon name="arrow_forward" className="text-white" />
            </Link>
            <Link
              href="/blueprints"
              className="w-full rounded-sm border-2 border-brand-dark px-10 py-5 font-headline text-lg font-bold tracking-wide text-brand-dark transition-all duration-300 hover:bg-brand-dark hover:text-white! sm:w-auto"
            >
              BID OPPORTUNITIES
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
