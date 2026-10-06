import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/services",
  "Construction Services Cape Town | Team Edlick",
  "Explore construction, tiling, painting, decking, paving, waterproofing, renovations and plumbing services across Cape Town and surrounding suburbs.",
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
      "Cape Town",
      "Western Cape",
    ],
  },
);

export default function Page() {
  return <ServicesPage />;
}
