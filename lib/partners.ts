/**
 * Cross-site partner linking — conservative defaults:
 * - Service money pages: in-body Shalean link + /partners/shalean-cleaning-services explainer.
 * - Blog: one outbound Shalean link only on slugs in BLOG_SLUGS_WITH_SHALEAN_PARTNER_LINK.
 * - Use SAFE_PARTNER_OUTBOUND_REL on teamedlick.co.za → shalean.com (mirror on Shalean → Team Edlick).
 */
export const SHALEAN_WEBSITE_URL = "https://shalean.com";

export const TEAM_EDLICK_WEBSITE_URL = "https://teamedlick.co.za";

/** Limits PageRank-reciprocal signals while keeping links usable for visitors. */
export const SAFE_PARTNER_OUTBOUND_REL = "noopener noreferrer nofollow";

/**
 * Highest-intent money pages only — avoids a wide reciprocal footprint across every trade URL.
 */
export const POST_WORK_CLEANING_MONEY_PAGE_SLUGS = ["renovations", "construction"] as const;

export function showShaleanReferralOnMoneyPage(serviceSlug: string): boolean {
  return (POST_WORK_CLEANING_MONEY_PAGE_SLUGS as readonly string[]).includes(serviceSlug);
}

/** High-intent articles only — one contextual Shalean outbound each (see BlogPartnerReferral). */
export const BLOG_SLUGS_WITH_SHALEAN_PARTNER_LINK = [
  "bathroom-renovation-cost-south-africa",
  "how-long-does-renovation-take",
  "cost-of-tiling-cape-town",
] as const;

export function blogPostShowsShaleanPartnerLink(slug: string): boolean {
  return (BLOG_SLUGS_WITH_SHALEAN_PARTNER_LINK as readonly string[]).includes(slug);
}
