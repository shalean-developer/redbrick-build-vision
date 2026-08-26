import Link from "next/link";
import { BlogInlineCta } from "@/components/blog/BlogInlineCta";

export function WaterproofingCostCapeTownBody() {
  return (
    <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
      <p>
        Waterproofing cost in Cape Town depends on the system, the condition of the substrate, access, detailing around
        outlets and upstands, and how much stripping or reinstatement is required before and after the membrane work.
      </p>

      <p>
        As a planning guide, many Team Edlick sheet or liquid waterproofing programmes on accessible slabs sit around{" "}
        <strong className="text-foreground">R180–R450/m²</strong> before finishes are reinstated. Complex interfaces,
        failed substrates, difficult access, extensive strip-out, or specialist systems can move the project beyond that
        range.
      </p>

      <BlogInlineCta
        title="Need a waterproofing quote in Cape Town?"
        description="Share photos, the leak or damp symptoms, the approximate area, and what finishes sit above the membrane. We confirm the substrate, detailing, system, access, and reinstatement scope before locking a quote."
        href="/services/waterproofing/cape-town"
        linkLabel="See waterproofing services in Cape Town"
      />

      <h2 className="text-2xl font-bold text-foreground">What changes waterproofing cost?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Whether the existing membrane can be retained, repaired, or must be stripped</li>
        <li>Substrate repairs, falls, cracks, joints, outlets, and upstand detailing</li>
        <li>Liquid versus sheet systems and the build-up specified for the exposure</li>
        <li>Access, protection, working height, and occupied-site constraints</li>
        <li>Tiles, screeds, coatings, or other finishes that must be removed and reinstated</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground">Compare quotes by system and preparation</h2>
      <p>
        A useful waterproofing quote should identify the preparation, membrane or coating system, detailing at penetrations
        and edges, testing or hold-points where relevant, and what reinstatement is included. Two quotes that simply say
        “waterproofing” may be pricing very different build-ups.
      </p>

      <p>
        For the commercial service scope, local process, FAQs, and quote request, see{" "}
        <Link href="/services/waterproofing/cape-town" className="text-primary font-medium hover:underline">
          waterproofing in Cape Town
        </Link>
        . If the membrane sits below tiled wet-area finishes, also review{" "}
        <Link href="/services/tiling/cape-town" className="text-primary font-medium hover:underline">
          tiling in Cape Town
        </Link>{" "}
        so waterproofing, curing, and finishes are sequenced together.
      </p>
    </div>
  );
}
