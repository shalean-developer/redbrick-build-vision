import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ServiceHubView } from "@/components/services/ServiceHubView";
import { ServiceHubJsonLd } from "@/components/seo/ServiceHubJsonLd";
import {
  type ConstructionService,
  constructionServices,
  getConstructionService,
} from "@/lib/construction-services";
import { getRelatedServiceSlugs, resolveService } from "@/lib/related-topics";
import {
  getHubCapeTown,
  getHubExpanded,
  getHubProcessSteps,
  getHubProof,
} from "@/lib/service-hub";
import { isVerifiedProjectImage } from "@/lib/project-evidence";
import { getMoneyPageContent } from "@/lib/service-location-content";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return constructionServices.map((s) => ({ serviceSlug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getConstructionService(serviceSlug);
  if (!service) return {};

  const path = `/services/${service.slug}`;

  const title =
    service.slug === "tiling"
      ? "Tiling Services Cape Town | Team Edlick"
      : `${service.name} Services in Cape Town | Team Edlick Construction`;
  const description =
    service.slug === "tiling"
      ? "Professional tiling services in Cape Town. Bathroom, kitchen, and floor tiling with waterproofing and precision finishes."
      : `${service.summary} Request a quote for ${service.name.toLowerCase()} across Cape Town suburbs: pricing guides, process, and your ${service.name.toLowerCase()} in Cape Town hub.`;

  return buildPageMetadata(path, title, description, {
    keywords: [
      ...service.keywords,
      `${service.name.toLowerCase()} Cape Town`,
      `${service.name.toLowerCase()} contractors Cape Town`,
      "Team Edlick",
    ],
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await params;
  const service = getConstructionService(serviceSlug);
  if (!service) notFound();

  const capeTown = getHubCapeTown();
  const money = getMoneyPageContent(service, capeTown);
  const hub = getHubExpanded(service);
  const proof = getHubProof(service.slug).filter((item) => isVerifiedProjectImage(item.src));
  const relatedSlugs = getRelatedServiceSlugs(service.slug);
  const related: ConstructionService[] = relatedSlugs
    .map((slug) => resolveService(slug))
    .filter((s): s is ConstructionService => s != null);

  const path = `/services/${service.slug}`;

  return (
    <div className="min-h-screen flex flex-col">
      <ServiceHubJsonLd
        path={path}
        serviceName={service.name}
        description={`${hub.valueProp} ${service.summary}`}
      />
      <Navbar />
      <ServiceHubView
        service={service}
        money={money}
        hub={hub}
        proof={proof}
        processSteps={getHubProcessSteps(service.slug)}
        testimonials={[]}
        related={related}
        capeTownSlug={capeTown.city}
        suburbs={capeTown.focusSuburbs}
      />
      <Footer />
    </div>
  );
}
