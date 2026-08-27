import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { constructionServices } from "@/lib/construction-services";
import { whatsappQuoteUrl } from "@/lib/contact";
import { canIndexLocation } from "@/lib/location-seo";
import { buildPageMetadata } from "@/lib/seo";
import { siteName, siteOrigin } from "@/lib/site";

const locationSlug = "bellville";
const path = `/locations/${locationSlug}`;
const pageUrl = `${siteOrigin}${path}`;
const organizationId = `${siteOrigin}/#organization`;

export const metadata: Metadata = canIndexLocation(locationSlug)
  ? buildPageMetadata(
      path,
      "Construction Services Bellville | Team Edlick",
      "Team Edlick provides construction, tiling, painting, paving, waterproofing, renovations, plumbing, decking and flooring services in Bellville and across Cape Town. Request a scoped quote for your property.",
      {
        keywords: [
          "construction Bellville",
          "contractor Bellville",
          "renovations Bellville",
          "tiling Bellville",
          "paving Bellville",
          "waterproofing Bellville",
          "painting Bellville",
          "plumbing Bellville",
        ],
        image: "/projects/gallery/edlick-01.png",
        imageAlt: "Team Edlick construction services available in Bellville, Cape Town",
      },
    )
  : { robots: { index: false, follow: false } };

const serviceTeasers: Record<string, string> = {
  construction: "Structural builds, extensions, repairs and coordinated finishing trades.",
  tiling: "Bathroom, kitchen, floor and wet-area tiling.",
  painting: "Interior and exterior preparation, painting and coatings.",
  "decking-flooring": "Decking and interior flooring installation.",
  paving: "Driveways, walkways and outdoor paving.",
  waterproofing: "Waterproofing systems, leak protection and moisture-control scopes.",
  renovations: "Residential and commercial renovation programmes with coordinated trades.",
  plumbing: "Installations, repairs and leak-investigation scopes.",
};

