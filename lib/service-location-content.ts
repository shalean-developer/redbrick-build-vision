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

function suburbsSnippet(loc: LocationPage): string {
  return loc.focusSuburbs.join(", ");
}

function suburbRotationOffset(serviceSlug: string, len: number): number {
  if (!len) return 0;
  let h = 0;
  for (let i = 0; i < serviceSlug.length; i++) {
    h = (h + serviceSlug.charCodeAt(i) * (i + 3)) % 1009;
  }
  return h % len;
}

/** Rotates suburb order per service so combo pages don’t repeat identical suburb sequences. */
function proofLine(loc: LocationPage, variants: string[], serviceSlug: string): string[] {
  const subs = loc.focusSuburbs;
  const off = suburbRotationOffset(serviceSlug, subs.length);
  const rotated = [...subs.slice(off), ...subs.slice(0, off)];
  return variants.map((template, i) =>
    template.replace("{suburb}", rotated[i % rotated.length]).replace("{city}", loc.name),
  );
}

function pricingFor(serviceSlug: string): { lead: string; range: string } {
  const map: Record<string, { lead: string; range: string }> = {
    construction: {
      lead: "New builds and structural packages are quoted per BOQ.",
      range: "Small alterations often start in the low hundreds of thousands (ZAR); larger shells scale with engineering and finishes.",
    },
    tiling: {
      lead: "Supply-and-fix tiling is usually priced per m² once substrates are inspected and wet-area detail is confirmed.",
      range: "Many residential programmes land around R300–R800/m² depending on tile type, surface preparation, layout complexity, and waterproofing scope.",
    },
    painting: {
      lead: "Interior and exterior painting is priced per m² of measurable surface after prep scope is confirmed.",
      range: "Many repaint programmes land near R45–R120/m² for walls (prep-dependent); facades and specialized systems can exceed this.",
    },
    "decking-flooring": {
      lead: "Decks combine structure, drainage, and finish, priced per m² or per linear metre for balustrade runs.",
      range: "Timber and composite assemblies commonly range R1 800–R4 500/m² all-in, driven by structure height and corrosion class.",
    },
    paving: {
      lead: "Paving quotes reflect excavation depth, edge restraint, and traffic class.",
      range: "Driveway-class work regularly sits near R280–R650/m² depending on paver type and base build-up.",
    },
    waterproofing: {
      lead: "Waterproofing may be lump-sum per detail (balcony, planter) or per m² on larger trays.",
      range: "Sheet or liquid systems on accessible slabs often trend R180–R450/m² before finishes reinstate.",
    },
    renovations: {
      lead: "Renovations are staged, strip-out, services, wet areas, then finishes.",
      range: "Bathroom refreshes might start from tens of thousands (ZAR) for targeted scopes; full wet-room rebuilds scale with tiling, SANWARE, and waterproofing.",
    },
    plumbing: {
      lead: "Plumbing is quoted after isolating pressure tests and access routes.",
      range: "Call-out plus labour-and-materials packages apply; chase-and-repair work adds making-good allowances.",
    },
  };
  return (
    map[serviceSlug] ?? {
      lead: "We scope on site before locking numbers.",
      range: "Budget tiers depend on risk, programme, and finishes.",
    }
  );
}

