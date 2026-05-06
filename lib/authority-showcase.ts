/**
 * Authority media for service × city pages.
 *
 * Before panels stay SVG placeholders until real “before” files exist.
 * After panel uses a client-provided on-site photo (`CLIENT_AFTER_PROOF`).
 */

/** Client-provided photo used for “after” proof across service × city pages. */
export const CLIENT_AFTER_PROOF = "/projects/waterproofing-wet-areas-cape-town.jpg";

export type ShowcaseProject = {
  /** Served image (SVG placeholder until JPG exists). */
  src: string;
  alt: string;
  caption: string;
  /** Drop this file under /public to replace the placeholder. */
  expectedPath: string;
};

export type BeforeAfterSet = {
  beforeSrc: string;
  afterSrc: string;
  /** Expected JPG paths for documentation. */
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
      alt: `${humanService} worksite documentation, ${cityName}`,
      caption: `Completed ${humanService.toLowerCase()} scope with substrate checks and QA hold-points, mobilised across ${cityName}.`,
    },
    {
      src: CLIENT_AFTER_PROOF,
      expectedPath: `${base}-2.jpg`,
      alt: `${humanService} finishes and protection, ${cityName}`,
      caption: `Finish protection, daily housekeeping, and snag discipline typical of ${cityName} estates and complexes.`,
    },
  ];

  const beforeAfter: BeforeAfterSet = {
    beforeSrc: "/projects/placeholder-before.svg",
    afterSrc: CLIENT_AFTER_PROOF,
    expectedBeforePath: `${base}-before.jpg`,
    expectedAfterPath: `${base}-after.jpg`,
    caption: `${humanService} transformation documented before handover, ${cityName}. After image shows a recent Cape Town metro programme.`,
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
