import Link from "next/link";
import { BlogInlineCta } from "@/components/blog/BlogInlineCta";

export function PlumbingCostCapeTownBody() {
  return (
    <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
      <p>
        Plumbing cost in Cape Town depends on how quickly the fault can be isolated, how accessible the pipework or fitting
        is, what parts are required, and how much making-good is needed after the repair. A simple exposed replacement is a
        different scope from a concealed leak behind finishes.
      </p>

      <p>
        Team Edlick does not publish one universal plumbing rate. Our current pricing model is a call-out plus labour-and-
        materials approach, with chase-and-repair work carrying separate making-good allowances where finishes must be
        opened and reinstated.
      </p>

      <BlogInlineCta
        title="Need a plumbing quote in Cape Town?"
        description="Share the fault, photos, access details, and any visible water damage. We confirm the diagnostic scope, repair access, materials, and making-good before locking the work."
        href="/services/plumbing/cape-town"
        linkLabel="See plumbing services in Cape Town"
      />

      <h2 className="text-2xl font-bold text-foreground">What changes a plumbing quote?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Whether the fault is already visible or still needs to be isolated and pressure-tested</li>
        <li>Access to valves, pipework, drains, mixers, or concealed services</li>
        <li>Parts and materials required for the repair or replacement</li>
        <li>Chasing, opening finishes, and the amount of making-good after the plumbing work</li>
        <li>Whether the scope forms part of a wider bathroom, tiling, or renovation programme</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground">Leak investigation: what we can claim</h2>
      <p>
        Our published plumbing scope supports isolating circuits, pressure-testing, and selectively exposing a suspected
        failure before reinstatement. We do not describe this as specialist non-invasive leak detection unless that specific
        equipment and service are confirmed for the job.
      </p>

      <h2 className="text-2xl font-bold text-foreground">Check compliance before regulated work</h2>
      <p>
        Cape Town plumbing certificates and approvals must be issued by appropriately registered or licensed plumbers where
        the applicable rules require them. Before work that needs a certificate, confirm who the responsible plumber is and
        which City or industry certificate applies. This guide does not claim that Team Edlick itself issues a plumbing CoC
        unless the responsible plumber&apos;s credentials have been verified for that scope.
      </p>

      <p>
        For the commercial service scope, local process, FAQs, and quote request, see{" "}
        <Link href="/services/plumbing/cape-town" className="text-primary font-medium hover:underline">
          plumbing in Cape Town
        </Link>
        . If the plumbing is part of a bathroom or multi-trade refurbishment, see{" "}
        <Link href="/services/renovations/cape-town" className="text-primary font-medium hover:underline">
          renovations in Cape Town
        </Link>{" "}
        so services, waterproofing, tiling, and making-good can be sequenced together.
      </p>
    </div>
  );
}
