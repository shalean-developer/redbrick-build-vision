import type { Metadata } from "next";
import { defaultOgImagePath, siteName, siteOrigin } from "@/lib/site";

function pageUrl(path: string) {
  if (path === "/" || path === "") return siteOrigin;
  return `${siteOrigin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata(
  path: string,
  title: string,
  description: string,
  options?: { noIndex?: boolean; keywords?: string[] },
): Metadata {
  const url = pageUrl(path);
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
      images: [{ url: defaultOgImagePath, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImagePath],
    },
    robots: options?.noIndex ? { index: false, follow: true } : undefined,
  };
}
