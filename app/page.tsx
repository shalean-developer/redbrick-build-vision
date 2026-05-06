import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/",
  "Team Edlick Construction | Cape Town Construction & Tiling",
  "Cape Town construction contractor, tiling, renovations, waterproofing, paving, and decking across the metro and surrounding suburbs. Clear quotes and coordinated trades.",
  {
    keywords: [
      "construction Cape Town",
      "tiling Cape Town",
      "renovations Cape Town",
      "building contractor Western Cape",
      "waterproofing Cape Town",
      "paving Cape Town",
      "decking Cape Town",
      "home renovation Claremont",
      "Sea Point contractor",
    ],
  },
);

export default function Page() {
  return <HomePage />;
}
