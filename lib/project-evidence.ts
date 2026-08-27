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
  evidenceNote: string;
};

const capeTownPortfolio = "Cape Town portfolio — exact suburb not recorded";
const ownerConfirmed =
  "Site owner confirmed the existing site photos are genuine Team Edlick work. Service mapping follows the repository's canonical service asset mapping; no unsupported suburb, project name or completion date is added.";

/**
 * Canonical verified evidence register for the 10 unique gallery image blobs.
 * Duplicate filenames are intentionally not entered as separate projects.
 */
export const projectEvidence: VerifiedProjectEvidence[] = [
  {
    id: "te-portfolio-construction-01",
    serviceSlug: "construction",
    locationLabel: capeTownPortfolio,
    scopeSummary: "Construction portfolio work",
    imageSrc: "/projects/gallery/edlick-01.png",
    imageAlt: "Team Edlick construction work from the Cape Town portfolio",
    status: "verified",
    evidenceNote: ownerConfirmed,
  },
  {
    id: "te-portfolio-tiling-01",
    serviceSlug: "tiling",
    locationLabel: capeTownPortfolio,
    scopeSummary: "Tiling portfolio work",
    imageSrc: "/projects/gallery/edlick-02.png",
    imageAlt: "Team Edlick tiling work from the Cape Town portfolio",
    status: "verified",
    evidenceNote: ownerConfirmed,
  },
  {
    id: "te-portfolio-painting-01",
    serviceSlug: "painting",
    locationLabel: capeTownPortfolio,
    scopeSummary: "Painting portfolio work",
    imageSrc: "/projects/gallery/edlick-03.png",
    imageAlt: "Team Edlick painting work from the Cape Town portfolio",
    status: "verified",
    evidenceNote: ownerConfirmed,
  },
  {
    id: "te-portfolio-decking-flooring-01",
    serviceSlug: "decking-flooring",
    locationLabel: capeTownPortfolio,
    scopeSummary: "Decking and flooring portfolio work",
    imageSrc: "/projects/gallery/edlick-04.png",
    imageAlt: "Team Edlick decking and flooring work from the Cape Town portfolio",
    status: "verified",
    evidenceNote: ownerConfirmed,
  },
  {
    id: "te-portfolio-paving-01",
    serviceSlug: "paving",
    locationLabel: capeTownPortfolio,
    scopeSummary: "Paving portfolio work",
    imageSrc: "/projects/gallery/edlick-05.png",
    imageAlt: "Team Edlick paving work from the Cape Town portfolio",
    status: "verified",
    evidenceNote: ownerConfirmed,
  },
  {
    id: "te-portfolio-waterproofing-01",
    serviceSlug: "waterproofing",
    locationLabel: capeTownPortfolio,
    scopeSummary: "Waterproofing portfolio work",
    imageSrc: "/projects/gallery/edlick-06.png",
    imageAlt: "Team Edlick waterproofing work from the Cape Town portfolio",
    status: "verified",
    evidenceNote: ownerConfirmed,
  },
  {
    id: "te-portfolio-renovations-01",
    serviceSlug: "renovations",
    locationLabel: capeTownPortfolio,
    scopeSummary: "Renovation portfolio work",
    imageSrc: "/projects/gallery/edlick-07.png",
    imageAlt: "Team Edlick renovation work from the Cape Town portfolio",
    status: "verified",
    evidenceNote: ownerConfirmed,
  },
  {
    id: "te-portfolio-plumbing-01",
    serviceSlug: "plumbing",
    locationLabel: capeTownPortfolio,
    scopeSummary: "Plumbing portfolio work",
    imageSrc: "/projects/gallery/edlick-08.png",
    imageAlt: "Team Edlick plumbing work from the Cape Town portfolio",
    status: "verified",
    evidenceNote: ownerConfirmed,
  },
  {
    id: "te-portfolio-residential-construction-01",
    serviceSlug: "construction",
    locationLabel: capeTownPortfolio,
    scopeSummary: "Residential construction portfolio work",
    imageSrc: "/projects/gallery/edlick-09.png",
    imageAlt: "Team Edlick residential construction work from the Cape Town portfolio",
    status: "verified",
    evidenceNote: ownerConfirmed,
  },
  {
    id: "te-portfolio-commercial-construction-01",
    serviceSlug: "construction",
    locationLabel: capeTownPortfolio,
    scopeSummary: "Commercial construction portfolio work",
    imageSrc: "/projects/gallery/edlick-10.png",
    imageAlt: "Team Edlick commercial construction work from the Cape Town portfolio",
    status: "verified",
    evidenceNote: ownerConfirmed,
  },
];

export function getVerifiedProjectEvidence(serviceSlug?: string): VerifiedProjectEvidence[] {
  return projectEvidence.filter(
    (item) => item.status === "verified" && (!serviceSlug || item.serviceSlug === serviceSlug),
  );
}

export function isVerifiedProjectImage(imageSrc: string): boolean {
  return getVerifiedProjectEvidence().some((item) => item.imageSrc === imageSrc);
}
