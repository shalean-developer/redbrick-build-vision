import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/contact",
  "Contact Us | Team Edlick Construction - Get a Free Quote",
  "Contact Team Edlick Construction for a free consultation. Call +27 68 594 3091 or +27 82 758 7466. Located at The Watershed, Waterfront, South Africa.",
  {
    keywords: ["contact Team Edlick", "construction quote", "free consultation", "construction services South Africa", "get in touch"],
  },
);

export default function Page() {
  return <ContactPage />;
}
