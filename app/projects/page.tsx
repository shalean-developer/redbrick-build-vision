import type { Metadata } from "next";
import ProjectsPage from "@/components/pages/ProjectsPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/projects",
  "Construction Projects Cape Town | Team Edlick",
  "Explore verified Team Edlick construction, tiling, renovation, paving, waterproofing and finishing work from the Cape Town portfolio.",
  {
    keywords: [
      "construction projects Cape Town",
      "building contractor portfolio Cape Town",
      "renovation projects Cape Town",
      "tiling projects Cape Town",
      "waterproofing projects Cape Town",
    ],
  },
);

export default function Page() {
  return <ProjectsPage />;
}
