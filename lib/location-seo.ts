export type LocationSeoLevel = "regional-hub" | "suburb";

export type LocationSeoEvidence = {
  slug: string;
  level: LocationSeoLevel;
  indexable: boolean;
  serviceLocationEligible: boolean;
  evidenceSummary: string;
};

/**
 * Canonical publication gate for location SEO.
 *
 * Rules:
 * - A location must be explicitly listed here before it may be indexable.
 * - `serviceLocationEligible` is stricter than a standalone location page: it permits
 *   generation of `/services/[service]/[location]` combinations.
 * - Suburbs should not receive service-by-suburb pages merely because they are named
 *   in coverage copy. Add those only after materially differentiated local evidence exists.
 */
export const locationSeoEvidence: LocationSeoEvidence[] = [
  {
    slug: "cape-town",
    level: "regional-hub",
    indexable: true,
    serviceLocationEligible: true,
    evidenceSummary:
      "Primary operating region with differentiated climate/build context, service coverage, pricing/process guidance and verified Team Edlick portfolio evidence.",
  },
  {
    slug: "bellville",
    level: "suburb",
    indexable: true,
    serviceLocationEligible: false,
    evidenceSummary:
      "Controlled standalone suburb page with Bellville-specific quoting context and explicit disclosure that portfolio imagery is not Bellville-specific project proof.",
  },
];

export function getLocationSeoEvidence(slug: string): LocationSeoEvidence | undefined {
  return locationSeoEvidence.find((item) => item.slug === slug);
}

export function canIndexLocation(slug: string): boolean {
  return getLocationSeoEvidence(slug)?.indexable === true;
}

export function canPublishServiceLocation(slug: string): boolean {
  const evidence = getLocationSeoEvidence(slug);
  return evidence?.indexable === true && evidence.serviceLocationEligible === true;
}
