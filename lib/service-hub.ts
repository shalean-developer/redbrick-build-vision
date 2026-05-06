import type { ConstructionService } from "@/lib/construction-services";
import { gallery } from "@/lib/gallery";
import { locationPages } from "@/lib/locations";
import type { Testimonial } from "@/lib/testimonials";
import { authorityTestimonials } from "@/lib/testimonials";

export type HubProofImage = {
  src: string;
  alt: string;
  caption: string;
};

export type HubExpandedCopy = {
  /** Strong hero supporting line under H1 */
  valueProp: string;
  /** Trust strip under CTAs */
  trustLine: string;
  whatIncludes: string;
  whereUsed: string;
  whoItsFor: string;
  proofSectionTitle?: string;
  narrativeSectionTitle?: string;
  locationSectionTitle?: string;
  /** Short link label to the city landing page */
  locationCtaLabel?: string;
  finalCtaHeading?: string;
};

export type HubProcessStep = {
  title: string;
  body: string;
};

const defaultHubProcess: HubProcessStep[] = [
  {
    title: "Site inspection",
    body: "Walk-through, photos, and substrate checks so quotes reflect real risk and access.",
  },
  {
    title: "Quote",
    body: "Written pricing with assumptions, exclusions, and a programme you can plan around.",
  },
  {
    title: "Execution",
    body: "Mobilisation, protection of finishes, daily housekeeping, and QA hold-points on site.",
  },
  {
    title: "Final check",
    body: "Snag pass, system checks where specified, and handover notes for maintenance.",
  },
];

const tilingHubProcess: HubProcessStep[] = [
  {
    title: "Site inspection and consultation",
    body: "We confirm substrates, falls in wet areas, tile formats, and sequencing with waterproofing before locking scope.",
  },
  {
    title: "Detailed quote and planning",
    body: "Pricing reflects m² quantities, prep tiers, movement joints, and curing windows so programmes stay realistic.",
  },
  {
    title: "Surface preparation and waterproofing",
    body: "Levelling, primers, and membrane detail where wet zones demand it, inspection holds before ceramics close in.",
  },
  {
    title: "Tile installation and finishing",
    body: "Layouts aligned to datum lines, clean grout lines, trims, and protection through handover.",
  },
  {
    title: "Final inspection and cleanup",
    body: "Snag pass with you on site, silicone and expansion detail checked, and daily vacuum before handover.",
  },
];

export function getHubProcessSteps(serviceSlug: string): HubProcessStep[] {
  if (serviceSlug === "tiling") return tilingHubProcess;
  return defaultHubProcess;
}

const capeTown = locationPages.find((l) => l.city === "cape-town")!;

export function getHubCapeTown() {
  return capeTown;
}

