import Link from "next/link";
import { SAFE_PARTNER_OUTBOUND_REL, SHALEAN_WEBSITE_URL } from "@/lib/partners";

type Props = {
  /** Local area label, e.g. "Cape Town" */
  locationName?: string;
  /** Service name, e.g. "Renovations" */
  serviceName?: string;
};

/**
 * In-page block: direct link to Shalean (nofollow) + internal partner explainer. Two paths, one conservative rel.
 */
export function ShaleanCleaningReferral({ locationName = "Cape Town", serviceName = "this work" }: Props) {
  const partnerPath = "/partners/shalean-cleaning-services";

  return (
    <aside
      className="mt-14 rounded-xl border border-border bg-card px-5 py-5 text-sm text-muted-foreground leading-relaxed shadow-sm"
      aria-labelledby="partner-cleaning-money-heading"
    >
      <h2 id="partner-cleaning-money-heading" className="text-lg font-semibold text-foreground mb-2">
        Optional cleaning after {serviceName.toLowerCase()} in {locationName}
      </h2>
      <p className="mb-3">
        Our quotes cover trade work and finishes — not a full residential clean. After dusty phases, some clients book
        specialist cleaning before they move back in.
      </p>
      <p className="mb-3">
        We often suggest{" "}
        <a
          href={SHALEAN_WEBSITE_URL}
          target="_blank"
          rel={SAFE_PARTNER_OUTBOUND_REL}
          className="text-primary font-medium hover:underline"
        >
          Shalean Cleaning Services
        </a>{" "}
        for that step — an independent company in the {locationName} area, not part of our crew. You hire and pay them
        directly.
      </p>
      <p className="text-sm">
        <Link href={partnerPath} className="text-primary font-medium hover:underline">
          How we handle referrals
        </Link>
      </p>
    </aside>
  );
}
