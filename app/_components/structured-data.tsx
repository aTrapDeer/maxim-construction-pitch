import {
  SITE_URL,
  business,
  extendedOfferings,
  memberships,
  partners,
  seoKeywords,
  serviceAreas,
} from "../_lib/seo";
import { faqs, services } from "./site";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Values are static site content; escape "<" defensively per Next.js guidance.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

// Invisible JSON-LD structured data. Establishes Maxim as a single, unambiguous
// local business entity for Google (powers the business panel / rich results)
// and exposes the service catalog for entity recognition.
//
// The partner fabrication network (Western Blow Pipe, St. Louis Waterjet &
// Laser, CFE-STL) is included as related Organization entities per the
// client's request to promote those relationships.
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": `${SITE_URL}/#business`,
        name: business.name,
        legalName: business.legalName,
        alternateName: business.alternateName,
        url: business.url,
        logo: business.logo,
        image: business.ogImage,
        telephone: business.telephone,
        description:
          "St. Louis construction management, factory and plant maintenance, commercial property maintenance for property managers and building owners, office renovation, and specialty skilled work (millwright, machine rigging and moving) for commercial and industrial clients.",
        address: {
          "@type": "PostalAddress",
          ...business.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
        },
        areaServed: serviceAreas.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        knowsAbout: [...seoKeywords],
        // Trade memberships (ISN, COCA, MAoM) — trust signals for local rich
        // results and entity association.
        memberOf: memberships.map((membership) => ({
          "@type": "Organization",
          name: membership.fullName ?? membership.name,
          ...(membership.fullName ? { alternateName: membership.name } : {}),
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Construction & Maintenance Services",
          itemListElement: [
            ...services.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                url: `${SITE_URL}/services#${service.id}`,
                areaServed: business.areaServed,
              },
            })),
            ...extendedOfferings.map((offering) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: offering.name,
                description: offering.description,
                url: `${SITE_URL}/services`,
                areaServed: business.areaServed,
              },
            })),
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: business.name,
        alternateName: business.alternateName,
        url: business.url,
        logo: business.logo,
        telephone: business.telephone,
        // Affiliated fabrication companies — helps search engines connect the
        // Maxim entity with its partner network.
        knowsAbout: partners.map((partner) => partner.url),
      },
      ...partners.map((partner) => ({
        "@type": "Organization",
        "@id": `${partner.url}#organization`,
        name: partner.name,
        url: partner.url,
        description: `${partner.description} Fabrication partner of Maxim Construction in St. Louis.`,
      })),
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: business.name,
        url: business.url,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return <JsonLd data={graph} />;
}

// Per-page breadcrumb trail for rich results. Render on every page except home.
export function BreadcrumbSchema({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };

  return <JsonLd data={data} />;
}

// FAQPage schema mirroring the visible FAQ section — targets answer engines
// (AI search, featured snippets, "people also ask").
export function FaqSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}
