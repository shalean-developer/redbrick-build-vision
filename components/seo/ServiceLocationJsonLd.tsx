import { siteName, siteOrigin } from "@/lib/site";

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
  const serviceId = `${pageUrl}#service`;

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
          "@type": "Place" as const,
          name: `${cityName}, Cape Town, Western Cape, South Africa`,
        };

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Service",
      "@id": serviceId,
      name: `${serviceName} in ${cityName}`,
      serviceType: serviceName,
      provider: { "@id": organizationId },
      areaServed,
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: `${serviceName} in ${cityName} | ${siteName}`,
      isPartOf: { "@type": "WebSite", name: siteName, url: siteOrigin },
      about: { "@id": serviceId },
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
