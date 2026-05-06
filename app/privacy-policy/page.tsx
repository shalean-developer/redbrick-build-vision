import type { Metadata } from "next";
import PrivacyPolicyPage from "@/components/pages/PrivacyPolicyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/privacy-policy",
  "Privacy Policy | Team Edlick Construction",
  "Read Team Edlick Construction's privacy policy. Learn how we collect, use, and protect your personal information.",
  { noIndex: true },
);

export default function Page() {
  return <PrivacyPolicyPage />;
}
