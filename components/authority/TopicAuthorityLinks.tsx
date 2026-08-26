import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { getRelatedServiceSlugs, getSameServiceOtherCities, resolveService } from "@/lib/related-topics";

type Props = {
  serviceSlug: string;
  serviceName: string;
  citySlug: string;
  cityName: string;
};

const guideSlugsByService: Record<string, string[]> = {
  tiling: ["cost-of-tiling-cape-town", "tiling-mistakes-to-avoid", "bathroom-renovation-cost-south-africa"],
  renovations: ["bathroom-renovation-cost-south-africa", "how-long-does-renovation-take", "tiling-mistakes-to-avoid"],
  waterproofing: ["bathroom-renovation-cost-south-africa", "tiling-mistakes-to-avoid"],
  construction: ["how-long-does-renovation-take", "bathroom-renovation-cost-south-africa"],
  "decking-flooring": ["best-flooring-options-south-africa"],
  painting: ["painting-cost-cape-town"],
};

export function TopicAuthorityLinks({ serviceSlug, serviceName, citySlug, cityName }: Props) {
  const relatedSlugs = getRelatedServiceSlugs(serviceSlug);
  const otherCities = getSameServiceOtherCities(citySlug);
  const guideSlugs = guideSlugsByService[serviceSlug] ?? [];
  const guides = guideSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post));

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

      {guides.length > 0 ? (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Planning guides for {serviceName.toLowerCase()}
          </h3>
          <ul className="space-y-2 list-none pl-0">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link href={`/blog/${guide.slug}`} className="text-primary font-medium hover:underline">
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
