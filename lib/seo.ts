import type { Metadata } from "next";
import { gallery } from "@/lib/gallery";
import { defaultOgImagePath, siteName, siteOrigin } from "@/lib/site";

function pageUrl(path: string) {
  if (path === "/" || path === "") return siteOrigin;
  return `${siteOrigin}${path.startsWith("/") ? path : `/${path}`}`;
}

const serviceSocialImages: Record<string, string> = {
  construction: gallery.e01,
  tiling: gallery.e02,
  painting: gallery.e03,
  "decking-flooring": gallery.e04,
  paving: gallery.e05,
  waterproofing: gallery.e06,
  renovations: gallery.e07,
  plumbing: gallery.e08,
};

const blogSocialImages: Record<string, string> = {
  "cost-of-tiling-cape-town": gallery.e02,
  "painting-cost-cape-town": gallery.e03,
  "paving-cost-per-square-metre-cape-town": gallery.e05,
  "plumbing-cost-cape-town": gallery.e08,
  "waterproofing-cost-cape-town": gallery.e06,
  "bathroom-renovation-cost-south-africa": gallery.e07,
  "how-long-does-renovation-take": gallery.e07,
  "tiling-mistakes-to-avoid": gallery.e02,
  "best-flooring-options-south-africa": gallery.e04,
};

export function getSocialImagePath(path: string) {
  const segments = path.split("/").filter(Boolean);

  if (segments[0] === "services" && segments[1]) {
    return serviceSocialImages[segments[1]] ?? defaultOgImagePath;
  }

  if (segments[0] === "blog" && segments[1]) {
    return blogSocialImages[segments[1]] ?? defaultOgImagePath;
  }

  if (segments[0] === "locations" && segments[1] === "cape-town") {
    return gallery.e01;
  }

  return defaultOgImagePath;
}

export function buildPageMetadata(
  path: string,
  title: string,
  description: string,
  options?: { noIndex?: boolean; keywords?: string[]; image?: string; imageAlt?: string },
): Metadata {
  const url = pageUrl(path);
  const image = options?.image ?? getSocialImagePath(path);
  const imageAlt = options?.imageAlt ?? `${title} — ${siteName}`;

  return {
    title,
    description,
    keywords: options?.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_ZA",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: options?.noIndex ? { index: false, follow: true } : undefined,
  };
}
