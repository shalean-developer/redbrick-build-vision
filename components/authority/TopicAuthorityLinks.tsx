import Link from "next/link";
import { getRelatedServiceSlugs, getSameServiceOtherCities, resolveService } from "@/lib/related-topics";

type Props = {
  serviceSlug: string;
  serviceName: string;
  citySlug: string;
  cityName: string;
};

export function TopicAuthorityLinks({ serviceSlug, serviceName, citySlug, cityName }: Props) {
  const relatedSlugs = getRelatedServiceSlugs(serviceSlug);
  const otherCities = getSameServiceOtherCities(citySlug);

  return (
    <section className="mt-14 rounded-xl border bg-muted/40 p-6" aria-labelledby="topic-links-heading">
      <h2 id="topic-links-heading" className="text-xl font-bold mb-4">
        Explore related scopes
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Related services in {cityName}
          </h3>
          <ul className="space-y-2 list-none pl-0">
            {relatedSlugs.map((slug) => {
              const svc = resolveService(slug);
              if (!svc) return null;
              return (
                <li key={slug}>
                  <Link href={`/services/${slug}/${citySlug}`} className="text-primary font-medium hover:underline">
                    {svc.name} in {cityName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {otherCities.length > 0 ? (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              {serviceName} in other cities
            </h3>
            <ul className="space-y-2 list-none pl-0">
              {otherCities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/services/${serviceSlug}/${c.slug}`} className="text-primary font-medium hover:underline">
                    {serviceName} in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Cape Town service hub
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              We focus on the Cape Town metro. Use the location hub for suburbs, climate context, and how we mobilise
              crews.
            </p>
            <Link href="/locations/cape-town" className="text-primary font-medium hover:underline">
              Construction &amp; renovations: Cape Town hub →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
