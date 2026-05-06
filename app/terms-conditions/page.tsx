import type { Metadata } from "next";
import TermsConditionsPage from "@/components/pages/TermsConditionsPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/terms-conditions",
  "Terms & Conditions | Team Edlick Construction",
  "Read Team Edlick Construction's terms and conditions for our construction services, warranties, and policies.",
  { noIndex: true },
);

export default function Page() {
  return <TermsConditionsPage />;
}
