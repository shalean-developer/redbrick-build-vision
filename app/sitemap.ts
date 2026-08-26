import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { constructionServices } from "@/lib/construction-services";
import { locationPages } from "@/lib/locations";
import { siteOrigin } from "@/lib/site";

const staticPaths: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.88 },
  { path: "/locations", priority: 0.86 },
  { path: "/locations/bellville", priority: 0.78 },
  { path: "/projects", priority: 0.82 },
  { path: "/contact", priority: 0.84 },
  { path: "/about", priority: 0.78 },
  { path: "/careers", priority: 0.72 },
  { path: "/blog", priority: 0.76 },
  { path: "/partners/shalean-cleaning-services", priority: 0.62 },
  { path: "/privacy-policy", priority: 0.5 },
  { path: "/terms-conditions", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const main = staticPaths.map(({ path, priority }) => ({
    url: path === "/" ? siteOrigin : `${siteOrigin}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const blog = blogPosts.map((post) => ({
    url: `${siteOrigin}/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.68,
  }));

  const locations = locationPages.map((loc) => ({
    url: `${siteOrigin}/locations/${loc.city}`,
    changeFrequency: "monthly" as const,
    priority: loc.city === "cape-town" ? 0.9 : 0.75,
  }));

  const serviceHubs = constructionServices.map((s) => ({
    url: `${siteOrigin}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.87,
  }));

  const serviceLocations = constructionServices.flatMap((s) =>
    locationPages.map((loc) => ({
      url: `${siteOrigin}/services/${s.slug}/${loc.city}`,
      changeFrequency: "monthly" as const,
      priority: 0.92,
    })),
  );

  return [...main, ...blog, ...locations, ...serviceHubs, ...serviceLocations];
}
