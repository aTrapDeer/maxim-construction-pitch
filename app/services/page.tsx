import Image from "next/image";
import Link from "next/link";
import { Icon, PageShell, SectionEyebrow, services } from "../_components/site";

export const metadata = {
  title: "Services",
  description:
    "Construction management, factory maintenance, office renovation, and specialty skills for commercial and industrial project work.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="bg-brand-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionEyebrow>Services</SectionEyebrow>
          <h1 className="mb-8 max-w-4xl font-headline text-5xl font-black leading-tight tracking-tighter md:text-7xl">
            PROJECT HIGHLIGHTS BUILT INTO EACH SERVICE LINE
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-white/72">
            Maxim organizes its work around construction management, factory
            maintenance, office renovation, and specialty skills so clients can
            quickly find the right capability and supporting project examples.
          </p>
        </div>
      </section>

      <section id="projects" className="tectonic-grid bg-brand-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <article
                id={service.id}
                key={service.id}
                className="grid scroll-mt-28 grid-cols-1 overflow-hidden rounded-sm border border-brand-border bg-white shadow-minimal lg:grid-cols-12"
              >
                <div className="relative min-h-[320px] lg:col-span-5">
                  <Image
                    src={service.image}
                    alt={`${service.title} work example`}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover grayscale transition duration-700 hover:grayscale-0"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-brand-dark/15" />
                </div>

                <div className="p-8 sm:p-10 lg:col-span-7">
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <div>
                      <span className="mb-4 block font-label text-xs font-bold uppercase tracking-widest text-brand-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-headline text-4xl font-black tracking-tighter text-brand-dark">
                        {service.title}
                      </h2>
                    </div>
                    <Icon
                      name={service.icon}
                      className="text-4xl text-brand-accent"
                    />
                  </div>

                  <p className="mb-8 max-w-2xl text-lg leading-relaxed text-brand-muted">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {service.examples.map((example) => (
                      <div
                        key={example}
                        className="border-l-2 border-brand-accent bg-brand-light p-4"
                      >
                        <p className="text-sm font-semibold leading-relaxed text-brand-dark">
                          {example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Project Flow</SectionEyebrow>
            <h2 className="mb-6 font-headline text-4xl font-black leading-tight tracking-tighter text-brand-dark md:text-5xl">
              SERVICES CONNECT BACK TO A CLEAR PROCESS
            </h2>
            <p className="text-lg leading-relaxed text-brand-muted">
              Each service line pairs clear project language with relevant
              examples, then connects clients to Maxim&apos;s full front-to-back
              process from consultation through close-out.
            </p>
          </div>
          <div className="flex items-center justify-start lg:justify-end">
            <Link
              href="/process"
              className="inline-flex items-center gap-3 rounded-sm bg-brand-dark px-8 py-4 font-headline font-bold tracking-wide text-white! transition-all hover:bg-brand-accent"
            >
              VIEW PROCESS <Icon name="arrow_forward" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
