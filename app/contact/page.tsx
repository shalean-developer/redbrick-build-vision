import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/contact",
  "Contact Team Edlick Construction | Cape Town",
  "Contact Team Edlick Construction for a quote. Call +27 68 594 3091 or +27 82 758 7466. Office: The Watershed, D03 Dock Road, Waterfront, Cape Town, Western Cape.",
  {
    keywords: [
      "contact Team Edlick",
      "construction quote Cape Town",
      "construction company Waterfront Cape Town",
      "building contractor Cape Town",
    ],
  },
);

export default function Page() {
  return <ContactPage />;
}
