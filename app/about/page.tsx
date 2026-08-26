import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/about",
  "About Us | Team Edlick Construction - Building South Africa's Future",
  "Learn about Team Edlick Construction, a Cape Town construction contractor focused on coordinated residential and commercial work. Discover our vision, mission, core values, and approach to quality.",
  {
    keywords: ["about Team Edlick", "construction company Cape Town", "our values", "vision mission", "construction team"],
  },
);

export default function Page() {
  return <AboutPage />;
}
