import {
  businessAddress,
  businessPhones,
  defaultDescription,
  siteName,
  siteOrigin,
} from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${siteOrigin}/#organization`,
  name: siteName,
  alternateName: "Team Edlick PVT Ltd",
  url: siteOrigin,
  description: defaultDescription,
  logo: `${siteOrigin}/brand/teamedlick-logo.png`,
  telephone: businessPhones,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessAddress.streetAddress,
    addressLocality: businessAddress.addressLocality,
    addressRegion: businessAddress.addressRegion,
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
