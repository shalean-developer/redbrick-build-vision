import type { Metadata } from "next";
import CareersPage from "@/components/pages/CareersPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/careers",
  "Careers | Join Team Edlick Construction - Job Opportunities",
  "Join Team Edlick Construction. View current job openings for site managers, carpenters, and supervisors. Build your career with professional development and growth opportunities.",
  {
    keywords: [
      "construction jobs South Africa",
      "careers",
      "site manager jobs",
      "carpenter jobs",
      "construction supervisor",
      "employment opportunities",
    ],
  },
);

export default function Page() {
  return <CareersPage />;
}
