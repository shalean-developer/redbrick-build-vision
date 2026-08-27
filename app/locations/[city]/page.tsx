import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LocationCityHub } from "@/components/marketing/LocationCityHub";
import { constructionServices } from "@/lib/construction-services";
import { canIndexLocation } from "@/lib/location-seo";
import { locationPages } from "@/lib/locations";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locationPages.filter((loc) => canIndexLocation(loc.city)).map((loc) => ({ city: loc.city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = locationPages.find((l) => l.city === city);
  if (!loc || !canIndexLocation(city)) return {};

  if (city === "cape-town") {
    return buildPageMetadata(
      `/locations/${city}`,
      "Construction Services Cape Town | Team Edlick",
      "Professional construction, tiling, and renovation services across Cape Town. Trusted contractors for residential and commercial projects with Western Cape programmes you can plan around.",
      {
        keywords: [
          "construction services Cape Town",
          "contractors Cape Town",
          "tiling Cape Town",
          "renovations Cape Town",
          "waterproofing Cape Town",
          "paving Cape Town",
        ],
      },
    );
  }

  return buildPageMetadata(`/locations/${city}`, `${loc.name} | Team Edlick Construction`, loc.description, {
    keywords: ["construction", loc.name, "South Africa", "contractor", "renovations"],
  });
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = locationPages.find((l) => l.city === city);
  if (!loc || !canIndexLocation(city)) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <LocationCityHub loc={loc} services={constructionServices} />
      <Footer />
    </div>
  );
}