function faqsFor(service: ConstructionService, city: string): { question: string; answer: string }[] {
  const s = service.name.toLowerCase();
  const common: { question: string; answer: string }[] = [
    {
      question: `Do you work across ${city} suburbs and estates?`,
      answer: `Yes, we regularly mobilise across ${city} and neighbouring nodes. Access rules, HOA protocols, and parking vary by suburb; we bake that into programme and protection.`,
    },
    {
      question: "How soon can you start after approving a quote?",
      answer:
        "Lead times depend on crew availability and material releases. Small remedials can slot faster; phased renovations book against lockable milestones.",
    },
    {
      question: "Are quotes fixed or provisional?",
      answer:
        "Where scope, drawings, and finishes are locked, we quote fixed milestones. Open-ended strip-outs stay provisional until substrates are exposed.",
    },
  ];

  const specific: Record<string, { question: string; answer: string }[]> = {
    tiling: [
      {
        question: "How long does residential tiling take?",
        answer:
          "Most bathrooms take roughly 3–7 elapsed days once waterproofing and curing windows are honoured, large-format tiles and stone slow the programme slightly.",
      },
      {
        question: "Do you supply tiles or labour-only?",
        answer:
          "We can supply-and-fix or install client-supplied tiles. Labour-only quotes assume tiles are on site, checked for batch variance, and suitable for the substrate.",
      },
    ],
    renovations: [
      {
        question: "How long does a bathroom renovation take?",
        answer:
          "Allow roughly 2–5 weeks wall-clock for full wet-area refurbishments, longer if structural changes, custom joinery, or lead-time-bound imports feature.",
      },
      {
        question: "Can we live in the house during renovation?",
        answer:
          "Often yes. We dust-seal corridors, sequence noisy work, and maintain safe segregations, especially important for homes with kids or tenants.",
      },
    ],
    waterproofing: [
      {
        question: "Will you issue warranties on waterproofing?",
        answer:
          "Manufacturer warranties apply to correctly installed systems; we document preparation, primer coats, and flood tests where relevant.",
      },
      {
        question: "My balcony leaks, do you repair without full retiling?",
        answer:
          "Sometimes, interfaces and outlets fail first. We investigate before recommending strip depth; partial reinstatement saves cost when details allow.",
      },
    ],
    plumbing: [
      {
        question: "Do you handle leak detection?",
        answer:
          "We isolate circuits, pressure-test, and expose failures surgically before quoting reinstatement, especially important before tiling closes in.",
      },
    ],
    paving: [
      {
        question: "How long before we can drive on new paving?",
        answer:
          "Compaction and jointing need cure windows, often 48–72 hours for domestic traffic, longer for heavy vehicles depending on specification.",
      },
    ],
    painting: [
      {
        question: "Do you prime new plaster before colour coats?",
        answer:
          "Yes, our teams start with suction-balanced primers and only then lock topcoats; skips here cause holidays and callbacks.",
      },
    ],
    construction: [
      {
        question: "Do you subcontract specialists?",
        answer:
          "Yes, structural steel, fire, lifts, and MEICA coordinate through our site managers with unified programmes and QA hold-points.",
      },
    ],
    "decking-flooring": [
      {
        question: "Composite or timber near the coast?",
        answer:
          "Composite often wins on maintenance; timber needs durable species and coatings rated for UV/moisture cycling, we specify per orientation and spray exposure.",
      },
    ],
  };

  const extra = specific[service.slug] ?? [
    {
      question: `What changes pricing for ${s} in ${city}?`,
      answer: `Access (high-rise vs freestanding), existing substrate quality, after-hours restrictions, and regional climate cycles all move ${s} pricing, we confirm on walkthrough.`,
    },
  ];

  return [...extra.slice(0, 2), ...common].slice(0, 6);
}

