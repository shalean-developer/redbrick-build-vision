import type { MetadataRoute } from "next";
import { defaultDescription, siteName, siteOrigin } from "@/lib/site";

/**
 * Web app manifest at /manifest.webmanifest
 * Icons: /icon-192.png and /icon-512.png in /public (copies of app/icon + apple-icon).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Team Edlick",
    description: defaultDescription,
    id: siteOrigin,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#d62828",
    categories: ["business", "construction"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
