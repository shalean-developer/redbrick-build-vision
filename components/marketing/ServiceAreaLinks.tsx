import Link from "next/link";
import { getConstructionService } from "@/lib/construction-services";
import { locationPages } from "@/lib/locations";

/** High-intent service × Cape Town combinations for homepage internal linking. */
const spotlight: { serviceSlug: string; city: string }[] = [
  { serviceSlug: "tiling", city: "cape-town" },
  { serviceSlug: "renovations", city: "cape-town" },
  { serviceSlug: "paving", city: "cape-town" },
  { serviceSlug: "waterproofing", city: "cape-town" },
  { serviceSlug: "plumbing", city: "cape-town" },
  { serviceSlug: "construction", city: "cape-town" },
  { serviceSlug: "painting", city: "cape-town" },
  { serviceSlug: "decking-flooring", city: "cape-town" },
];

export function ServiceAreaLinks() {
  const cityName = (slug: string) => locationPages.find((l) => l.city === slug)?.name ?? slug;

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="mb-4">Popular services in your area</h2>
          <p className="text-lg text-muted-foreground">
            Cape Town metro landing pages for construction, tiling, renovations, and more, built for local search intent,
            suburbs we reference in quotes, and clear scoping.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {spotlight.map(({ serviceSlug, city }) => {
            const svc = getConstructionService(serviceSlug);
            if (!svc) return null;
            const href = `/services/${serviceSlug}/${city}`;
            const cityLabel = cityName(city);
            const label = `${svc.name} services in ${cityLabel}`;
            return (
              <Link
                key={href}
                href={href}
                className="block rounded-lg border bg-background p-4 shadow-card hover:border-primary/40 hover:shadow-elevated transition-all text-left"
              >
                <span className="font-semibold text-foreground">{label}</span>
                <span className="mt-2 block text-sm text-muted-foreground">View scope & request a quote →</span>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-10 space-x-6 text-sm">
          <Link href="/services" className="text-primary font-medium hover:underline">
            All services
          </Link>
          <Link href="/locations/cape-town" className="text-primary font-medium hover:underline">
            Construction services in Cape Town
          </Link>
          <Link href="/locations" className="text-primary font-medium hover:underline">
            Locations
          </Link>
        </div>
      </div>
    </section>
  );
}
