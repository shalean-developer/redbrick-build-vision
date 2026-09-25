/** Canonical production origin, used for metadata, JSON-LD, and sitemap. */
export const siteOrigin = "https://teamedlick.co.za";

export const siteName = "Team Edlick Construction";

export const businessAddress = {
  streetAddress: "The Watershed, D03 Dock Road",
  addressLocality: "Cape Town",
  addressRegion: "Western Cape",
  addressCountry: "ZA",
  displayLines: [
    "The Watershed, D03 Dock Road",
    "Waterfront, Cape Town",
    "Western Cape, South Africa",
  ],
} as const;

export const businessPhones = ["+27685943091", "+27827587466"] as const;

export const defaultDescription =
  "Team Edlick Construction delivers construction, tiling, renovations, waterproofing, and paving across Cape Town and surrounding suburbs, Western Cape focus with clear quoting and coordinated trades.";

/** Existing in-repo Team Edlick construction image used for social previews. */
export const defaultOgImagePath = "/projects/gallery/edlick-01.png";
