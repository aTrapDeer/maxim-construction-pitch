import Image from "next/image";
import Link from "next/link";

export const media = {
  heroConstruction: "/images/hero-construction.png",
  constructionManagement: "/images/construction-management.png",
  officeInterior: "/images/office-renovation.png",
  engineeringDetail: "/images/factory-maintenance.png",
  skyscraper: "/images/specialty-skills-millwright.png",
  logo:
    "/Maxim+Construction+Management+-+Heavy+Lifting+&+Millwrights+(1).webp",
} as const;

export const services = [
  {
    id: "construction-management",
    title: "Construction Management",
    icon: "engineering",
    image: media.constructionManagement,
    description:
      "Project leadership for high-stakes commercial and infrastructure work, from early coordination through close-out.",
    examples: [
      "General contracting oversight",
      "Subcontractor coordination",
      "Schedule, safety, and field execution management",
    ],
  },
  {
    id: "factory-maintenance",
    title: "Factory Maintenance",
    icon: "settings_suggest",
    image: media.engineeringDetail,
    description:
      "Maintenance support for active plant environments where downtime, safety, and documentation matter.",
    examples: [
      "Year-round plant maintenance programs",
      "Shutdown support and production-area upgrades",
      "Reactive facility repairs and equipment support",
    ],
  },
  {
    id: "office-renovation",
    title: "Office Renovation",
    icon: "domain",
    image: media.officeInterior,
    description:
      "White box, workspace, and commercial renovation work delivered with clean sequencing and minimal disruption.",
    examples: [
      "Office build-outs and refreshes",
      "White box construction",
      "Commercial workspace reconfiguration",
    ],
  },
  {
    id: "specialty-skills",
    title: "Specialty Skills",
    icon: "construction",
    image: media.skyscraper,
    description:
      "A flexible category for machine rigging, machine moving, millwright work, and specialized facility projects.",
    examples: [
      "Machine rigging and moving",
      "Millwright and equipment support",
      "Specialized facility maintenance",
    ],
  },
] as const;

export const processSteps = [
  {
    title: "Consultation",
    description:
      "Define the project need, site constraints, stakeholders, safety expectations, and the right first move.",
  },
  {
    title: "Engineering",
    description:
      "Turn field realities into a workable approach with the right technical input before crews mobilize.",
  },
  {
    title: "Design",
    description:
      "Shape the plan, materials, sequencing, and documentation so the work is ready to execute cleanly.",
  },
  {
    title: "Execution",
    description:
      "Coordinate trades, maintain communication, and move the work forward with surgical precision.",
  },
  {
    title: "Punch List",
    description:
      "Verify details, resolve open items, and make sure the finished work matches the agreed scope.",
  },
  {
    title: "Close-Out",
    description:
      "Wrap documentation, owner requirements, final coordination, and handoff so the project finishes correctly.",
  },
] as const;

export const stats = [
  { value: "150+", label: "Completed Projects" },
  { value: "0.00", label: "Safety Incident Rate" },
  { value: "200K", label: "Sq. Ft. Fabrication Capability" },
  { value: "24/7", label: "Site Support" },
] as const;

