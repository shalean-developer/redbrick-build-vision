import { siteName, siteOrigin, defaultDescription } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteOrigin}/#organization`,
  name: siteName,
  alternateName: "Team Edlick PVT Ltd",
  url: siteOrigin,
  description: defaultDescription,
  logo: `${siteOrigin}/brand/teamedlick-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "The Watershed, D03 Dock Road",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      name: "Sam",
      telephone: "+27-68-594-3091",
      contactType: "customer service",
      areaServed: "Cape Town, Western Cape, ZA",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      name: "Bishop",
      telephone: "+27-82-758-7466",
      contactType: "customer service",
      areaServed: "Cape Town, Western Cape, ZA",
      availableLanguage: ["English"],
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
