/**
 * Service-page media slots.
 *
 * These are presentation assets only. They must not be described as completed
 * Team Edlick projects unless a verified project record backs the claim.
 */

export const CLIENT_AFTER_PROOF = "/projects/waterproofing-wet-areas-cape-town.jpg";

export type ShowcaseProject = {
  src: string;
  alt: string;
  caption: string;
  expectedPath: string;
};

export type BeforeAfterSet = {
  beforeSrc: string;
  afterSrc: string;
  expectedBeforePath: string;
  expectedAfterPath: string;
  caption: string;
};

export type AuthorityShowcase = {
  projects: ShowcaseProject[];
  beforeAfter: BeforeAfterSet;
};

export function getAuthorityShowcase(serviceSlug: string, citySlug: string, cityName: string): AuthorityShowcase {
  const base = `/projects/${serviceSlug}-${citySlug}`;
  const humanService = humanizeService(serviceSlug);

  const projects: ShowcaseProject[] = [
    {
      src: "/projects/placeholder-showcase.svg",
      expectedPath: `${base}-1.jpg`,
      alt: `${humanService} service illustration for ${cityName}`,
      caption: `${humanService} scope illustration. Replace with a verified Team Edlick project image before presenting this as project evidence.`,
    },
    {
      src: CLIENT_AFTER_PROOF,
      expectedPath: `${base}-2.jpg`,
      alt: `${humanService} service image for ${cityName}`,
      caption: `${humanService} service imagery for scope context; not presented as a completed project case study.`,
    },
  ];

  const beforeAfter: BeforeAfterSet = {
    beforeSrc: "/projects/placeholder-before.svg",
    afterSrc: "/projects/placeholder-after.svg",
    expectedBeforePath: `${base}-before.jpg`,
    expectedAfterPath: `${base}-after.jpg`,
    caption: `${humanService} before-and-after evidence will appear here once a verified project pair is available.`,
  };

  return { projects, beforeAfter };
}

function humanizeService(slug: string): string {
  const map: Record<string, string> = {
    construction: "Construction",
    tiling: "Tiling",
    painting: "Painting",
    "decking-flooring": "Decking & flooring",
    paving: "Paving",
    waterproofing: "Waterproofing",
    renovations: "Renovations",
    plumbing: "Plumbing",
  };
  return map[slug] ?? slug;
}
