import type { Metadata } from "next";
import ProjectsPage from "@/components/pages/ProjectsPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/projects",
  "Our Projects | Team Edlick Construction Portfolio - South Africa",
  "View Team Edlick's completed construction projects across South Africa including housing, infrastructure, commercial, and renovation projects. 100+ projects delivered with excellence.",
  {
    keywords: [
      "construction projects South Africa",
      "housing projects",
      "infrastructure development",
      "commercial construction",
      "renovation portfolio",
    ],
  },
);

export default function Page() {
  return <ProjectsPage />;
}
