export type ConstructionService = {
  slug: string;
  name: string;
  summary: string;
  bullets: string[];
  keywords: string[];
};

export const constructionServices: ConstructionService[] = [
  {
    slug: "construction",
    name: "Construction",
    summary:
      "Full-scope building work from structural shells through to handover-ready finishes for homes, estates, and commercial developments.",
    bullets: [
      "Programmed delivery so structure, services, and finishes align without costly rework",
      "Documented QA hold-points before plaster, waterproofing, and practical completion",
      "Residential and commercial shells with clear snag cycles and handover packs",
      "Extensions and structural alterations sequenced with engineer sign-off where required",
      "Site discipline and daily housekeeping suited to estates, tenants, and occupied homes",
      "Milestone-based billing options when scope and drawings are locked",
    ],
    keywords: ["construction contractors", "building contractor South Africa", "new build contractor"],
  },
  {
    slug: "tiling",
    name: "Tiling",
    summary:
      "Professional tiling in Cape Town: bathroom, kitchen, and floor scopes with waterproofing, precision layout, and durable finishes.",
    bullets: [
      "Waterproofed wet areas to reduce leak risk and long-term damage",
      "Precision tile alignment, clean joints, and protective handover",
      "Large-format and natural stone installations with substrate checks",
      "Surface preparation and levelling so tiles stay flat in service",
      "Repairs, re-grouting, and replacement scopes without unnecessary full strip-outs",
    ],
    keywords: [
      "tiling contractors",
      "bathroom tiling",
      "floor tiling",
      "tiling services Cape Town",
    ],
  },
  {
    slug: "painting",
    name: "Painting",
    summary:
      "Interior and exterior coatings with proper preparation, premium systems where specified, and clean site discipline.",
    bullets: [
      "Proper prep and primers so topcoats bond and callbacks drop sharply",
      "Interior repaints, new plaster sealing, feature walls, and ceiling packages",
      "Exterior systems chosen for UV, wind-driven rain, and coastal salt exposure",
      "Commercial programmes with phased access so trading floors stay workable",
      "Colour and specification guidance tied to traffic class and wet-zone adjacency",
      "Clean masking and dust control when working inside occupied homes",
    ],
    keywords: ["house painters", "interior painting", "exterior painting"],
  },
  {
    slug: "decking-flooring",
    name: "Decking & Flooring",
    summary:
      "Hard-wearing timber and composite decks plus interior flooring installs aligned to moisture risk and traffic.",
    bullets: [
      "Outdoor decks and walkways engineered for drainage, sway limits, and corrosion class",
      "Timber or composite finishes matched to exposure and maintenance appetite",
      "Sub-structure details that protect the shell and paving below",
      "Smooth transitions into tiling, thresholds, and interior flooring trims",
      "Balustrade interfaces coordinated with height rules and fixing schedules",
      "Interior engineered flooring installed over slab with moisture checks where needed",
    ],
    keywords: ["deck builder", "flooring installation", "composite decking"],
  },
  {
    slug: "paving",
    name: "Paving",
    summary:
      "Driveways, entrances, and outdoor circulation in brick, cobble, or concrete pavers with compaction and falls done properly.",
    bullets: [
      "Compaction and bedding builds that survive driveway loads and channelled stormwater",
      "Residential driveways, pathways, and entertainment courts with crisp edge restraint",
      "Commercial forecourts where layouts, falls, and tactile zones need coordination",
      "Drainage ties to soakaways, channels, or existing storm infrastructure",
      "Jointing and sealing approaches suited to sand-bed vs mortar-bed specifications",
      "Reinstatement interfaces with gates, kerbs, and landscaping trades",
    ],
    keywords: ["paving contractors", "driveway paving", "patio paving"],
  },
  {
    slug: "waterproofing",
    name: "Waterproofing",
    summary:
      "Systems selected for roofs, slabs, and wet areas, detailed interfaces and inspections before finishes close in.",
    bullets: [
      "Balcony and planter trays detailed so water exits before finishes reinstate",
      "Bathroom tanking coordinated with tiling programmes and flood tests where specified",
      "Roof slabs and penetrations reflashed with compatible membranes and laps",
      "Interfaces at thresholds, outlets, and guardrails treated before cosmetic fixes",
      "Manufacturer-compliant builds that keep warranty pathways intact",
      "Maintenance guidance after handover where ongoing inspections matter",
    ],
    keywords: ["waterproofing contractor", "roof waterproofing", "balcony waterproofing"],
  },
  {
    slug: "renovations",
    name: "Renovations",
    summary:
      "Kitchens, bathrooms, and whole-home refreshes with sequencing that minimises downtime and protects existing structures.",
    bullets: [
      "Strip-out and refit sequencing that protects structure you are keeping",
      "Kitchens, bathrooms, and whole-home refreshes with realistic programme windows",
      "Engineer coordination when walls, slabs, or lateral stability might change",
      "Dust sealing and noise routing options when you stay in the home during work",
      "Fixed-price milestones once scope, finishes, and provisional sums are locked",
      "Short snag lists through disciplined QA before handover",
    ],
    keywords: ["home renovations", "bathroom renovation", "kitchen renovation"],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    summary:
      "Rough-ins, replacements, and leak investigations tied into renovations and new bathrooms, ready for certification pathways.",
    bullets: [
      "Fixture swaps through full wet-area replumbing with accessible isolation",
      "Leak investigations with pressure testing before tiling or cabinetry closes in",
      "Drainage offsets coordinated with paving and tiling reinstatement teams",
      "Geyser circuits and safety valves checked against insurer-friendly detail",
      "Rough-ins positioned for bathrooms and kitchens before finishes lock layouts",
      "Minimal chase footprints where leaks must be exposed surgically",
    ],
    keywords: ["plumbing contractor", "renovation plumbing", "bathroom plumbing"],
  },
];

export function getConstructionService(slug: string) {
  return constructionServices.find((s) => s.slug === slug);
}

export function comboIntroParagraphs(service: ConstructionService, cityLabel: string): string[] {
  const s = service.name.toLowerCase();
  return [
    `Team Edlick Construction delivers professional ${s} across ${cityLabel} and nearby suburbs. We plan access, protection of existing finishes, and daily clean-up so live homes and tenant sites stay workable.`,
    `Every quote reflects scope, programme, and material grade, whether you need a targeted repair, a full wet-area upgrade, or scheduled maintenance alongside ${s} packages.`,
    `Request a site assessment and we’ll recommend the safest detail sequence for ${cityLabel} conditions, then align tiling, waterproofing, or paving trades where those scopes touch.`,
  ];
}
