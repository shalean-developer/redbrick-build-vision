import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";

/**
 * Production robots.txt at /robots.txt
 * Replaces any static public/robots.txt (removed) so the sitemap URL stays canonical to teamedlick.co.za.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Do not disallow /_next/* (can affect asset discovery). No app/api routes today.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteOrigin}/sitemap.xml`,
    host: new URL(siteOrigin).host,
  };
}
