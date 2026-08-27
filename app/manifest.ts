import type { MetadataRoute } from "next";
import { defaultDescription, siteName, siteOrigin } from "@/lib/site";

/** Web app manifest using the canonical Team Edlick brand mark. */
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
        src: "/brand/teamedlick-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/brand/teamedlick-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
