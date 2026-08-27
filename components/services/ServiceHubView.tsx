import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ConstructionService } from "@/lib/construction-services";
import { assets } from "@/lib/assets";
import type { MoneyPageContent } from "@/lib/service-location-content";
import {
  whatsappHubUrl,
  type HubExpandedCopy,
  type HubProofImage,
  type HubProcessStep,
} from "@/lib/service-hub";
import type { Testimonial } from "@/lib/testimonials";

/** Same URLs as homepage cards (see lib/assets); avoids extra literals per gallery slot budget */
const hubHeroSrc: Record<string, string> = {
  construction: assets.serviceConstruction,
  tiling: assets.serviceTiling,
  painting: assets.servicePainting,
  "decking-flooring": assets.serviceDecking,
  paving: assets.servicePaving,
  waterproofing: assets.serviceWaterproofing,
  renovations: assets.serviceRenovations,
  plumbing: assets.servicePlumbing,
};

type Props = {
  service: ConstructionService;
  money: MoneyPageContent;
  hub: HubExpandedCopy;
  proof: HubProofImage[];
  processSteps: HubProcessStep[];
  testimonials: Testimonial[];
  related: ConstructionService[];
  capeTownSlug: string;
  suburbs: string[];
};

export function ServiceHubView({
  service,
  money,
  hub,
  proof,
  processSteps,
  testimonials,
  related,
  capeTownSlug,
  suburbs,
}: Props) {
  const cityLandingHref = `/services/${service.slug}/${capeTownSlug}`;
  const heroSrc = hubHeroSrc[service.slug] ?? assets.serviceConstruction;
  const suburbText =
    suburbs.length <= 2
      ? suburbs.join(" and ")
      : `${suburbs.slice(0, -1).join(", ")}, and ${suburbs[suburbs.length - 1]}`;
  const waUrl = whatsappHubUrl(service.name);

  return (
    <main className="flex-grow pb-16">
      <section className="relative border-b border-border/60 bg-gradient-to-b from-primary/12 via-background to-background pt-[5.25rem] lg:pt-24">
        <div className="container mx-auto px-4 py-10 md:py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center max-w-6xl mx-auto">
            <div>
              <p className="text-sm font-medium text-primary mb-3">
                <Link href="/services" className="hover:underline">All services</Link>
                <span className="text-muted-foreground"> · </span>
                <Link href="/locations/cape-town" className="hover:underline text-muted-foreground">Cape Town</Link>
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4">
                {service.name} Services in Cape Town
              </h1>
              <p className="text-lg text-muted-foreground mb-3 leading-relaxed">{hub.valueProp}</p>
              <p className="text-base text-foreground/90 mb-8 leading-relaxed">{service.summary}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4">
                <Button asChild size="lg" className="font-semibold sm:min-w-[220px]">
                  <Link href="/contact">Get a Quote in 24 Hours</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold gap-2 bg-background">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed border-l-4 border-primary/40 pl-4">{hub.trustLine}</p>
              <p className="mt-6">
                <Link href={cityLandingHref} className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                  {service.name} in Cape Town: pricing, suburbs &amp; FAQs →
                </Link>
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-muted shadow-elevated lg:aspect-[5/4]">
              <Image
                src={heroSrc}
                alt={`${service.name} work in Cape Town`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {proof.length > 0 ? (
        <section className="py-12 md:py-16 bg-muted/50 border-b border-border/60">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{hub.proofSectionTitle ?? "Verified project work"}</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Verified Team Edlick project evidence. See the <Link href="/projects" className="text-primary font-medium hover:underline">projects index</Link> for more.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {proof.map((item) => (
                <figure key={item.src + item.caption} className="overflow-hidden rounded-lg border bg-background shadow-card">
                  <div className="relative aspect-[4/3] bg-muted">
                    <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <figcaption className="p-4 text-sm font-medium text-foreground leading-snug">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{hub.narrativeSectionTitle ?? `How we run ${service.name.toLowerCase()} in Cape Town`}</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <div><h3 className="text-lg font-semibold text-foreground mb-2">What this service includes</h3><p>{hub.whatIncludes}</p></div>
            <div><h3 className="text-lg font-semibold text-foreground mb-2">Where it is used</h3><p>{hub.whereUsed}</p></div>
            <div><h3 className="text-lg font-semibold text-foreground mb-2">Who it is for</h3><p>{hub.whoItsFor}</p></div>
          </div>
          <div className="mt-8 rounded-lg border bg-primary/5 px-4 py-4 text-sm text-foreground leading-relaxed">
            <span className="font-semibold text-primary">Materials &amp; systems: </span>{money.materialsNote}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/40 border-y border-border/60">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">What we deliver</h2>
          <p className="text-muted-foreground mb-8">Practical outcomes our crews target on every {service.name.toLowerCase()} programme.</p>
          <ul className="space-y-3">
            {service.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                <span className="text-foreground leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{hub.locationSectionTitle ?? `Our ${service.name.toLowerCase()} services in Cape Town`}</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We mobilise across the Cape Town metro and surrounding corridors, including <span className="text-foreground font-medium">{suburbText}</span>. Regional coastal conditions inform how we specify adhesives, membranes, and coatings.
          </p>
          <p className="mb-6">
            <Link href={cityLandingHref} className="inline-flex font-semibold text-primary hover:underline">
              {hub.locationCtaLabel ?? `Open the full ${service.name} in Cape Town page (pricing, process & FAQs) →`}
            </Link>
          </p>
          <p className="text-sm text-muted-foreground">
            Prefer another hub? <Link href="/locations" className="text-primary font-medium hover:underline">Browse locations</Link> or <Link href="/contact" className="text-primary font-medium hover:underline">send site photos for a scoped quote</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/50 border-y border-border/60">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{money.pricingHeading}</h2>
          <p className="text-foreground mb-4 leading-relaxed">{money.pricingLead}</p>
          <p className="text-lg font-medium text-foreground mb-4">{money.pricingRange}</p>
          <p className="text-sm text-muted-foreground border-l-4 border-primary/30 pl-4">{money.pricingDisclaimer}</p>
          <p className="mt-6 text-sm text-muted-foreground">{money.pricingHook}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Our {service.name.toLowerCase()} process</h2>
          <p className="text-muted-foreground mb-8">A straight-line sequence so expectations stay aligned from first visit to handover.</p>
          <ol className="space-y-6 list-none m-0 p-0">
            {processSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm" aria-hidden>{i + 1}</span>
                <div><h3 className="font-semibold text-foreground text-lg">{step.title}</h3><p className="text-muted-foreground mt-1 leading-relaxed">{step.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {testimonials.length > 0 ? (
        <section className="py-12 md:py-16 bg-muted/40 border-y border-border/60">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">What Cape Town clients emphasise</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t) => (
                <blockquote key={t.byline} className="rounded-lg border bg-background p-6 shadow-card text-foreground leading-relaxed">
                  <p className="italic">&ldquo;{t.quote}&rdquo;</p>
                  <cite className="mt-4 block text-sm text-muted-foreground not-italic">{t.byline}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Related services</h2>
          <p className="text-muted-foreground mb-6">Bundling trades usually saves programme time on renovations and external upgrades.</p>
          <ul className="grid gap-3 sm:grid-cols-2 list-none m-0 p-0">
            {related.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="flex items-center justify-between rounded-lg border bg-background px-4 py-3 font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors">
                  {s.name}<span aria-hidden className="text-muted-foreground">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10 border-t border-border/60">
        <div className="container mx-auto px-4 max-w-3xl text-sm text-muted-foreground leading-relaxed">
          <p>
            Explore the full <Link href="/services" className="text-primary font-medium hover:underline">services catalogue</Link>, see <Link href="/projects" className="text-primary font-medium hover:underline">projects</Link>, or read local guides on the <Link href="/blog" className="text-primary font-medium hover:underline">blog</Link>.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">{hub.finalCtaHeading ?? "Get a quote within 24 hours"}</h2>
          <p className="text-lg opacity-95 mb-8 leading-relaxed">
            Share your suburb, photos, and scope. We respond with structured pricing options and next steps for {service.name.toLowerCase()} in Cape Town.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold"><Link href="/contact">Request a quote</Link></Button>
            <Button asChild size="lg" variant="outline" className="font-semibold border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">WhatsApp the team</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
