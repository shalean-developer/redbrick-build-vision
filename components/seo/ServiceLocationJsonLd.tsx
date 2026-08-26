import { siteName, siteOrigin } from "@/lib/site";

const postalAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: "The Watershed, D03 Dock Road",
  addressLocality: "Cape Town",
  addressRegion: "Western Cape",
  addressCountry: "ZA",
};

type FaqItem = { question: string; answer: string };

type Props = {
  path: string;
  serviceName: string;
  cityName: string;
  faqs?: FaqItem[];
};

export function ServiceLocationJsonLd({ path, serviceName, cityName, faqs = [] }: Props) {
  const pageUrl = `${siteOrigin}${path}`;
  const organizationId = `${siteOrigin}/#organization`;

  const areaServed =
    cityName === "Cape Town"
      ? {
          "@type": "City" as const,
          name: "Cape Town",
          alternateName: "City of Cape Town",
          containedInPlace: {
            "@type": "AdministrativeArea" as const,
            name: "Western Cape",
            containedInPlace: {
              "@type": "Country" as const,
              name: "South Africa",
            },
          },
        }
      : {
          "@type": "City" as const,
          name: cityName,
          containedInPlace: {
            "@type": "Country" as const,
            name: "South Africa",
          },
        };

  const graph: Record<string, unknown>[] = [
    {
      "@type": "GeneralContractor",
      "@id": organizationId,
      name: siteName,
      url: siteOrigin,
      description: `${siteName} provides ${serviceName} in ${cityName} and surrounding areas, South Africa.`,
      telephone: ["+27685943091", "+27827587466"],
      address: postalAddress,
      areaServed,
      knowsAbout: [serviceName, "Construction", "Renovations", cityName],
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${serviceName} in ${cityName}`,
          serviceType: serviceName,
          areaServed,
        },
      },
    },
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: `${serviceName} in ${cityName} | ${siteName}`,
      isPartOf: { "@type": "WebSite", name: siteName, url: siteOrigin },
      about: {
        "@type": "Service",
        name: `${serviceName} in ${cityName}`,
        provider: { "@id": organizationId },
      },
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    });
  }

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />
  );
}