type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className = "" }: IconProps) {
  const classes = `inline-block shrink-0 align-middle ${className}`.trim();

  switch (name) {
    case "architecture":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <path d="M4 20h16" />
          <path d="M6 20V9l6-5 6 5v11" />
          <path d="M9 20v-5h6v5" />
          <path d="M10 9h4" />
        </svg>
      );
    case "arrow_forward":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "engineering":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <path d="M14 6a4 4 0 0 0 4 4l-7 7a2 2 0 0 1-3 0l-1-1a2 2 0 0 1 0-3l7-7a4 4 0 0 0 4 0" />
          <path d="m5 19 2-2" />
        </svg>
      );
    case "north_east":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      );
    case "domain":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={classes}>
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
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={classes}>
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
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <path d="M3 21V10l6 3V9l6 3V6l6 3v12Z" />
          <path d="M8 21v-4" />
          <path d="M13 21v-4" />
          <path d="M18 21v-4" />
        </svg>
      );
    case "verified":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <path d="M12 3 5 6v6c0 5 3.4 7.9 7 9 3.6-1.1 7-4 7-9V6Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "layers":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <path d="m12 4 8 4-8 4-8-4 8-4Z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 16 8 4 8-4" />
        </svg>
      );
    case "history_edu":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <path d="M6 4h8l4 4v12H6Z" />
          <path d="M14 4v4h4" />
          <path d="M9 13c1.2-2 4.8-2 6 0" />
          <path d="M9 16h6" />
        </svg>
      );
    case "construction":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <path d="m14 4 6 6" />
          <path d="m11 7 6 6" />
          <path d="m4 20 9-9" />
          <path d="M3 21h4" />
        </svg>
      );
    case "document":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <path d="M6 3h8l4 4v14H6Z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
      );
    case "mail":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <path d="M4 6h16v12H4Z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={classes}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export function Header() {
  const navLinks = [
    { href: "/services#projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-brand-border bg-white/85 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="Maxim home">
          <Image
            src={media.logo}
            alt="MAXIM logo"
            width={900}
            height={900}
            className="h-12 w-12 object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-headline text-sm font-medium tracking-tight text-brand-muted transition-colors hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/quote"
          className="flex shrink-0 items-center gap-2 rounded-sm bg-brand-accent px-4 py-2.5 font-headline text-sm font-bold tracking-tight text-white! shadow-hover transition-all duration-300 hover:bg-brand-dark hover:text-white! active:scale-95 sm:px-6"
        >
          Get Quote
          <Icon name="arrow_forward" className="text-sm text-white" />
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#050505] px-6 py-16 text-brand-muted">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="mb-8 flex items-center gap-3">
            <Image
              src={media.logo}
              alt="MAXIM logo"
              width={900}
              height={900}
              className="h-24 w-24 object-contain"
            />
          </div>
          <p className="mb-8 max-w-xs text-sm leading-relaxed">
            Construction management, maintenance, renovation, and specialty
            project support for commercial and plant environments.
          </p>
          <Link
            href="/blueprints"
            className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-brand-accent"
          >
            Bid Documents <Icon name="arrow_forward" />
          </Link>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <h2 className="mb-6 font-headline text-sm font-bold uppercase tracking-widest text-white">
            Solutions
          </h2>
          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="text-sm text-brand-muted transition-colors duration-300 hover:text-brand-accent"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-6 font-headline text-sm font-bold uppercase tracking-widest text-white">
            Company
          </h2>
          <ul className="space-y-4">
            {[
              ["Process", "/process"],
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Get Quote", "/quote"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-brand-muted transition-colors duration-300 hover:text-brand-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-6 font-headline text-sm font-bold uppercase tracking-widest text-white">
            Contact
          </h2>
          <address className="text-sm not-italic leading-relaxed">
            5922 S Broadway
            <br />
            St. Louis, MO 63111
            <br />
            <a
              href="tel:+13144811411"
              className="font-bold text-white transition-colors hover:text-brand-accent"
            >
              (314) 481-4111
            </a>
            <br />
            <br />
            <Link
              href="/contact"
              className="font-bold text-white transition-colors hover:text-brand-accent"
            >
              Contact Maxim
            </Link>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
        <span className="font-label text-xs tracking-widest">
          &copy; 2026 MAXIM CONSTRUCTION. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-8">
          <span className="font-label text-[10px] uppercase tracking-widest text-white/50">
            ISN
          </span>
          <span className="font-label text-[10px] uppercase tracking-widest text-white/50">
            KOKA
          </span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="selection:bg-brand-accent selection:text-white bg-brand-light text-brand-gray font-body antialiased">
      <Header />
      <main className="pt-[73px]">{children}</main>
      <Footer />
    </div>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest text-brand-accent">
      <span className="h-px w-8 bg-brand-accent" />
      {children}
    </span>
  );
}

export function HeroImage() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={media.heroConstruction}
        alt="Major infrastructure construction"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45 mix-blend-luminosity grayscale"
      />
      <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/80 to-brand-dark/20" />
    </div>
  );
}
