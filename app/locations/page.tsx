import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { canIndexLocation } from "@/lib/location-seo";
import { locationPages } from "@/lib/locations";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "/locations",
  "Construction Locations | Team Edlick Construction",
  "Team Edlick Construction focuses on Cape Town and surrounding suburbs, construction, tiling, renovations, waterproofing, and paving across the Western Cape metro.",
  {
    keywords: [
      "construction Cape Town",
      "Western Cape contractor",
      "building contractor Cape Town",
      "renovations Cape Town suburbs",
    ],
  },
);

export default function LocationsHubPage() {
  const indexableLocations = locationPages.filter((loc) => canIndexLocation(loc.city));
  const showBellville = canIndexLocation("bellville");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="mb-4">Where we build</h1>
        <p className="text-muted-foreground text-lg mb-10">
          Our location pages reflect where Team Edlick makes its services available and where we have enough local context to avoid thin, duplicated pages. Cape Town remains the main regional hub; Bellville is the first controlled suburb page.
        </p>
        <ul className="space-y-6">
          {indexableLocations.map((loc) => (
            <li key={loc.city} className="rounded-lg border bg-card p-6 shadow-card">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/locations/${loc.city}`} className="text-primary hover:underline">
                  {loc.name} construction hub
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">{loc.description}</p>
              <Button asChild variant="outline" size="sm">
                <Link href={`/locations/${loc.city}`}>View {loc.name}</Link>
              </Button>
            </li>
          ))}
          {showBellville ? (
            <li className="rounded-lg border bg-card p-6 shadow-card">
              <h2 className="text-xl font-semibold mb-2">
                <Link href="/locations/bellville" className="text-primary hover:underline">
                  Bellville construction services
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">
                One controlled suburb page for Team Edlick services available in Bellville, with local quoting context and Cape Town service guides. Portfolio images remain clearly labelled as Cape Town-wide rather than Bellville-specific proof.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/locations/bellville">View Bellville</Link>
              </Button>
            </li>
          ) : null}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
