/** Blog index meta, body content lives in `components/blog/BlogArticleBody.tsx`. */
export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "cost-of-tiling-cape-town",
    title: "What Does Tiling Cost in Cape Town? (2026 Guide)",
    description:
      "Break down supply-and-fix tiling brackets, what moves price per m², and when waterproofing changes your quote.",
  },
  {
    slug: "bathroom-renovation-cost-south-africa",
    title: "Bathroom Renovation Costs in South Africa (Realistic Budget Bands)",
    description:
      "Scope tiers, hidden strip-out costs, and how sequencing tiling + waterproofing protects your budget.",
  },
  {
    slug: "how-long-does-renovation-take",
    title: "How Long Does a Home Renovation Take? Timelines That Match Reality",
    description:
      "Programme drivers, from lead times to curing windows, and how to plan occupancy during refurbishments.",
  },
  {
    slug: "tiling-mistakes-to-avoid",
    title: "7 Tiling Mistakes That Cause Callbacks (And How We Prevent Them)",
    description:
      "Substrate flatness, waterproofing holds, movement joints, and specification mismatches explained plainly.",
  },
  {
    slug: "best-flooring-options-south-africa",
    title: "Best Flooring Options for South African Homes (Climate + Traffic)",
    description:
      "Compare tiles, engineered flooring, and hybrid surfaces for coastal versus highveld conditions.",
  },
];
