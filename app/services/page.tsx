import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/services",
  "Our Services | Team Edlick Construction - Complete Building Solutions",
  "Explore Team Edlick's comprehensive construction services: building, tiling, painting, decking, paving, waterproofing, renovations, and plumbing across South Africa.",
  {
    keywords: [
      "construction services",
      "tiling",
      "painting",
      "decking",
      "paving",
      "waterproofing",
      "renovations",
      "plumbing",
      "carpentry",
      "South Africa",
    ],
  },
);

export default function Page() {
  return <ServicesPage />;
}