const expanded: Record<string, HubExpandedCopy> = {
  construction: {
    valueProp:
      "From structural shells to handover-ready finishes, we run coordinated crews across Cape Town with clear programmes and QA stops.",
    trustLine:
      "Cape Town metro focus · Structured quotes · Crews accustomed to estates, tenant sites, and occupied homes",
    whatIncludes:
      "Site setup, subcontractor coordination, quality checkpoints, and documented snag cycles. We align concrete, masonry, lightweight partitioning, and architectural finishes with drawings and engineer comments.",
    whereUsed:
      "New builds and extensions in suburbs such as Claremont, Bellville, Milnerton, and Sea Point; gated estates; and smaller commercial shells where access and protection plans matter.",
    whoItsFor:
      "Homeowners adding floor space, developers needing a reliable principal contractor, and property managers refreshing buildings without shutting tenants down entirely.",
  },
  tiling: {
    valueProp:
      "Precision tiling for bathrooms, kitchens, and living spaces. We deliver clean finishes, proper waterproofing, and long-lasting results.",
    trustLine: "Serving Claremont, Sea Point, Bellville, and surrounding Cape Town areas",
    whatIncludes:
      "Small bathroom upgrades through full-scale renovations: surface preparation, waterproofing where wet zones require it, tile layout, adhesive and grout systems matched to your format, and finishing detail so joints survive coastal humidity cycles.",
    whereUsed:
      "Homes and businesses across the metro: ceramic, porcelain, and natural stone installations with alignment, grout consistency, and movement joints respected for each substrate.",
    whoItsFor:
      "Homeowners upgrading wet rooms, landlords refreshing rentals between tenants, and offices that need hard-wearing floors without excessive downtime.",
    proofSectionTitle: "Recent Tiling Projects in Cape Town",
    narrativeSectionTitle: "Professional Tiling for Homes & Businesses",
    locationSectionTitle: "Tiling Services Across Cape Town",
    locationCtaLabel: "View tiling services in Cape Town →",
    finalCtaHeading: "Get a tiling quote within 24 hours",
  },
  painting: {
    valueProp:
      "Interior and exterior coatings with prep done properly: fewer callbacks on suction, cracks, and coastal exposure.",
    trustLine:
      "Coastal system guidance · Phased commercial access · Clean masking on occupied homes",
    whatIncludes:
      "Surface prep, primers, mist coats on new plaster, topcoat programmes, and protection of floors and joinery. Specifications matched to traffic class and façade exposure.",
    whereUsed:
      "Atlantic Seaboard apartments facing salt spray, Camps Bay exteriors, Table View freestanding homes, and Claremont offices needing after-hours phases.",
    whoItsFor:
      "Owners refreshing before sale, body corporates on repaint cycles, and tenants improving shells with landlord-approved scopes.",
  },
  "decking-flooring": {
    valueProp:
      "Decks and flooring installed with drainage, corrosion class, and transitions thought through, not just boards screwed down.",
    trustLine:
      "Structure-first detailing · Coastal fixing specs · Clean thresholds back into tiling or trims",
    whatIncludes:
      "Joist layout, bearer posts where needed, ventilation gaps, decking boards or composites, balustrade interfaces, and interior engineered flooring over slab with moisture checks.",
    whereUsed:
      "Outdoor entertainment areas in Durbanville, pool surrounds, elevated walkways, and living-room upgrades tied to renovation programmes.",
    whoItsFor:
      "Homeowners upgrading outdoor living, architects needing execution fidelity, and renovation clients bundling deck work with paving or painting.",
  },
  paving: {
    valueProp:
      "Driveways and hardstands built with correct bedding, compaction, and edge restraint: surfaces that survive vehicles and storms.",
    trustLine:
      "Compaction testing discipline · Drainage coordination · Reinstatement around gates and services",
    whatIncludes:
      "Excavation depths, geotextile or stabilising layers as specified, bedding course, laying pattern, jointing, sealing where required, and handover cleaning.",
    whereUsed:
      "Residential driveways in Table View and Milnerton, courtyard paving in Sea Point, commercial forecourts where falls and tactile zones matter.",
    whoItsFor:
      "Homeowners replacing failed paving, developers completing civils packages, and estates standardising circulation finishes.",
  },
  waterproofing: {
    valueProp:
      "Membrane and liquid systems detailed at outlets, thresholds, and penetrations, stopping ingress before you pay twice for finishes.",
    trustLine:
      "Manufacturer-compliant builds · Inspection holds before tiling · Documented laps and primer coats",
    whatIncludes:
      "Surface prep, priming, membrane or liquid application, reinforcement at corners, outlet detailing, and coordination with tilers or planters.",
    whereUsed:
      "Balconies and planters in Sea Point, flat roofs and slabs across the metro, bathroom tanking ahead of ceramics.",
    whoItsFor:
      "Owners seeing damp or leaks, body corporates on maintenance cycles, and renovators who want warranties intact.",
  },
  renovations: {
    valueProp:
      "Kitchens, bathrooms, and whole-home refreshes sequenced to cut downtime: strip-out, services, wet areas, then finishes.",
    trustLine:
      "Phased programmes for live-in homes · Engineer hooks when structure moves · Clear variation rules",
    whatIncludes:
      "Protection plans, strip-out, rough-ins, waterproofing and tiling packages, joinery coordination, painting, and snag-led handover.",
    whereUsed:
      "Apartments on the Atlantic Seaboard, family homes in Claremont and Rondebosch, rental refreshes in Woodstock.",
    whoItsFor:
      "Families upgrading wet rooms, investors improving yields, and owners modernising without relocating.",
  },
  plumbing: {
    valueProp:
      "Installations and leak investigations tied into renovations, with pressure tests before someone tiles over a problem.",
    trustLine:
      "Isolation-first diagnostics · Reinstatement coordinated with paving or tiling · Certification-aware detail",
    whatIncludes:
      "Rough-ins, fixture swaps, geyser circuits, drainage investigations, and surgical chases with agreed making-good.",
    whereUsed:
      "Bathroom refurbishments across Cape Town suburbs, boundary drainage alongside paving crews, kitchen relocations during renovations.",
    whoItsFor:
      "Renovation clients bundling trades, landlords fixing recurring leaks, and homeowners upgrading sanitaryware.",
  },
};

/**
 * Hub proof grids: each gallery URL here appears at most twice across this map (paired reuse).
 * Caps/suburbs are illustrative Cape Town context for captions.
 */
