import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { getVerifiedProjectEvidence } from "@/lib/project-evidence";

export default function ProjectsPage() {
  const evidence = getVerifiedProjectEvidence();

  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero
        title="Team Edlick Construction Portfolio"
        subtitle="Verified Team Edlick work from the Cape Town portfolio, grouped by trade without inventing project names, dates or suburbs."
        height="medium"
      />

      <main>
        <section className="py-16 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-xl border bg-background p-7 md:p-9 shadow-card">
              <h2 className="text-2xl font-bold mb-4">What is verified on this page</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The images below are confirmed as genuine Team Edlick work from the Cape Town portfolio. Where the exact
                suburb, completion date or customer brief is not recorded in the website evidence register, we do not
                invent those details.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Use the portfolio to assess workmanship and trade coverage, then open the relevant service guide for scope,
                pricing factors and the information needed for a site-specific quote.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="text-sm font-medium text-primary mb-2">Verified portfolio evidence</p>
                <h2 className="text-3xl font-bold">Construction and finishing work</h2>
              </div>
              <Link href="/locations/cape-town" className="text-sm font-medium text-primary hover:underline">
                View Cape Town service area →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {evidence.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-xl border bg-card shadow-card">
                  <div className="relative aspect-[4/3] bg-muted">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-foreground">{item.scopeSummary}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.locationLabel}</p>
                    <Link
                      href={`/services/${item.serviceSlug}`}
                      className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
                    >
                      View related service →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted border-y">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border bg-background p-6">
                <h2 className="text-xl font-bold mb-3">Planning a similar scope?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Browse the service hub that matches your project to see process, typical inclusions, local pricing
                  variables and related trades.
                </p>
                <Link href="/services" className="text-primary font-medium hover:underline">
                  Explore all construction services →
                </Link>
              </div>
              <div className="rounded-xl border bg-background p-6">
                <h2 className="text-xl font-bold mb-3">Ready for a site-specific quote?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Send the property location, photos, approximate dimensions and preferred timing. We&apos;ll confirm whether
                  a site visit is needed before final pricing.
                </p>
                <Link href="/contact" className="text-primary font-medium hover:underline">
                  Request a quote →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Discuss your Cape Town project</h2>
            <p className="text-lg opacity-95 mb-7">
              Tell us the trade, property type, required outcome and timing so we can structure the next step.
            </p>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
