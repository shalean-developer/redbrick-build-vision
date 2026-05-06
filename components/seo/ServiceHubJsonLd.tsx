import { siteName, siteOrigin } from "@/lib/site";

type Props = {
  path: string;
  serviceName: string;
  description: string;
};

export function ServiceHubJsonLd({ path, serviceName, description }: Props) {
  const pageUrl = `${siteOrigin}${path}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: `${serviceName} Services in Cape Town`,
      description,
      isPartOf: {
        "@type": "WebSite",
        url: siteOrigin,
        name: siteName,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: `${serviceName} services`,
      serviceType: serviceName,
      provider: {
        "@type": "Organization",
        name: siteName,
        url: siteOrigin,
      },
      areaServed: {
        "@type": "City",
        name: "Cape Town",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Western Cape",
          containedInPlace: { "@type": "Country", name: "South Africa" },
        },
      },
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteOrigin },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteOrigin}/services` },
        { "@type": "ListItem", position: 3, name: `${serviceName} services`, item: pageUrl },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
