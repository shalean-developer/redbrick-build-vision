import Link from "next/link";
import { BlogInlineCta } from "@/components/blog/BlogInlineCta";

export function PavingCostCapeTownBody() {
  return (
    <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
      <p>
        Paving cost in Cape Town is driven by more than the paver itself. Excavation depth, the condition of the existing
        ground, traffic class, drainage, edge restraint, access, and the amount of making-good around the paved area all
        affect the final rate.
      </p>

      <p>
        As a planning guide, many Team Edlick driveway-class paving programmes sit around{" "}
        <strong className="text-foreground">R280–R650/m²</strong> once the base build-up, paver type, and site conditions
        are confirmed. Deeper excavation, heavier-duty bases, difficult access, drainage upgrades, and premium pavers can
        push a project beyond that range.
      </p>

      <BlogInlineCta
        title="Need a paving quote in Cape Town?"
        description="Share the approximate area, current surface, access photos, and intended traffic. We confirm excavation, base build-up, drainage, edge restraint, and paver specification before locking a quote."
        href="/services/paving/cape-town"
        linkLabel="See paving services in Cape Town"
      />

      <h2 className="text-2xl font-bold text-foreground">What changes paving cost per m²?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Excavation depth and disposal of existing paving, concrete, or unsuitable material</li>
        <li>Base-course thickness and compaction required for pedestrian versus driveway traffic</li>
        <li>Paver type, pattern, cuts, and wastage</li>
        <li>Kerbs, edge restraints, channels, falls, and drainage interfaces</li>
        <li>Site access for materials, compaction equipment, and spoil removal</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground">Compare paving quotes by base specification</h2>
      <p>
        Two quotes can show similar pavers but very different preparation underneath. Ask what excavation depth, base
        material, compaction, bedding layer, edge restraint, drainage, and disposal are included. The visible finish only
        performs as well as the build-up below it.
      </p>

      <p>
        For the commercial service scope, local process, FAQs, and quote request, see{" "}
        <Link href="/services/paving/cape-town" className="text-primary font-medium hover:underline">
          paving in Cape Town
        </Link>
        . If the paved area connects to an outdoor deck or circulation space, see our{" "}
        <Link href="/services/decking-flooring/cape-town" className="text-primary font-medium hover:underline">
          decking &amp; flooring services in Cape Town
        </Link>{" "}
        for the adjoining scope.
      </p>
    </div>
  );
}
