import type { ConstructionService } from "@/lib/construction-services";
import type { LocationPage } from "@/lib/locations";

export type MoneyPageContent = {
  localSignalsParagraph: string;
  materialsNote: string;
  pricingHook: string;
  proofProjects: string[];
  pricingHeading: string;
  pricingLead: string;
  pricingRange: string;
  pricingDisclaimer: string;
  processHeading: string;
  processSteps: string[];
  faqs: { question: string; answer: string }[];
  trustBullets: string[];
};

function pricingFor(serviceSlug: string): { lead: string; range: string } {
  const map: Record<string, { lead: string; range: string }> = {
    construction: {
      lead: "New builds and structural packages require drawings, site information and a defined scope before pricing is locked.",
      range: "Budgets vary materially with engineering, access, finishes and programme; Team Edlick confirms project-specific pricing after scope review.",
    },
    tiling: {
      lead: "Tiling is normally priced after substrate condition, tile format, layout and wet-area requirements are confirmed.",
      range: "Published market ranges can help with early budgeting, but the site-specific quote is the controlling price.",
    },
    painting: {
      lead: "Painting costs depend on measurable area, preparation, access, coating system and the condition of existing finishes.",
      range: "Team Edlick prices the actual preparation and coating scope rather than relying on a single generic rate.",
    },
    "decking-flooring": {
      lead: "Decking and flooring quotes depend on structure, substrate, product selection, drainage and edge/detail requirements.",
      range: "Material choice and site conditions are confirmed before a project-specific price is issued.",
    },
    paving: {
      lead: "Paving costs depend on excavation, base preparation, edge restraint, drainage, traffic loading and paver selection.",
      range: "A site inspection is used to confirm the build-up and quote rather than assuming a standard rate.",
    },
    waterproofing: {
      lead: "Waterproofing is priced around the source of ingress, preparation, detailing, membrane system and reinstatement work.",
      range: "The repair method is confirmed after inspection so cosmetic work is not priced as a substitute for diagnosis.",
    },
    renovations: {
      lead: "Renovation pricing is built from the agreed strip-out, building, services, wet-area and finish scope.",
      range: "The final budget depends on existing conditions, selections, specialist work and programme constraints.",
    },
    plumbing: {
      lead: "Plumbing work is priced after the fault, access route, replacement scope and making-good requirements are understood.",
      range: "Call-outs, repairs and installation work are quoted against the actual site condition and material requirement.",
    },
  };

  return map[serviceSlug] ?? {
    lead: "We confirm scope before locking pricing.",
    range: "The project-specific quote is issued after the relevant site and material assumptions are understood.",
  };
}

function scopeExamples(service: ConstructionService): string[] {
  const examples: Record<string, string[]> = {
    construction: [
      "Example scope: residential alterations or extensions",
      "Example scope: masonry, concrete and structural coordination",
      "Example scope: commercial fit-out building work",
      "Example scope: making-good and finish coordination",
    ],
    tiling: [
      "Example scope: bathroom wall and floor tiling",
      "Example scope: kitchen and living-area tiling",
      "Example scope: outdoor tiling and interfaces with paving",
      "Example scope: large-format tile installation",
    ],
    painting: [
      "Example scope: interior repaint with preparation",
      "Example scope: exterior coating and crack preparation",
      "Example scope: ceilings, bulkheads and trim",
      "Example scope: phased commercial repainting",
    ],
    "decking-flooring": [
      "Example scope: timber or composite decking",
      "Example scope: interior flooring replacement",
      "Example scope: pool-surround or outdoor deck details",
      "Example scope: substrate and edge-detail upgrades",
    ],
    paving: [
      "Example scope: driveway paving and base preparation",
      "Example scope: courtyard or walkway paving",
      "Example scope: drainage channels and edge restraints",
      "Example scope: repair and reinstatement of existing paving",
    ],
    waterproofing: [
      "Example scope: balcony waterproofing before retiling",
      "Example scope: wet-area waterproofing",
      "Example scope: roof or penetration leak investigation",
      "Example scope: membrane repair and finish reinstatement",
    ],
    renovations: [
      "Example scope: bathroom renovation",
      "Example scope: kitchen renovation and service coordination",
      "Example scope: apartment or whole-home refresh",
      "Example scope: layout changes subject to structural review",
    ],
    plumbing: [
      "Example scope: mixer, valve and sanitaryware replacement",
      "Example scope: leak investigation and repair",
      "Example scope: drainage repair with making-good",
      "Example scope: plumbing changes coordinated with renovations",
    ],
  };

  return examples[service.slug] ?? [
    `Example scope: ${service.name.toLowerCase()} assessment and quotation`,
    `Example scope: ${service.name.toLowerCase()} installation or repair`,
  ];
}

