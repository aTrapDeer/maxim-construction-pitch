// Single source of truth for SEO-critical, non-visible site metadata.
// Used by layout metadata, sitemap, robots, and the JSON-LD structured data.

export const SITE_URL = "https://maximconstruction.net";

export const business = {
  name: "Maxim Construction",
  legalName: "Maxim Construction",
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
