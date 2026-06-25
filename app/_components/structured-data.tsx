import { SITE_URL, business } from "../_lib/seo";
import { services } from "./site";

// Invisible JSON-LD structured data. Establishes Maxim as a single, unambiguous
// local business entity for Google (powers the business panel / rich results)
// and exposes the service catalog for entity recognition.
//
// Note: sister-company relationships and union/labor language are intentionally
// excluded here, per the client's request to keep those subtle.
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": `${SITE_URL}/#business`,
        name: business.name,
        legalName: business.legalName,
        url: business.url,
        logo: business.logo,
        image: business.ogImage,
        telephone: business.telephone,
        description:
          "Construction management, factory and plant maintenance, office renovation, and specialty skilled work (millwright, machine rigging and moving) for commercial and industrial clients in the St. Louis area.",
        address: {
          "@type": "PostalAddress",
          ...business.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: business.areaServed,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Construction & Maintenance Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: `${SITE_URL}/services#${service.id}`,
            },
          })),
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: business.name,
        url: business.url,
        logo: business.logo,
        telephone: business.telephone,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: business.name,
        url: business.url,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject here; values are static.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