function faqsFor(service: ConstructionService, city: string): { question: string; answer: string }[] {
  const common = [
    {
      question: `Do you quote ${service.name.toLowerCase()} work in ${city}?`,
      answer: `Yes. Share the site location, photos where available, and the required outcome. Access, existing condition and scope are confirmed before the quote is finalised.`,
    },
    {
      question: "How soon can work start after a quote is approved?",
      answer: "Start dates depend on crew availability, materials, access and the size of the scope. The proposed programme is confirmed with the quote or before mobilisation.",
    },
    {
      question: "Are quotes fixed or provisional?",
      answer: "Where scope and selections are defined, pricing can be structured around agreed work and milestones. Unknown concealed conditions are identified as assumptions or provisional items rather than presented as fixed facts.",
    },
  ];

  const specific: Record<string, { question: string; answer: string }[]> = {
    tiling: [
      { question: "Do you supply tiles or install client-supplied tiles?", answer: "Both options can be scoped. The quote should state who supplies tiles, trims, adhesive, grout and related materials." },
      { question: "Do wet areas need waterproofing before tiling?", answer: "Where the area requires a waterproofing system, that preparation should be completed and checked before the finish is closed in." },
    ],
    renovations: [
      { question: "Can renovation work be phased?", answer: "Yes. Phasing can reduce disruption when the sequence still allows safe access, inspections and proper curing or drying windows." },
      { question: "Can we stay in the property during renovation?", answer: "That depends on the rooms affected, dust/noise, services isolation and safe separation between occupied and active work areas." },
    ],
    waterproofing: [
      { question: "Do you inspect before recommending a waterproofing repair?", answer: "Yes. The source of ingress and failed detail should be investigated before selecting a repair method." },
      { question: "Can waterproofing be repaired without full retiling?", answer: "Sometimes. The correct strip-out depth depends on where the failure is and whether the existing interfaces can be retained reliably." },
    ],
    plumbing: [
      { question: "Do you handle leak investigation?", answer: "Leak and pressure issues can be scoped as part of the plumbing work, with access and making-good requirements confirmed before repair." },
    ],
    paving: [
      { question: "What affects paving durability?", answer: "Base preparation, drainage, edge restraint, compaction, jointing and expected vehicle loading all affect performance." },
    ],
    painting: [
      { question: "Is preparation included before painting?", answer: "Preparation should be stated in the quote because cracks, peeling coatings, damp or new plaster can materially change the required system." },
    ],
    construction: [
      { question: "Do structural changes need professional input?", answer: "Where work affects structure, the appropriate engineer or other competent professional should confirm the design requirements before construction proceeds." },
    ],
    "decking-flooring": [
      { question: "How do you choose between timber and composite decking?", answer: "Selection depends on appearance, maintenance expectations, exposure, structure, drainage and budget." },
    ],
  };

  return [...(specific[service.slug] ?? []), ...common].slice(0, 6);
}

export function getMoneyPageContent(service: ConstructionService, loc: LocationPage): MoneyPageContent {
  const { lead, range } = pricingFor(service.slug);

  const materials: Record<string, string> = {
    construction: "Materials and systems are selected against the approved scope, drawings and site conditions.",
    tiling: "Tile format, adhesive, grout, trims, substrate preparation and waterproofing requirements should be confirmed together.",
    painting: "Primer, preparation and topcoat systems depend on the substrate, exposure and existing coating condition.",
    "decking-flooring": "Product choice, structure, fixings, moisture exposure and edge details should be resolved before installation.",
    paving: "Pavers, bedding, base layers, drainage and edge restraint should be specified for the intended use.",
    waterproofing: "The membrane or repair system should match the failed detail, movement risk, exposure and finish build-up.",
    renovations: "Renovation work is coordinated across demolition, building, services, waterproofing, finishes and handover requirements.",
    plumbing: "Pipework and fittings should suit the application, access requirements and applicable local standards.",
  };

  return {
    localSignalsParagraph: `Team Edlick quotes ${service.name.toLowerCase()} work across ${loc.name} and surrounding areas subject to site access and scope. Local climate and building conditions are considered during specification. ${loc.regionalBuildNote}`,
    materialsNote: materials[service.slug] ?? materials.construction,
    pricingHook: "Request a site-specific quote rather than relying on an unverified generic project or price claim.",
    proofProjects: scopeExamples(service),
    pricingHeading: `Cost of ${service.name.toLowerCase()} in ${loc.name}`,
    pricingLead: lead,
    pricingRange: range,
    pricingDisclaimer: "Website guidance is not a quotation. Team Edlick confirms pricing after the relevant scope, access and site-condition assumptions are understood.",
    processHeading: `Our ${service.name.toLowerCase()} process`,
    processSteps: [
      `Scope review and site information (${loc.name})`,
      "Written quote with assumptions, exclusions and proposed programme",
      "Mobilisation and protection of adjacent finishes",
      `${service.name} execution with appropriate checks before work is closed in`,
      "Snag review and handover",
    ],
    faqs: faqsFor(service, loc.name),
    trustBullets: [
      "Cape Town and surrounding-area quoting focus",
      "Written scope, assumptions and exclusions",
      "Coordinated sequencing across related trades",
      "Verified project evidence published separately from generic service guidance",
    ],
  };
}
