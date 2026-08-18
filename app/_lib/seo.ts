// Single source of truth for SEO-critical, non-visible site metadata.
// Used by layout metadata, sitemap, robots, and the JSON-LD structured data.

export const SITE_URL = "https://maximconstruction.net";

export const business = {
  name: "Maxim Construction",
  legalName: "Maxim Construction",
  alternateName: "Maxim Construction Management",
  url: SITE_URL,
  telephone: "+1-314-481-4111",
  // Self-hosted logo + a representative image for rich results / OG.
  logo: `${SITE_URL}/Maxim+Construction+Management+-+Heavy+Lifting+&+Millwrights+(1).webp`,
  ogImage: `${SITE_URL}/images/hero-construction.png`,
  address: {
    streetAddress: "5922 S Broadway",
    addressLocality: "St. Louis",
    addressRegion: "MO",
    postalCode: "63111",
    addressCountry: "US",
  },
  // Approximate coordinates for 5922 S Broadway, St. Louis, MO 63111.
  geo: {
    latitude: 38.5628,
    longitude: -90.2512,
  },
  // Primary service region for local search targeting.
  areaServed: "St. Louis Metropolitan Area, Missouri",
} as const;

// Localities used for areaServed in structured data — broadens local-pack
// relevance beyond the single metro string.
export const serviceAreas = [
  "St. Louis",
  "St. Louis County",
  "St. Charles County",
  "Jefferson County",
  "Metro East Illinois",
  "St. Louis Metropolitan Area",
] as const;

// Search phrases the site should rank for. Used in metadata keywords and
// as knowsAbout entries in the JSON-LD entity graph.
export const seoKeywords = [
  "St. Louis construction company",
  "construction management St. Louis",
  "commercial general contractor St. Louis",
  "industrial contractor St. Louis",
  "factory maintenance St. Louis",
  "plant maintenance services",
  "commercial property maintenance St. Louis",
  "property management maintenance services",
  "facility maintenance contractor",
  "office renovation St. Louis",
  "commercial build-out St. Louis",
  "millwright services St. Louis",
  "machine rigging St. Louis",
  "machine moving services",
  "industrial fabrication St. Louis",
] as const;

// Services offered beyond the four visible service lines — surfaced in the
// JSON-LD offer catalog so search engines index the full capability set.
export const extendedOfferings = [
  {
    name: "Commercial Property Maintenance",
    description:
      "Ongoing maintenance, repair, and renovation support for property managers, building owners, and facility teams across greater St. Louis.",
  },
  {
    name: "Millwright & Machine Rigging",
    description:
      "Millwright work, machine rigging, and machine moving for equipment installs, plant relocations, and production-line changes.",
  },
  {
    name: "Plant Shutdown & Turnaround Support",
    description:
      "Scheduled shutdown, turnaround, and production-area upgrade support for active industrial facilities.",
  },
] as const;

// Affiliated fabrication companies. Shown on the About page and in the
// footer, and included in the structured-data entity graph.
export const partners = [
  {
    name: "Western Blow Pipe",
    url: "https://www.westernblowpipe.net/",
    description:
      "St. Louis metal fabrication shop — stainless, aluminum, ductwork, pipe fittings, and industrial ventilation — fabricating, installing, and repairing since 1895.",
  },
  {
    name: "St. Louis Waterjet & Laser",
    url: "https://stlouiswaterjet.net/",
    description:
      "Precision 5-axis waterjet and laser cutting for metals, composites, and glass, with a 10' × 20' cutting table just down Broadway from Maxim.",
  },
  {
    name: "CFE-STL",
    url: "https://www.cfe-stl.com/",
    description:
      "Continental Fabricators & Erectors — ASME-certified industrial fabrication including pressure vessels, boilers, custom weldments, and process equipment from a 140,000 sq ft St. Louis facility.",
  },
] as const;
