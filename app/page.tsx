import Image from "next/image";

const navLinks = [
  { href: "#projects", label: "Projects", active: true },
  { href: "#services", label: "Services", active: false },
  { href: "#process", label: "Process", active: false },
  { href: "#about", label: "About", active: false },
];

const stats = [
  { value: "150+", label: "Completed High-Rises" },
  { value: "0.00", label: "Safety Incident Rate" },
  { value: "$4.2B", label: "Managed Assets" },
  { value: "24/7", label: "Site Monitoring" },
];

const advantages = [
  {
    icon: "verified",
    title: "Ironclad Reliability",
    description:
      "We operate on a 0% failure protocol. Our delivery timelines are treated as structural mandates, not suggestions.",
  },
  {
    icon: "layers",
    title: "Industrial Versatility",
    description:
      "From 50-story commercial monoliths to high-precision cleanrooms, our engineering scope knows no bounds.",
  },
  {
    icon: "history_edu",
    title: "Legacy Experience",
    description:
      "Three decades of structural integrity. We've built the foundations of modern industry across four continents.",
  },
];

const solutionLinks = [
  "Construction Management",
  "Office Renovation",
  "Factory Maintenance",
];

const inquiryLinks = ["Special Projects", "Contact", "Privacy Policy"];

const socialIcons = ["public", "share", "shield"];

type IconProps = {
  name: string;
  className?: string;
};

function Icon({ name, className = "" }: IconProps) {
  const classes = `inline-block shrink-0 align-middle ${className}`.trim();

  switch (name) {
    case "architecture":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="M4 20h16" />
          <path d="M6 20V9l6-5 6 5v11" />
          <path d="M9 20v-5h6v5" />
          <path d="M10 9h4" />
        </svg>
      );
    case "arrow_forward":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "engineering":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="M14 6a4 4 0 0 0 4 4l-7 7a2 2 0 0 1-3 0l-1-1a2 2 0 0 1 0-3l7-7a4 4 0 0 0 4 0" />
          <path d="m5 19 2-2" />
        </svg>
      );
    case "north_east":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      );
    case "domain":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="M3 21h18" />
          <path d="M5 21V7h14v14" />
          <path d="M8 10h2" />
          <path d="M8 14h2" />
          <path d="M14 10h2" />
          <path d="M14 14h2" />
        </svg>
      );
    case "settings_suggest":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="M5 6h14" />
          <path d="M5 12h14" />
          <path d="M5 18h14" />
          <circle cx="9" cy="6" r="2" fill="currentColor" stroke="none" />
          <circle cx="15" cy="12" r="2" fill="currentColor" stroke="none" />
          <circle cx="11" cy="18" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "factory":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="M3 21V10l6 3V9l6 3V6l6 3v12Z" />
          <path d="M8 21v-4" />
          <path d="M13 21v-4" />
          <path d="M18 21v-4" />
        </svg>
      );
    case "verified":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="M12 3 5 6v6c0 5 3.4 7.9 7 9 3.6-1.1 7-4 7-9V6Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "layers":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="m12 4 8 4-8 4-8-4 8-4Z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 16 8 4 8-4" />
        </svg>
      );
    case "history_edu":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="M6 4h8l4 4v12H6Z" />
          <path d="M14 4v4h4" />
          <path d="M9 13c1.2-2 4.8-2 6 0" />
          <path d="M9 16h6" />
        </svg>
      );
    case "construction":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="m14 4 6 6" />
          <path d="m11 7 6 6" />
          <path d="m4 20 9-9" />
          <path d="M3 21h4" />
        </svg>
      );
    case "public":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    case "share":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.6 10.7 6.8-4.4" />
          <path d="m8.6 13.3 6.8 4.4" />
        </svg>
      );
    case "shield":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <path d="M12 3 5 6v6c0 5 3.4 7.9 7 9 3.6-1.1 7-4 7-9V6Z" />
          <path d="M12 8v8" />
          <path d="M9 12h6" />
        </svg>
      );
    default:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes}
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

