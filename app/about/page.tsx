import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/about",
  "About Us | Team Edlick Construction - Building South Africa's Future",
  "Learn about Team Edlick Construction, a premier contractor operating across 5 provinces in South Africa. Discover our vision, mission, core values, and commitment to excellence.",
  {
    keywords: ["about Team Edlick", "construction company South Africa", "our values", "vision mission", "construction team"],
  },
);

export default function Page() {
  return <AboutPage />;
}
