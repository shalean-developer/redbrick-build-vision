/**
 * Authority media for service × city pages.
 *
 * Placeholders load from /public/projects/*.svg so nothing 404s.
 * Add JPGs using `expectedPath` filenames when you have real photos.
 */

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
      src: "/projects/placeholder-after.svg",
      expectedPath: `${base}-2.jpg`,
      alt: `${humanService} finishes and protection, ${cityName}`,
      caption: `Finish protection, daily housekeeping, and snag discipline typical of ${cityName} estates and complexes.`,
    },
  ];

  const beforeAfter: BeforeAfterSet = {
    beforeSrc: "/projects/placeholder-before.svg",
    afterSrc: "/projects/placeholder-after.svg",
    expectedBeforePath: `${base}-before.jpg`,
    expectedAfterPath: `${base}-after.jpg`,
    caption: `${humanService} transformation documented before handover, ${cityName}. Replace with your real before/after pair.`,
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
