import Link from "next/link";
import { BlogInlineCta } from "@/components/blog/BlogInlineCta";
import { BlogPartnerReferral } from "@/components/partners/BlogPartnerReferral";

type Props = { slug: string };

export function BlogArticleBody({ slug }: Props) {
  switch (slug) {
    case "cost-of-tiling-cape-town":
      return (
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Tiling quotes in Cape Town usually hinge on three things: substrate flatness, waterproofing detail in wet areas,
            and the tile format itself (small mosaics versus large-format porcelain). Coastal humidity also changes adhesive
            and grout choices, we specify systems that tolerate slower drying cycles behind enclosed showers.
          </p>
          <BlogInlineCta
            title="Get a tiling quote in Cape Town, fast turnaround"
            description="We aim to respond within one business day once scope photos land. Local hub shows FAQs, process, and indicative m² brackets."
            href="/services/tiling/cape-town"
            linkLabel="Open tiling in Cape Town"
          />
          <p>
            Supply-and-fix rates often bracket between roughly{" "}
            <strong className="text-foreground">R350–R950/m²</strong> for many residential walls and floors, before niche
            stone, trims, or structural levelling. Complex wet rooms, niches, and full-height feature walls add labour and
            wastage.
          </p>
          <h2 className="text-2xl font-bold text-foreground">What shifts your final number?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rip-out state of existing tiles and screed</li>
            <li>Waterproofing reinspection points before close-up</li>
            <li>Lift heights, datum lines, and pattern complexity</li>
            <li>Parking, access, and high-rise logistics</li>
          </ul>
          <BlogPartnerReferral variant="shalean-cleaning" context="post-tiling" />
          <p>
            Ready to compare scope properly? Book{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              a measured site visit
            </Link>{" "}
           , or jump straight to our{" "}
            <Link href="/services/tiling/cape-town" className="text-primary font-medium hover:underline">
              tiling services in Cape Town
            </Link>{" "}
            hub for local proof points and programme notes.
          </p>
        </div>
      );

    case "bathroom-renovation-cost-south-africa":
      return (
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Bathroom refurbishments rarely fail on tile choice, they fail on unclear strip-out assumptions and services not
            captured in the first quote. A pragmatic budget separates{" "}
            <strong className="text-foreground">strip-out + making good</strong>,{" "}
            <strong className="text-foreground">MEP rough-ins</strong>,{" "}
            <strong className="text-foreground">waterproofing + tiling</strong>, and{" "}
            <strong className="text-foreground">sanware / joinery</strong>.
          </p>
          <p>
            Mid-tier full wet-room refurbishments often land from modest five figures upward depending on finishes and
            whether walls move; retention baths and local authority nuances can add programme days more than raw material
            cost.
          </p>
          <BlogPartnerReferral variant="shalean-cleaning" context="post-renovation" />
          <BlogInlineCta
            title="Book a bathroom renovation quote, Cape Town metro"
            description="One brief ties waterproofing, tiling, and plumbing sequencing so budgets don’t fracture across trades."
            href="/services/renovations/cape-town"
            linkLabel="Start with renovations in Cape Town"
          />
          <h2 className="text-2xl font-bold text-foreground">Link the trades once</h2>
          <p>
            If you are planning waterproofing, tiling, and plumbing together, brief everything on{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              one contact form
            </Link>{" "}
            so programmes align. See how we structure{" "}
            <Link href="/services/renovations/cape-town" className="text-primary font-medium hover:underline">
              renovations in Cape Town
            </Link>{" "}
           , from Claremont and Rondebosch to Milnerton and Table View.
          </p>
        </div>
      );

    case "how-long-does-renovation-take":
      return (
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Elapsed time is not the same as active labour days. Renovations wait on curing windows (waterproofing), lead
            times (glass, imports), and inspection-ready hold points. A bathroom might show 3–10 active trade days spread
            across 2–5 calendar weeks.
          </p>
          <BlogInlineCta
            title="Need a realistic renovation timeline for your address?"
            description="Share occupancy constraints and we’ll map milestones around curing windows and lead-time items, reply typically within one business day."
            href="/contact"
            linkLabel="Request a programme review"
          />
          <h2 className="text-2xl font-bold text-foreground">Plan occupancy early</h2>
          <p>
            Dust sealing, water shutdowns, and noise curfews determine whether you stay in-residence. We sequence noisy work
            up-front where possible, then shift to quieter finishes.
          </p>
          <BlogPartnerReferral variant="shalean-cleaning" context="handover" />
          <p>
            Need a programme for a multi-trade scope? Start with{" "}
            <Link href="/services/construction/cape-town" className="text-primary font-medium hover:underline">
              construction coordination in Cape Town
            </Link>{" "}
           , then confirm milestones on{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              contact
            </Link>
            .
          </p>
        </div>
      );

    case "tiling-mistakes-to-avoid":
      return (
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-foreground">Skipping flatness checks</strong>, large formats expose substrate waves.
            </li>
            <li>
              <strong className="text-foreground">Closing in before flood tests</strong>, wet areas need discipline.
            </li>
            <li>
              <strong className="text-foreground">Wrong adhesive class</strong>, interiors versus exteriors versus immersed
              zones.
            </li>
            <li>
              <strong className="text-foreground">No movement joints</strong>, especially on solar-facing façades.
            </li>
            <li>
              <strong className="text-foreground">Mismatched billing expectations</strong>, pattern matches and niche cuts
              consume time.
            </li>
          </ol>
          <BlogInlineCta
            title="Stop tiling defects before they’re tiled over"
            description="Book a walkthrough on substrate flatness, adhesive class, and flood-test hold-points, Cape Town metro crews."
            href="/contact"
            linkLabel="Book a tiling QA walkthrough"
          />
          <p>
            We document hold-points so finishes do not bury defects. See how we structure{" "}
            <Link href="/services/tiling/cape-town" className="text-primary font-medium hover:underline">
              tiling in Cape Town
            </Link>
            , then{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              request a walkthrough
            </Link>
            .
          </p>
        </div>
      );

    case "best-flooring-options-south-africa":
      return (
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Cape Town coastal homes prioritise moisture tolerance, UV stability, and corrosion-class fixings where sea air
            reaches decks and façades. Tiles remain the default for wet zones; living spaces mix engineered timber, luxury
            rigid boards, and stone-look porcelain depending on traffic class.
          </p>
          <BlogInlineCta
            title="Planning decking or outdoor paving in Cape Town?"
            description="We coordinate drainage, corrosion-class fixings, and waterproofing interfaces, see scope packs and photos on the local hub."
            href="/services/decking-flooring/cape-town"
            linkLabel="Get decking & flooring guidance, Cape Town"
          />
          <h2 className="text-2xl font-bold text-foreground">Decking and outdoor circulation</h2>
          <p>
            External timber and composites must respect drainage, corrosion class of fixings, and maintenance appetite.
            Explore{" "}
            <Link href="/services/decking-flooring/cape-town" className="text-primary font-medium hover:underline">
              decking &amp; flooring in Cape Town
            </Link>{" "}
           , coastal fixes and UV-stable detailing where it matters.
          </p>
          <p>
            Still comparing?{" "}
            <Link href="/services/paving/cape-town" className="text-primary font-medium hover:underline">
              Paving
            </Link>{" "}
            often pairs with outdoor room transitions, brief us on{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              contact
            </Link>{" "}
            for tied quotes.
          </p>
        </div>
      );

    default:
      return null;
  }
}
