import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "@/components/authority/BeforeAfter";
import { ProjectShowcaseSection } from "@/components/authority/ProjectShowcaseSection";
import { TestimonialStrip } from "@/components/authority/TestimonialStrip";
import { TopicAuthorityLinks } from "@/components/authority/TopicAuthorityLinks";
import { MoneyPageFaqs } from "@/components/marketing/MoneyPageFaqs";
import { ServiceLocationJsonLd } from "@/components/seo/ServiceLocationJsonLd";
import { getAuthorityShowcase } from "@/lib/authority-showcase";
import {
  comboIntroParagraphs,
  constructionServices,
  getConstructionService,
} from "@/lib/construction-services";
import { locationPages } from "@/lib/locations";
import { getMoneyPageContent } from "@/lib/service-location-content";
import { buildPageMetadata } from "@/lib/seo";
import { authorityTestimonials } from "@/lib/testimonials";

export function generateStaticParams() {
  return constructionServices.flatMap((service) =>
    locationPages.map((loc) => ({
      serviceSlug: service.slug,
      city: loc.city,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string; city: string }>;
}): Promise<Metadata> {
  const { serviceSlug, city } = await params;
  const service = getConstructionService(serviceSlug);
  const loc = locationPages.find((l) => l.city === city);
  if (!service || !loc) return {};

  const path = `/services/${service.slug}/${loc.city}`;
  const title = `${service.name} in ${loc.name} | Team Edlick Construction`;
  const description = `${service.summary} See pricing guides, local suburbs we mobilise to, process, and FAQs, request a ${service.name.toLowerCase()} quote in ${loc.name}.`;

  const kw = [
    ...service.keywords,
    `${service.name.toLowerCase()} ${loc.name}`,
    `${service.name.toLowerCase()} contractors ${loc.name}`,
    "Team Edlick",
    "South Africa",
    `cost of ${service.name.toLowerCase()} ${loc.name}`,
  ];

  return buildPageMetadata(path, title, description, { keywords: kw });
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ serviceSlug: string; city: string }>;
}) {
  const { serviceSlug, city } = await params;
  const service = getConstructionService(serviceSlug);
  const loc = locationPages.find((l) => l.city === city);
  if (!service || !loc) notFound();

  const path = `/services/${service.slug}/${loc.city}`;
  const intros = comboIntroParagraphs(service, loc.name);
  const money = getMoneyPageContent(service, loc);
  const authority = getAuthorityShowcase(service.slug, loc.city, loc.name);
  const otherServices = constructionServices.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <ServiceLocationJsonLd
        path={path}
        serviceName={service.name}
        cityName={loc.name}
        faqs={money.faqs}
      />
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2">
              <Link href={`/services/${service.slug}`} className="hover:underline">
                {service.name} services
              </Link>
              <span className="text-muted-foreground"> · </span>
              <Link href={`/locations/${loc.city}`} className="hover:underline">
                {loc.name}
              </Link>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.name} in {loc.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">{service.summary}</p>
            <p className="mb-8 rounded-md border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground leading-relaxed">
              {money.pricingHook}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Request a quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">See projects</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            {intros.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <section className="mt-14" aria-labelledby="local-signals-heading">
            <h2 id="local-signals-heading" className="text-2xl font-bold mb-4">
              Local sites &amp; climate context
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{money.localSignalsParagraph}</p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Materials &amp; systems:</strong> {money.materialsNote}
            </p>
          </section>

          <section className="mt-14" aria-labelledby="proof-heading">
            <h2 id="proof-heading" className="text-2xl font-bold mb-4">
              Recent {service.name.toLowerCase()} projects near {loc.name}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Representative mobilisation patterns, not an exhaustive project log. Photos and references supplied during
              quoting.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              {money.proofProjects.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <ProjectShowcaseSection
            serviceSlug={service.slug}
            citySlug={loc.city}
            serviceLabel={service.name}
            cityLabel={loc.name}
            projects={authority.projects}
          />

          <BeforeAfter
            beforeSrc={authority.beforeAfter.beforeSrc}
            afterSrc={authority.beforeAfter.afterSrc}
            expectedBeforePath={authority.beforeAfter.expectedBeforePath}
            expectedAfterPath={authority.beforeAfter.expectedAfterPath}
            caption={authority.beforeAfter.caption}
            cityLabel={loc.name}
          />

          <section className="mt-14 rounded-xl border bg-card p-6 shadow-card" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-2xl font-bold mb-3">
              {money.pricingHeading}
            </h2>
            <p className="text-muted-foreground mb-4">{money.pricingLead}</p>
            <p className="text-lg font-semibold text-foreground mb-3">{money.pricingRange}</p>
            <p className="text-xs text-muted-foreground">{money.pricingDisclaimer}</p>
          </section>

          <section className="mt-14" aria-labelledby="process-heading">
            <h2 id="process-heading" className="text-2xl font-bold mb-4">
              {money.processHeading}
            </h2>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-3">
              {money.processSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mt-14 rounded-lg bg-muted p-6" aria-labelledby="trust-heading">
            <h2 id="trust-heading" className="text-2xl font-bold mb-4">
              Why teams brief Team Edlick
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              {money.trustBullets.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          <TestimonialStrip items={authorityTestimonials} />

          <MoneyPageFaqs heading={`${service.name} FAQs, ${loc.name}`} items={money.faqs} />

          <div className="mt-14">
            <h2 className="text-2xl font-bold mb-4">Included scope highlights</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              {service.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12 p-6 rounded-lg bg-muted">
            <h2 className="text-xl font-bold mb-3">More services in {loc.name}</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 list-none pl-0">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/${loc.city}`} className="text-primary hover:underline text-sm font-medium">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Planning multiple trades?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Tell us the full scope on one brief
              </Link>{" "}
             , we sequence waterproofing, tiling, and finishing in the right order.
            </p>
          </div>

          <TopicAuthorityLinks
            serviceSlug={service.slug}
            serviceName={service.name}
            citySlug={loc.city}
            cityName={loc.name}
          />

          <p className="mt-10 text-muted-foreground">
            Hub:{" "}
            <Link href={`/locations/${loc.city}`} className="text-primary hover:underline">
              Construction overview for {loc.name}
            </Link>
            {" · "}
            <Link href="/blog" className="text-primary hover:underline">
              Guides &amp; updates
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
