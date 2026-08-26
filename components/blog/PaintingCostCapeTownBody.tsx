import Link from "next/link";
import { BlogInlineCta } from "@/components/blog/BlogInlineCta";

export function PaintingCostCapeTownBody() {
  return (
    <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
      <p>
        Painting quotes in Cape Town are driven less by the final colour than by what the substrate needs before the first
        finish coat. Cracks, peeling coatings, damp staining, chalking, access height, and whether the work is interior or
        exterior can move a repaint budget materially.
      </p>

      <p>
        As a planning guide, many Team Edlick wall-repaint programmes sit around{" "}
        <strong className="text-foreground">R45–R120/m²</strong> once the measurable surface and preparation scope are
        confirmed. Facades, difficult access, extensive repairs, and specialised coating systems can exceed that range.
      </p>

      <BlogInlineCta
        title="Need a painting quote in Cape Town?"
        description="Share photos and the areas you want repainted. We confirm preparation, access, coating system, and measurable scope before locking a quote."
        href="/services/painting/cape-town"
        linkLabel="See painting services in Cape Town"
      />

      <h2 className="text-2xl font-bold text-foreground">What changes painting cost?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Crack repairs, flaking paint, and plaster remediation before coating</li>
        <li>Interior versus weather-exposed exterior surfaces</li>
        <li>Primer requirements on new, porous, stained, or repaired substrates</li>
        <li>Ceiling height, scaffolding, ladder access, and protection of occupied areas</li>
        <li>Number of coats and whether a specialised moisture- or traffic-resistant system is specified</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground">Compare quotes by scope, not only by price</h2>
      <p>
        A useful painting quote should make preparation visible. Ask what repairs, primer, masking, protection, coats, and
        access allowances are included. A lower headline rate is difficult to compare if preparation or making-good is left
        provisional.
      </p>

      <p>
        For the commercial service scope, local process, FAQs, and quote request, see{" "}
        <Link href="/services/painting/cape-town" className="text-primary font-medium hover:underline">
          painting in Cape Town
        </Link>
        . If painting is part of a wider refurbishment, the{" "}
        <Link href="/services/renovations/cape-town" className="text-primary font-medium hover:underline">
          Cape Town renovations
        </Link>{" "}
        page helps tie finishing work into one programme.
      </p>
    </div>
  );
}