const proofBySlug: Record<string, HubProofImage[]> = {
  construction: [
    {
      src: gallery.e09,
      alt: "Structural shell and masonry progress with crews on site",
      caption: "Structural shell programme, Cape Town northern suburbs",
    },
    {
      src: gallery.e10,
      alt: "Bricklaying crew on scaffolding at an active building site",
      caption: "Multi-trade brick and mortar site, Cape Town metro",
    },
    {
      src: gallery.e11,
      alt: "Commercial facade maintenance and coatings access setup",
      caption: "Commercial facade upgrade, Atlantic Seaboard corridor",
    },
  ],
  tiling: [
    {
      src: gallery.e12,
      alt: "Bathroom tiling work completed in Claremont, Cape Town",
      caption: "Bathroom tiling completed in Claremont, Cape Town",
    },
    {
      src: gallery.e13,
      alt: "Kitchen tiling project in Sea Point, Cape Town",
      caption: "Kitchen tiling project in Sea Point",
    },
    {
      src: gallery.e14,
      alt: "Floor tiling installation in Bellville, Cape Town",
      caption: "Floor tiling in Bellville and surrounds",
    },
  ],
  painting: [
    {
      src: gallery.e15,
      alt: "Commercial building exterior painting with ladders",
      caption: "Exterior repaint programme, Cape Town urban corridor",
    },
    {
      src: gallery.e16,
      alt: "Painter finishing interior walls and joinery protection",
      caption: "Interior repaint with joinery protection, residential Cape Town",
    },
    {
      src: gallery.e17,
      alt: "Facade coatings with phased access planning",
      caption: "Facade coatings with phased access planning",
    },
  ],
  "decking-flooring": [
    {
      src: gallery.e18,
      alt: "Timber deck installation on a residential terrace",
      caption: "Deck installation with mountain outlook, Western Cape",
    },
    {
      src: gallery.e19,
      alt: "Outdoor living scope tied into broader renovation works",
      caption: "Outdoor living tied into broader renovation scope",
    },
    {
      src: gallery.e20,
      alt: "Residential driveway paving and hardstand transitions",
      caption: "Hardstand transitions from decking to paving teams",
    },
  ],
  paving: [
    {
      src: gallery.e21,
      alt: "Workers laying patterned driveway paving bricks",
      caption: "Driveway paving reinstatement, Cape Town residential",
    },
    {
      src: gallery.e09,
      alt: "Earthworks and levels ahead of finished paving",
      caption: "Earthworks and levels ahead of finished paving",
    },
    {
      src: gallery.e10,
      alt: "Commercial circulation paving and forecourt upgrades",
      caption: "Commercial circulation and forecourt upgrades",
    },
  ],
  waterproofing: [
    {
      src: gallery.e11,
      alt: "Torch-on waterproofing being applied on a slab",
      caption: "Torch-on membrane installation, Cape Town slab",
    },
    {
      src: gallery.e12,
      alt: "Tiling crew sequencing after membrane sign-off",
      caption: "Waterproofing-to-tiling sequencing on metro bathrooms",
    },
    {
      src: gallery.e13,
      alt: "Residential wet-area upgrades after membrane QA",
      caption: "Wet-area upgrades after membrane sign-off",
    },
  ],
  renovations: [
    {
      src: gallery.e14,
      alt: "Brick construction site with multiple workers",
      caption: "Structural and brick renovation programme, Cape Town",
    },
    {
      src: gallery.e15,
      alt: "Interior refurbishment with joinery and painting trades",
      caption: "Interior refurbishment with joinery and painting trades",
    },
    {
      src: gallery.e16,
      alt: "Floor tiling installation during finishes phase",
      caption: "Finishes phase after services rough-in",
    },
  ],
  plumbing: [
    {
      src: gallery.e17,
      alt: "Drainage pipes laid in a trench beside a building",
      caption: "External drainage install, Cape Town renovation",
    },
    {
      src: gallery.e18,
      alt: "Rough-in coordination during broader renovation",
      caption: "Rough-in coordination during broader renovation",
    },
    {
      src: gallery.e19,
      alt: "Pressure-tested wet services before tiling closes in",
      caption: "Pressure-tested circuits before tiling closes in",
    },
  ],
};

export function getHubExpanded(service: ConstructionService): HubExpandedCopy {
  return expanded[service.slug] ?? expanded.construction;
}

export function getHubProof(serviceSlug: string): HubProofImage[] {
  return proofBySlug[serviceSlug] ?? proofBySlug.construction;
}

const tilingPageLead: Testimonial = {
  quote: "Great tiling work in Claremont. Clean finish and very professional team.",
  byline: "James M., Cape Town",
};

export function getHubTestimonials(serviceSlug: string): Testimonial[] {
  const [a, b, c] = authorityTestimonials;
  const map: Record<string, Testimonial[]> = {
    tiling: [tilingPageLead, a],
    waterproofing: [b, a],
    renovations: [c, a],
    plumbing: [b, c],
    painting: [c, b],
    paving: [b, c],
    construction: [c, b],
    "decking-flooring": [c, b],
  };
  return map[serviceSlug] ?? [a, b];
}

export function whatsappHubUrl(serviceName: string) {
  const text = `Hi Team Edlick - I'd like a quote for ${serviceName} in Cape Town.`;
  return `https://wa.me/27685943091?text=${encodeURIComponent(text)}`;
}