const representativeScopes = [
  { src: "/assets/service-tiling.png", alt: "Representative Team Edlick tiling scope from the Cape Town portfolio", caption: "Tiling — representative Cape Town portfolio work" },
  { src: "/assets/service-renovations.png", alt: "Representative Team Edlick renovation scope from the Cape Town portfolio", caption: "Renovations — representative Cape Town portfolio work" },
  { src: "/assets/service-paving.png", alt: "Representative Team Edlick paving scope from the Cape Town portfolio", caption: "Paving — representative Cape Town portfolio work" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: `Construction Services Bellville | ${siteName}`,
      description: "Construction and trade services available in Bellville, with Bellville projects quoted and delivered through Team Edlick's Cape Town operation.",
      isPartOf: { "@type": "WebSite", url: siteOrigin, name: siteName },
      about: { "@id": organizationId },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Construction and trade services in Bellville",
      provider: { "@id": organizationId },
      areaServed: { "@type": "Place", name: "Bellville, Cape Town, Western Cape" },
      serviceType: constructionServices.map((service) => service.name),
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteOrigin },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${siteOrigin}/locations` },
        { "@type": "ListItem", position: 3, name: "Bellville", item: pageUrl },
      ],
    },
  ],
};

export default function BellvilleLocationPage() {
  if (!canIndexLocation(locationSlug)) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="flex-grow pb-16">
        <section className="relative border-b border-border/60 bg-gradient-to-b from-primary/12 via-background to-background pt-[5.25rem] lg:pt-24">
          <div className="container mx-auto px-4 py-12 md:py-16 text-center max-w-3xl">
            <p className="text-sm font-medium text-primary mb-3"><Link href="/locations" className="hover:underline">Locations</Link><span className="text-muted-foreground"> · Cape Town · Bellville</span></p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4">Construction services in Bellville</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">Team Edlick makes its construction and trade services available across Cape Town, including Bellville. We scope the property, access, quantities, finishes and trade sequence before confirming a quote.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-6">
              <Button asChild size="lg" className="font-semibold sm:min-w-[220px]"><Link href="/contact">Request a Bellville Quote</Link></Button>
              <Button asChild size="lg" variant="outline" className="font-semibold gap-2 bg-background sm:min-w-[220px]"><a href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5 shrink-0" aria-hidden />WhatsApp Us</a></Button>
            </div>
            <p className="text-sm text-muted-foreground border-l-4 border-primary/40 pl-4 text-left max-w-xl mx-auto">Bellville is served through our wider Cape Town operation. This page describes service availability and local quoting context; portfolio images below are not presented as Bellville-specific completed jobs.</p>
          </div>
        </section>

        <section className="py-14 md:py-16 border-b border-border/60">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Services available in Bellville</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">These services are available in Bellville as part of Team Edlick&apos;s Cape Town coverage. Trade-specific pricing, process and FAQs remain on the Cape Town service pages.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {constructionServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}/cape-town`} className="group rounded-lg border bg-background p-6 shadow-card hover:border-primary/45 hover:shadow-elevated transition-all text-left">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{service.name} in Bellville</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{serviceTeasers[service.slug] ?? service.summary}</p>
                  <span className="mt-4 inline-flex text-sm font-medium text-primary">View Cape Town service guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 bg-muted/50 border-b border-border/60">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Representative Cape Town project scopes</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">These images show representative Team Edlick service categories from the Cape Town portfolio. They are not labelled as completed Bellville projects.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {representativeScopes.map((item) => (
                <figure key={item.src} className="overflow-hidden rounded-lg border bg-background shadow-card">
                  <div className="relative aspect-[4/3] bg-muted"><Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
                  <figcaption className="p-4 text-sm font-medium leading-snug">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
            <p className="text-center mt-10"><Button asChild variant="outline" size="lg" className="font-semibold"><Link href="/projects">View the Cape Town portfolio</Link></Button></p>
          </div>
        </section>

        <section className="py-14 md:py-16 border-b border-border/60">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-8">
            <div className="rounded-xl border bg-background p-7 shadow-card">
              <h2 className="text-2xl font-bold mb-4">Bellville quoting context</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">Bellville sits within Cape Town&apos;s northern-suburbs corridor. Rather than applying a suburb-only flat rate, we price the actual scope and the conditions that affect labour, materials and programme length.</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2"><li>Property type and the exact areas affected</li><li>Access, parking, loading and working-hour constraints</li><li>Existing substrate condition and preparation or making-good requirements</li><li>Material specification, quantities and finish level</li><li>Whether multiple trades need to be sequenced in one programme</li></ul>
            </div>
            <div className="rounded-xl border bg-background p-7 shadow-card">
              <h2 className="text-2xl font-bold mb-4">What to send for a Bellville quote</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">A clear first brief lets us decide whether we can price from photos and dimensions or whether the site needs an inspection before the quote is finalised.</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2"><li>Bellville address or nearby area and property type</li><li>Photos or drawings of the affected spaces</li><li>Approximate dimensions or quantities where known</li><li>Preferred start window and access restrictions</li><li>Any materials, fittings or finishes already selected</li></ul>
              <p className="mt-5 text-sm text-muted-foreground">For broader regional context, see the <Link href="/locations/cape-town" className="text-primary font-medium hover:underline">Cape Town construction hub</Link>.</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 bg-muted/40 border-b border-border/60"><div className="container mx-auto px-4 max-w-5xl text-center"><h2 className="text-2xl md:text-3xl font-bold mb-8">Why use the Bellville page?</h2><p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">It gives Bellville customers one local starting point without creating duplicate Bellville versions of every trade page. The detailed service guidance stays consolidated under Cape Town until we have enough Bellville-specific project evidence to justify deeper local pages.</p></div></section>

        <section className="py-14 md:py-16 bg-primary text-primary-foreground"><div className="container mx-auto px-4 text-center max-w-2xl"><h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Request a quote for your Bellville project</h2><p className="text-lg opacity-95 mb-8 leading-relaxed">Tell us the service, property type, scope and timing. We&apos;ll confirm the next step from the Cape Town team.</p><Button asChild size="lg" variant="secondary" className="font-semibold"><Link href="/contact">Request a Quote</Link></Button></div></section>
      </main>
      <Footer />
    </div>
  );
}
