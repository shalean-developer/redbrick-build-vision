import { constructionServices } from "@/lib/construction-services";
import { locationPages } from "@/lib/locations";

/** Semantically adjacent services for topical internal linking (same city). */
export function getRelatedServiceSlugs(serviceSlug: string): string[] {
  const graph: Record<string, string[]> = {
    tiling: ["renovations", "waterproofing", "paving"],
    waterproofing: ["tiling", "renovations", "painting"],
    renovations: ["tiling", "plumbing", "painting"],
    plumbing: ["renovations", "tiling", "waterproofing"],
    painting: ["renovations", "waterproofing", "construction"],
    paving: ["construction", "decking-flooring", "waterproofing"],
    "decking-flooring": ["paving", "construction", "painting"],
    construction: ["renovations", "paving", "waterproofing"],
  };
  return graph[serviceSlug] ?? ["renovations", "construction"];
}

export function getSameServiceOtherCities(currentCity: string): { slug: string; name: string }[] {
  return locationPages.filter((l) => l.city !== currentCity).map((l) => ({ slug: l.city, name: l.name }));
}

export function resolveService(slug: string) {
  return constructionServices.find((s) => s.slug === slug);
}
