import { SAFE_PARTNER_OUTBOUND_REL, SHALEAN_WEBSITE_URL } from "@/lib/partners";

export type BlogPartnerCleaningContext = "post-renovation" | "post-tiling" | "handover";

const leadByContext: Record<BlogPartnerCleaningContext, string> = {
  "post-renovation":
    "After renovation works are complete and trades have signed off their finishes,",
  "post-tiling":
    "Once tiling is finished and curing windows have been respected,",
  handover:
    "Before you settle back in after a disruptive refurbishment programme,",
};

type Props = {
  /** Single outbound partner link per article — cleaning referral to Shalean */
  variant: "shalean-cleaning";
  context: BlogPartnerCleaningContext;
  /** Shown in copy, e.g. Cape Town metro */
  cityLabel?: string;
};

/**
 * One contextual paragraph → one external URL (shalean.com), conservative rel.
 * Use only on articles listed in `BLOG_SLUGS_WITH_SHALEAN_PARTNER_LINK`.
 */
export function BlogPartnerReferral({ variant, context, cityLabel = "Cape Town metro" }: Props) {
  if (variant !== "shalean-cleaning") return null;

  const lead = leadByContext[context];

  return (
    <aside
      className="not-prose my-8 rounded-lg border border-border/80 bg-muted/35 px-4 py-3 sm:px-5 sm:py-4"
      aria-label="Referral to independent cleaning company"
    >
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed m-0">
        {lead} a specialist clean helps lift dust, debris, and residue from surfaces before occupation. For independent
        cleaning in the {cityLabel}, see{" "}
        <a
          href={SHALEAN_WEBSITE_URL}
          target="_blank"
          rel={SAFE_PARTNER_OUTBOUND_REL}
          className="text-primary font-medium hover:underline"
        >
          Shalean Cleaning Services
        </a>
        . They are a separate business — you contract with them directly.
      </p>
    </aside>
  );
}
