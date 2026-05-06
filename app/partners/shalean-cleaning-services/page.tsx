import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SAFE_PARTNER_OUTBOUND_REL, SHALEAN_WEBSITE_URL } from "@/lib/partners";
import { buildPageMetadata } from "@/lib/seo";

const path = "/partners/shalean-cleaning-services";

export const metadata: Metadata = buildPageMetadata(
  path,
  "Partner referral: Shalean Cleaning Services | Team Edlick Construction",
  "When cleaning sits outside our trade scope, Team Edlick may suggest Shalean Cleaning Services — an independent company clients hire separately.",
  {
    keywords: ["Shalean Cleaning Services", "Team Edlick Construction", "Cape Town"],
  },
);

export default function ShaleanPartnerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-primary/10 to-background py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="text-muted-foreground"> · </span>
              <span className="text-muted-foreground">Partners</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Partner referral: Shalean Cleaning Services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Separate businesses, complementary workflows — construction and renovation trades on our side; specialist
              cleaning on theirs.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-14 max-w-3xl space-y-10 text-muted-foreground leading-relaxed">
          <section aria-labelledby="relationship-heading">
            <h2 id="relationship-heading" className="text-2xl font-bold text-foreground mb-4">
              Relationship
            </h2>
            <p className="mb-4">
              <strong className="text-foreground">Team Edlick Construction</strong> delivers construction, renovations,
              tiling, waterproofing, and related trades across Cape Town and surrounds.{" "}
              <strong className="text-foreground">Shalean Cleaning Services</strong> (
              <a
                href={SHALEAN_WEBSITE_URL}
                className="text-primary font-medium hover:underline"
                target="_blank"
                rel={SAFE_PARTNER_OUTBOUND_REL}
              >
                shalean.com
              </a>
              ) is an independent cleaning company. We do not employ their staff, set their pricing, or manage their
              diary — clients contract with them directly.
            </p>
            <p>
              Operationally, renovation and new-build programmes often end with dust, debris, and foot traffic through
              finished spaces. Many clients prefer a dedicated cleaning team for handover — that is the gap Shalean
              typically fills when we refer them.
            </p>
          </section>

          <section aria-labelledby="when-heading">
            <h2 id="when-heading" className="text-2xl font-bold text-foreground mb-4">
              When we suggest Shalean
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>After dusty phases of renovations, tiling, or painting, before occupation or furniture placement.</li>
              <li>When you want a thorough residential clean that sits outside our trade scope.</li>
              <li>After construction or refurbishment when you need the property comfortable for users quickly.</li>
            </ul>
            <p className="mt-4 text-sm border-l-4 border-primary/30 pl-4">
              Our quotes cover trade work unless you have agreed a bundled scope in writing. Always confirm services and
              pricing with Shalean before they attend site.
            </p>
          </section>

          <section aria-labelledby="trust-heading">
            <h2 id="trust-heading" className="text-2xl font-bold text-foreground mb-4">
              Why we mention them
            </h2>
            <p>
              We refer partners when it helps clients sequence work sensibly: trades first, then specialist cleaning.
              A referral is not a guarantee of availability or outcome — it is a practical starting point from teams we
              know operate professionally in similar environments.
            </p>
          </section>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <a href={SHALEAN_WEBSITE_URL} target="_blank" rel={SAFE_PARTNER_OUTBOUND_REL}>
                Visit Shalean Cleaning Services
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Request a Team Edlick quote</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Back to{" "}
            <Link href="/services/renovations/cape-town" className="text-primary hover:underline">
              Renovations in Cape Town
            </Link>
            ,{" "}
            <Link href="/services/construction/cape-town" className="text-primary hover:underline">
              Construction in Cape Town
            </Link>
            , or the{" "}
            <Link href="/projects" className="text-primary hover:underline">
              projects portfolio
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
