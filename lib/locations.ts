export type LocationPage = {
  city: string;
  name: string;
  description: string;
  /** Named suburbs for local proof copy, not a service area guarantee. */
  focusSuburbs: string[];
  /** Climate / build-context note for EEAT-style differentiation. */
  regionalBuildNote: string;
};

/**
 * Active programmatic SEO locations.
 * Legacy Johannesburg URLs redirect to Cape Town (see next.config.ts redirects).
 */
export const locationPages: LocationPage[] = [
  {
    city: "cape-town",
    name: "Cape Town",
    description:
      "Construction, tiling, renovations, waterproofing, and paving across Cape Town and surrounding suburbs, from the Atlantic Seaboard to the northern suburbs. Request a scoped quote for residential and commercial work.",
    focusSuburbs: [
      "Claremont",
      "Sea Point",
      "Bellville",
      "Observatory",
      "Rondebosch",
      "Camps Bay",
      "Woodstock",
      "Milnerton",
      "Durbanville",
      "Table View",
    ],
    regionalBuildNote:
      "Coastal moisture, salt-laden air, and wind-driven rain mean adhesives, membranes, and coatings must be specified for durability, not inland defaults.",
  },
];
