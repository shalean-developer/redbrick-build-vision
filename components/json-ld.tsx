import {
  businessAddress,
  primaryBusinessPhone,
  defaultDescription,
  siteName,
  siteOrigin,
} from "@/lib/site";

const organizationId = `${siteOrigin}/#organization`;
const websiteId = `${siteOrigin}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": organizationId,
      name: siteName,
      alternateName: "Team Edlick PVT Ltd",
      url: siteOrigin,
      description: defaultDescription,
      logo: `${siteOrigin}/brand/teamedlick-logo.png`,
      telephone: primaryBusinessPhone,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessAddress.streetAddress,
        addressLocality: businessAddress.addressLocality,
        addressRegion: businessAddress.addressRegion,
        postalCode: businessAddress.postalCode,
        addressCountry: businessAddress.addressCountry,
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
      contactPoint: [
        {
          "@type": "ContactPoint",
          name: "Sam",
          telephone: "+27-68-594-3091",
          contactType: "customer service",
          areaServed: "Cape Town, Western Cape, ZA",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteOrigin,
      name: siteName,
      inLanguage: "en-ZA",
      publisher: { "@id": organizationId },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
