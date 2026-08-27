export type ProjectEvidenceStatus = "candidate" | "verified" | "rejected";

export type VerifiedProjectEvidence = {
  id: string;
  serviceSlug: string;
  locationLabel: string;
  scopeSummary: string;
  imageSrc: string;
  imageAlt: string;
  completedAt?: string;
  status: ProjectEvidenceStatus;
  /** Internal note describing what proves this is a real Team Edlick project. */
  evidenceNote: string;
};

/**
 * Canonical source of truth for public project proof.
 *
 * Rules:
 * - Only records with status `verified` may render as project evidence.
 * - A filename is not evidence. The project, location, service and image ownership
 *   must be checked before changing status to `verified`.
 * - Do not add generated/example projects here.
 * - Do not reuse one image as evidence for multiple unrelated projects.
 *
 * TE-SEO-02 starts intentionally empty. Genuine Team Edlick project records are
 * added only after their evidence packet is supplied and checked.
 */
export const projectEvidence: VerifiedProjectEvidence[] = [];

export function getVerifiedProjectEvidence(serviceSlug?: string): VerifiedProjectEvidence[] {
  return projectEvidence.filter(
    (item) => item.status === "verified" && (!serviceSlug || item.serviceSlug === serviceSlug),
  );
}

export function isVerifiedProjectImage(imageSrc: string): boolean {
  return getVerifiedProjectEvidence().some((item) => item.imageSrc === imageSrc);
}
