import Link from "next/link";
import { Icon, PageShell, SectionEyebrow } from "../_components/site";

export const metadata = {
  title: "About",
  description:
    "About Maxim Construction, its credentials, local skilled craftsmen, and fabrication relationships.",
};

const credentials = ["ISN", "KOKA", "Safety and trade credentials"];

const relationshipNotes = [
  "Access to fabrication relationships through Western Heights Waterjet / Laser Jet.",
  "Additional fabrication support through Confab relationships.",
  "Approximately 200,000 square feet of combined fabrication capability across related resources.",
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="bg-brand-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionEyebrow>About Maxim</SectionEyebrow>
          <h1 className="mb-8 max-w-4xl font-headline text-5xl font-black leading-tight tracking-tighter md:text-7xl">
            LOCAL SKILLED CRAFTSMEN FOR INDUSTRIAL AND COMMERCIAL WORK
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-white/72">
            Maxim supports construction management, factory maintenance, office
            renovation, and specialty work with a practical field-first team and
            trusted resource relationships.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionEyebrow>Company History</SectionEyebrow>
            <h2 className="mb-6 font-headline text-4xl font-black leading-tight tracking-tighter text-brand-dark md:text-5xl">
              A COMPANY PROFILE BUILT AROUND CAPABILITY AND TRUST
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-brand-muted">
              Maxim introduces its history through the work it supports:
              commercial renovations, plant maintenance, construction
              management, and specialty field coordination for demanding sites.
            </p>
            <p className="text-lg leading-relaxed text-brand-muted">
              The core labor message is direct: utilizing local skilled
              craftsmen for demanding commercial, industrial, and maintenance
              projects.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm border border-brand-border bg-brand-light p-8">
              <Icon name="verified" className="mb-6 text-4xl text-brand-accent" />
              <h2 className="mb-4 font-headline text-3xl font-black tracking-tighter text-brand-dark">
                Credentials
              </h2>
              <ul className="space-y-4">
                {credentials.map((credential) => (
                  <li
                    key={credential}
                    className="flex items-center gap-3 border-b border-brand-border pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="h-2 w-2 bg-brand-accent" />
                    <span className="font-semibold text-brand-dark">
                      {credential}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="tectonic-grid bg-brand-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <SectionEyebrow>Resource Relationships</SectionEyebrow>
            <h2 className="mb-6 font-headline text-4xl font-black leading-tight tracking-tighter text-brand-dark md:text-5xl">
              FABRICATION ACCESS WITHOUT MAKING IT THE HEADLINE
            </h2>
            <p className="text-lg leading-relaxed text-brand-muted">
              Fabrication relationships strengthen Maxim&apos;s field capability
              while keeping the primary story focused on Maxim&apos;s direct
              project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relationshipNotes.map((note) => (
              <article
                key={note}
                className="rounded-sm border border-brand-border bg-white p-6 shadow-minimal"
              >
                <Icon
                  name="layers"
                  className="mb-6 text-3xl text-brand-accent"
                />
                <p className="leading-relaxed text-brand-muted">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <SectionEyebrow>Next Step</SectionEyebrow>
            <h2 className="font-headline text-4xl font-black tracking-tighter">
              Need a project conversation?
            </h2>
          </div>
          <Link
            href="/quote"
            className="inline-flex items-center gap-3 rounded-sm bg-brand-accent px-8 py-4 font-headline font-bold tracking-wide text-white! transition-all hover:bg-white hover:text-brand-dark!"
          >
            GET QUOTE <Icon name="arrow_forward" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