function MaterialSymbol({
  name,
  className = "",
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {
  return (
    <Icon name={name} className={className} />
  );
}

export default function Home() {
  return (
    <div className="selection:bg-brand-accent selection:text-white bg-brand-light text-brand-gray font-body antialiased">
      <nav className="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-xl border-b border-brand-border">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand-dark">
              <MaterialSymbol name="architecture" className="text-xl text-white" />
            </div>
            <span className="font-headline text-2xl font-black tracking-tighter text-brand-dark">
              MAXIM
            </span>
          </div>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.active
                    ? "font-headline text-sm font-semibold tracking-tight text-brand-accent transition-colors"
                    : "font-headline text-sm font-medium tracking-tight text-brand-muted transition-colors hover:text-brand-dark"
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-sm bg-brand-accent px-6 py-2.5 font-headline text-sm font-bold tracking-tight text-white! shadow-hover transition-all duration-300 hover:bg-brand-dark hover:text-white! active:scale-95"
          >
            Get a Quote
            <MaterialSymbol name="arrow_forward" className="text-sm text-white" />
          </a>
        </div>
      </nav>

      <main className="pt-[73px]">
        <section
          id="projects"
          className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-dark pt-24 pb-16"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYl-kUzWGdNfTzQvHQhgd9LVlOnBHtNxM6b_7ECESbIOOz9gEwIbOUPQUCb0uw7SZHlCvkigEgdXG84eefdRFT4i5QRUupGJmlFaAD-YQkVOnHRMvg54V7f8fZUvHsZ5DnkDiZpfptsSyo2nUxSD_4OF8Tg02a_ixgDsGuII-Z2tlqAK92GESWq_vFEmIC0L3OqT-ZN0mWu1QqwLyaFCLQGNK4wd1rU2QNCEy-Xk8RpwIkKv_DeGsMzSZj3ISCC65NNu24b01tdPU"
              alt="Major infrastructure construction"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30 mix-blend-luminosity grayscale"
            />
            <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/90 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
            <div className="flex flex-col justify-center lg:col-span-9">
              <h1 className="animate-fade-in-up opacity-0-init mb-8 font-headline text-6xl font-black leading-[0.85] tracking-tighter text-white md:text-8xl lg:text-[7rem]">
                BUILDING <br />
                <span className="bg-linear-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">
                  EXCELLENCE
                </span>{" "}
                <br />
                FROM CONCEPT
              </h1>

              <p className="animate-fade-in-up animation-delay-100 opacity-0-init mb-12 max-w-2xl text-xl font-light leading-relaxed text-brand-muted md:text-2xl">
                Executing high-stakes infrastructure and commercial projects
                with surgical precision and industrial authority.
              </p>

              <div className="animate-fade-in-up animation-delay-200 opacity-0-init flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group flex items-center gap-3 rounded-sm bg-brand-accent px-8 py-4 font-headline font-bold tracking-wide text-white! shadow-hover transition-all duration-300 hover:bg-white hover:text-brand-dark!"
                >
                  START YOUR PROJECT
                  <MaterialSymbol
                    name="arrow_forward"
                    className="text-white group-hover:text-brand-dark"
                  />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-sm border-2 border-white bg-white/10 px-8 py-4 font-headline font-bold tracking-wide text-white! backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 hover:border-white hover:bg-white hover:text-brand-dark!"
                >
                  VIEW BLUEPRINTS
                </a>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-300 opacity-0-init hidden self-end pb-4 lg:col-span-3 lg:block">
              <div className="border-l border-brand-accent pl-6">
                <div className="mb-8">
                  <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-brand-muted">
                    Active Site Coordinates
                  </span>
                  <span className="font-headline text-xl font-medium text-white">
                    40.7128 N, 74.0060 W
                  </span>
                </div>
                <div>
                  <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-brand-muted">
                    Current Load Capacity
                  </span>
                  <span className="font-headline text-xl font-medium text-white">
                    14,200 Metric Tons
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-brand-border bg-white py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat) => {
              const valueMatch = stat.value.match(/^([\d.]+)(.*)$/);
              const numericPart = valueMatch ? valueMatch[1] : stat.value;
              const suffixPart = valueMatch ? valueMatch[2] : "";

              return (
                <div key={stat.label} className="flex flex-col gap-2">
                  <span className="font-headline text-5xl font-black tracking-tighter text-brand-dark">
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

        <section id="services" className="tectonic-grid bg-brand-light py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest text-brand-accent">
                  <span className="h-px w-8 bg-brand-accent"></span> Our
                  Operations
                </span>
                <h2 className="font-headline text-5xl font-black leading-tight tracking-tighter text-brand-dark md:text-6xl">
                  INDUSTRIAL GRADE <br />
                  <span className="text-brand-muted">SOLUTIONS</span>
                </h2>
              </div>
              <div className="hidden pb-4 md:block">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-headline font-bold text-brand-dark transition-colors hover:text-brand-accent"
                >
                  View All Services <MaterialSymbol name="arrow_forward" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="group cursor-pointer">
                <div className="flex h-full flex-col justify-between rounded-sm border border-brand-border/50 bg-white p-10 shadow-minimal transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div>
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-sm bg-brand-light transition-colors duration-500 group-hover:bg-brand-accent">
                      <MaterialSymbol
                        name="engineering"
                        className="text-2xl text-brand-dark transition-colors group-hover:text-white"
                      />
                    </div>
                    <h3 className="mb-4 font-headline text-3xl font-bold tracking-tight text-brand-dark">
                      Construction Management
                    </h3>
                    <p className="mb-8 leading-relaxed text-brand-muted">
                      Expert project leadership ensuring every weld, beam, and
                      circuit meets the highest 2026 industry benchmarks with
                      zero compromise on quality.
                    </p>
                  </div>
                  <div className="mb-6 h-px w-full bg-brand-border transition-colors group-hover:bg-brand-accent/20"></div>
                  <span className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-widest text-brand-dark transition-colors group-hover:text-brand-accent">
                    Explore Specs{" "}
                    <MaterialSymbol
                      name="north_east"
                      className="text-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex h-full flex-col justify-between rounded-sm border border-brand-border/50 bg-white p-10 shadow-minimal transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div>
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-sm bg-brand-light transition-colors duration-500 group-hover:bg-brand-accent">
                      <MaterialSymbol
                        name="domain"
                        className="text-2xl text-brand-dark transition-colors group-hover:text-white"
                      />
                    </div>
                    <h3 className="mb-4 font-headline text-3xl font-bold tracking-tight text-brand-dark">
                      Office Renovation
                    </h3>
                    <p className="mb-8 leading-relaxed text-brand-muted">
                      Modernizing your workspace for the future with
                      tech-integrated structural updates, sustainable materials,
                      and adaptive layouts.
                    </p>
                  </div>
                  <div className="mb-6 h-px w-full bg-brand-border transition-colors group-hover:bg-brand-accent/20"></div>
                  <span className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-widest text-brand-dark transition-colors group-hover:text-brand-accent">
                    Explore Specs{" "}
                    <MaterialSymbol
                      name="north_east"
                      className="text-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="process"
          className="overflow-hidden border-t border-brand-border bg-white py-32"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 px-6 lg:grid-cols-2">
            <div>
              <span className="mb-4 flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest text-brand-accent">
                <span className="h-px w-8 bg-brand-accent"></span> The
                Advantage
              </span>
              <h2 className="mb-16 font-headline text-5xl font-black leading-tight tracking-tighter text-brand-dark md:text-6xl">
                ENGINEERED FOR <br />
                ABSOLUTE <span className="text-brand-accent">PRECISION</span>
              </h2>

              <div className="space-y-10">
              <div className="group flex gap-6 transition-all duration-300 hover:-translate-y-1">
                <div className="mt-1 shrink-0">
                  <MaterialSymbol
                    name="verified"
                    className="text-3xl text-brand-accent"
                  />
                </div>
                <div>
                  <h4 className="mb-3 font-headline text-2xl font-bold tracking-tight text-brand-dark transition-colors group-hover:text-brand-accent">
                    Ironclad Reliability
                  </h4>
                  <p className="text-lg leading-relaxed text-brand-muted">
                    We operate on a 0% failure protocol. Our delivery
                    timelines are treated as structural mandates, not
                    suggestions.
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-brand-border/50"></div>

              <div className="group flex gap-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="mt-1 shrink-0">
                    <MaterialSymbol
                      name="layers"
                      className="text-3xl text-brand-accent"
                    />
                  </div>
                  <div>
                    <h4 className="mb-3 font-headline text-2xl font-bold tracking-tight text-brand-dark transition-colors group-hover:text-brand-accent">
                      Industrial Versatility
                    </h4>
                    <p className="text-lg leading-relaxed text-brand-muted">
                      From 50-story commercial monoliths to high-precision
                      cleanrooms, our engineering scope knows no bounds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="clip-diagonal relative aspect-4/5 overflow-hidden rounded-sm bg-brand-light">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqExpTNrRlsS3GE1gI5ubsn7OGaRybHi5TsqoZVdpNR39K4ls2F17SMUmcCOwAr8FOM5jndSLpgRXIClGvtmvvB-c3JfPciP0FQoreHCczte7H0zIyoT73NhqUkqVbUx4ggxzDchyocpll0Qy-fo7O1ASMyvEOqy8USVWtohgwgXGPo4egyjkv0pmdKl0dTR4g1XZ1ins_vFXuxd_m5LkXaSg5XlJMEcPYa-nFrej2mqTEQy5vcBFvt4FjfWp8ehAYprhvYxqctDc"
                  alt="Modern skyscraper detail"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-dark/80 to-transparent" />

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="inline-block rounded-sm bg-brand-accent p-8 text-white backdrop-blur-md">
                    <span className="mb-2 block font-headline text-6xl font-black tracking-tighter">
                      34+
                    </span>
                    <span className="font-label text-xs font-bold uppercase tracking-widest">
                      Patented Methods
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-brand-dark py-32 text-white"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="tectonic-grid h-full w-full"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-8 font-headline text-5xl font-black leading-tight tracking-tighter md:text-7xl">
              READY TO BUILD <br />
              THE <span className="text-brand-accent">FUTURE?</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl font-light text-brand-muted">
              Connect with our senior management team for a technical
              consultation and preliminary quote for your next major
              development.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="mailto:quotes@maxim.example"
                className="group flex w-full items-center justify-center gap-3 rounded-sm bg-brand-accent px-10 py-5 font-headline text-lg font-bold tracking-wide text-white! shadow-hover transition-all duration-300 hover:bg-white hover:text-brand-dark! sm:w-auto"
              >
                INITIATE PROJECT
                <MaterialSymbol
                  name="arrow_forward"
                  className="text-white group-hover:text-brand-dark"
                />
              </a>
              <a
                href="#services"
                className="w-full rounded-sm border-2 border-white/40 bg-white/5 px-10 py-5 font-headline text-lg font-bold tracking-wide text-white! ring-1 ring-white/15 transition-all duration-300 hover:border-white hover:bg-white/10 sm:w-auto"
              >
                VIEW TECHNICAL SPECS
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="about" className="w-full border-t border-white/10 bg-[#050505] px-6 py-20 text-brand-muted">
        <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-white">
                <MaterialSymbol
                  name="architecture"
                  className="text-xl text-brand-dark"
                />
              </div>
              <span className="font-headline text-2xl font-black tracking-tighter text-white">
                MAXIM
              </span>
            </div>
            <p className="mb-8 max-w-xs font-body text-sm leading-relaxed">
              Engineering the future through tectonic precision and unwavering
              structural integrity since 1996.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-brand-muted transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent hover:text-white"
                >
                  <MaterialSymbol name={icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h5 className="mb-6 font-headline text-sm font-bold uppercase tracking-widest text-white">
              Solutions
            </h5>
            <ul className="space-y-4">
              {solutionLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-brand-muted transition-colors duration-300 hover:text-brand-accent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="mb-6 font-headline text-sm font-bold uppercase tracking-widest text-white">
              Company
            </h5>
            <ul className="space-y-4">
              {inquiryLinks.map((item) => (
                <li key={item}>
                  <a
                    href={item === "Privacy Policy" ? "#" : "#contact"}
                    className="text-sm text-brand-muted transition-colors duration-300 hover:text-brand-accent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="mb-6 font-headline text-sm font-bold uppercase tracking-widest text-white">
              Site HQ
            </h5>
            <p className="font-body text-sm leading-relaxed">
              1200 Industrial Way
              <br />
              Structural District, NY 10013
              <br />
              <br />
              <span className="font-bold text-white">+1 (800) MAXIM-CM</span>
            </p>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <span className="font-label text-xs tracking-widest">
            © 2026 MAXIM CONSTRUCTION. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-8">
            <span className="font-label text-[10px] uppercase tracking-widest text-white/50">
              ISO 9001:2026
            </span>
            <span className="font-label text-[10px] uppercase tracking-widest text-white/50">
              LEED PLATINUM
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