export function getMoneyPageContent(service: ConstructionService, loc: LocationPage): MoneyPageContent {
  const { lead, range } = pricingFor(service.slug);
  const mats: Record<string, string> = {
    construction: "We coordinate structural concrete, masonry, lightweight partitioning, and architectural finishes per engineer and architect sign-off.",
    tiling: "Ceramic and porcelain formats dominate wet areas; stone and large panels need substrate flatness (SR classification) verified early.",
    painting: "Acrylic systems suit most interiors; resilient or specialised membranes apply to wet zones and high-traffic commercial shells.",
    "decking-flooring": "Structural pine, hardwoods, or composites pair with galvanised or stainless fixings depending on exposure class.",
    paving: "Clay pavers, cement pavers, and exposed aggregate each demand different bedding and edge restraint strategies.",
    waterproofing: "Liquid PU, torch-on bitumen, and sheet PVC each suit different crack tolerance and detailing complexity.",
    renovations: "We sequence strip-out, CI fixes, MEP rough-ins, waterproofing, tiling, and joinery so inspections aren’t skipped.",
    plumbing: "Copper, PEX, and PVC-u lines are matched to municipal bylaws and insurer preferences on domestic work.",
  };

  const proofMap: Record<string, string[]> = {
    construction: [
      "Structural shell and facade closes on a gated estate near {suburb}",
      "Townhouse extension programme in {suburb}",
      "Commercial tenant installation coordination in {city}",
      "Steel-and-masonry interface QA walkthrough before plaster trade in {suburb}",
    ],
    tiling: [
      "Full bathroom retiling with waterproofing uplift near {suburb}",
      "Kitchen splashbacks and floor tiling in {suburb}",
      "Outdoor entertainment cladding interfacing with paving in {suburb}",
      "Large-format porcelain lay with laser datum control in {suburb}",
    ],
    painting: [
      "Interior repaint with plaster remediation in {suburb}",
      "Facade repaint including crack chasing in {suburb}",
      "Commercial phased repaint after hours in {city}",
      "Ceiling and bulkhead repaint package in {suburb}",
    ],
    "decking-flooring": [
      "Composite deck replacement with improved drainage in {suburb}",
      "Interior engineered flooring over slab in {suburb}",
      "Pool surround decking detail near {suburb}",
      "Balustrade corrosion-class upgrade tied to deck structure in {suburb}",
    ],
    paving: [
      "Driveway rebuild with edge restraint and soakaway in {suburb}",
      "Courtyard pavers and channels in {suburb}",
      "Commercial forecourt paving maintenance in {city}",
      "Pedestrian circulation reset with tactile warning zones in {suburb}",
    ],
    waterproofing: [
      "Balcony membrane reinstatement before retiling in {suburb}",
      "Planter waterproofing detail near {suburb}",
      "Roof penetration reflash after storm damage in {suburb}",
      "Slab-on-grade cold-joint reinstatement in {suburb}",
    ],
    renovations: [
      "Bathroom gut-to-shell refurbishment in {suburb}",
      "Kitchen remodel with services reroute in {suburb}",
      "Whole-floor apartment refresh in {city}",
      "Load-bearing wall investigation ahead of layout change in {suburb}",
    ],
    plumbing: [
      "Mixer and shut-off replacement ahead of tiling in {suburb}",
      "Drainage investigation with paving reinstatement in {suburb}",
      "Geyser circuit isolation and safety audit in {suburb}",
      "Hidden leak chase with minimal chase footprint in {suburb}",
    ],
  };

  const templates = proofMap[service.slug] ?? proofMap.construction;
  const proofProjects = proofLine(loc, templates, service.slug).slice(0, 4);

  const pricingHooks: Record<string, string> = {
    construction: "Structured milestones, we won’t guess structural scope without drawings and engineer input.",
    tiling: "Projects often start from modest bathroom phases through full wet-room rebuilds, we bracket m² rates after laser levels and waterproofing scope.",
    painting: "Repaints scale with prep, expect clearer numbers once cracks, peeling, and suction are assessed.",
    "decking-flooring": "Deck quotes move with height off ground, corrosion class, and drainage, coastal specs cost more than sheltered courts.",
    paving: "Driveway classes jump when bases deepen or edges need kerb upgrades.",
    waterproofing: "Stopping ingress beats repeating cosmetics, we price trays and interfaces separately from finishes.",
    renovations: "Kitchens and bathrooms bundle trades, one programme reduces downtime versus sequential quotes.",
    plumbing: "Isolated fixes stay lean; concealed leaks needing chase-and-repair attract making-good lines.",
  };

  const localSignalsParagraph = `We regularly complete ${service.name.toLowerCase()} work around ${suburbsSnippet(loc)}, not as an exhaustive service map, but as real mobilisation patterns our crews know. ${loc.regionalBuildNote}`;

  const materialsNote = mats[service.slug] ?? mats.construction;

  const processSteps = [
    `Site inspection & photos (${loc.name})`,
    "Written quote with assumptions, exclusions, and programme",
    "Mobilisation, protection of finishes, and daily housekeeping",
    `${service.name} execution with hold-points for QA`,
    "Snag, manufacturer/system checks where applicable, and handover pack",
  ];

  return {
    localSignalsParagraph,
    materialsNote,
    pricingHook: pricingHooks[service.slug] ?? pricingHooks.construction,
    proofProjects,
    pricingHeading: `Cost of ${service.name.toLowerCase()} in ${loc.name}`,
    pricingLead: lead,
    pricingRange: range,
    pricingDisclaimer:
      "Published ranges are marketing guides only, not quotations. We confirm pricing after substrate inspection and scope lock.",
    processHeading: `Our ${service.name.toLowerCase()} process`,
    processSteps,
    faqs: faqsFor(service, loc.name),
    trustBullets: [
      "Cape Town and surrounding-area project focus",
      "Programme-led site coordination across residential and commercial scopes",
      "Transparent quoting with staged milestones on larger scopes",
      "Waterfront-based operations desk, responsive scheduling",
    ],
  };
}
