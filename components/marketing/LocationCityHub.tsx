import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ConstructionService } from "@/lib/construction-services";
import type { LocationPage } from "@/lib/locations";
import { whatsappQuoteUrl } from "@/lib/contact";

/** Short lines for service × city cards (local SEO intent). */
const teaserBySlug: Partial<Record<string, string>> = {
  construction: "Structural builds, extensions, and coordinated finishes.",
  tiling: "Bathroom, kitchen & floor tiling.",
  painting: "Interior and exterior painting.",
  "decking-flooring": "Decks and interior flooring installs.",
  paving: "Driveways, walkways, and outdoor paving.",
  waterproofing: "Leak protection and moisture control.",
  renovations: "Full home and commercial upgrades.",
  plumbing: "Installations, repairs, and leak investigations.",
};

const proofForCity: Record<
  string,
  { src: string; alt: string; caption: string }[]
> = {
  "cape-town": [
    {
      src: "/assets/service-tiling.png",
      alt: "Recent bathroom and floor tiling work in Claremont, Cape Town",
      caption: "Tiling — Claremont & southern suburbs",
    },
    {
      src: "/assets/service-renovations.png",
      alt: "Renovation programme on a residential property in Sea Point, Cape Town",
      caption: "Renovations — Atlantic Seaboard corridor",
    },
    {
      src: "/assets/service-paving.png",
      alt: "Outdoor paving and driveway work in Bellville, Cape Town",
      caption: "Paving — northern suburbs & Bellville",
    },
  ],
};

function defaultProofRows(locName: string): { src: string; alt: string; caption: string }[] {
  return [
    {
      src: "/assets/service-construction.png",
      alt: `Structural and finishing work by Team Edlick in ${locName}`,
      caption: `Construction & coordinated trades — ${locName}`,
    },
    {
      src: "/assets/service-renovations.png",
      alt: `Renovation scope in progress — ${locName}`,
      caption: `Renovations — ${locName}`,
    },
    {
      src: "/assets/service-painting.png",
      alt: `Painting and coatings programme — ${locName}`,
      caption: `Painting & coatings — ${locName}`,
    },
  ];
}

function formatSuburbList(suburbs: string[]) {
  if (suburbs.length === 0) return "";
  if (suburbs.length <= 2) return suburbs.join(" and ");
  return `${suburbs.slice(0, -1).join(", ")}, and ${suburbs[suburbs.length - 1]}`;
}

function trustStripSuburbs(suburbs: string[], max = 5) {
  const head = suburbs.slice(0, max);
  const extra = suburbs.length > max ? " & more" : "";
  return `${head.join(", ")}${extra}`;
}

type Props = {
  loc: LocationPage;
  services: ConstructionService[];
};

export function LocationCityHub({ loc, services }: Props) {
  const proof = proofForCity[loc.city] ?? defaultProofRows(loc.name);
  const suburbParagraph = formatSuburbList(loc.focusSuburbs);

  return (
    <main className="flex-grow pb-16">
      <section className="relative border-b border-border/60 bg-gradient-to-b from-primary/12 via-background to-background pt-[5.25rem] lg:pt-24">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3">
            <Link href="/locations" className="hover:underline">
              Locations
            </Link>
            <span className="text-muted-foreground"> · </span>
            <span className="text-muted-foreground">{loc.name}</span>
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4">
            Construction services in {loc.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Reliable contractors for tiling, renovations, paving, waterproofing, painting, and more. We deliver
            high-quality programmes across {loc.name} and surrounding suburbs with clear quotes and coordinated trades.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-6">
            <Button asChild size="lg" className="font-semibold sm:min-w-[220px]">
              <Link href="/contact">Get a Quote in 24 Hours</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold gap-2 bg-background sm:min-w-[220px]">
              <a href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                WhatsApp Us
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground border-l-4 border-primary/40 pl-4 text-left max-w-xl mx-auto">
            Serving {trustStripSuburbs(loc.focusSuburbs)}
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 border-b border-border/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Our services in {loc.name}</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Every card opens a local money page with suburbs, pricing context, and FAQs for that trade in {loc.name}.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/${loc.city}`}
                className="group rounded-lg border bg-background p-6 shadow-card hover:border-primary/45 hover:shadow-elevated transition-all text-left"
              >
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {s.name} in {loc.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {teaserBySlug[s.slug] ?? `${s.summary.split(".")[0]}.`}
                </p>
                <span className="mt-4 inline-flex text-sm font-medium text-primary">
                  View local page →
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link href="/services" className="text-primary font-semibold hover:underline">
              Browse all construction services
            </Link>
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-muted/50 border-b border-border/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Recent projects in {loc.name}</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Representative Cape Town metro scopes. See the full portfolio or open a service hub for more proof.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {proof.map((item) => (
              <figure
                key={item.src + item.caption}
                className="overflow-hidden rounded-lg border bg-background shadow-card"
              >
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="p-4 text-sm font-medium leading-snug">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="font-semibold">
              <Link href="/projects">View all projects</Link>
            </Button>
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 border-b border-border/60">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Areas we cover in {loc.name}</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We provide construction services across {loc.name} and nearby corridors, including:
          </p>
          <p className="text-foreground leading-relaxed font-medium">{suburbParagraph}, and surrounding areas.</p>
          <p className="mt-6 text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-4">
            {loc.regionalBuildNote}
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-muted/40 border-b border-border/60">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Why choose Team Edlick in {loc.name}</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-foreground list-none m-0 p-0">
            {[
              "Local mobilisation patterns crews know",
              "Programmes with realistic sequencing",
              "Quality workmanship and snag-led handover",
              "Transparent quotes with assumptions spelled out",
            ].map((line) => (
              <li key={line} className="rounded-lg border bg-background px-4 py-3 shadow-sm">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            Get a quote for your project in {loc.name}
          </h2>
          <p className="text-lg opacity-95 mb-8 leading-relaxed">
            Tell us what you need and we&apos;ll respond within 24 hours with next steps.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
