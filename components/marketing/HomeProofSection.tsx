"use client";

import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/lib/gallery";

const PREVIEW: {
  src: string;
  alt: string;
  caption: string;
  href: string;
}[] = [
  {
    src: gallery.e02,
    alt: "Tiling service image",
    caption: "Tiling in Cape Town",
    href: "/services/tiling/cape-town",
  },
  {
    src: gallery.e07,
    alt: "Renovation service image",
    caption: "Renovations in Cape Town",
    href: "/services/renovations/cape-town",
  },
  {
    src: gallery.e06,
    alt: "Waterproofing service image",
    caption: "Waterproofing & wet areas",
    href: "/services/waterproofing/cape-town",
  },
];

export function HomeProofSection() {
  return (
    <section className="py-16 md:py-20 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="mb-3">Explore Team Edlick services</h2>
          <p className="text-muted-foreground">
            Review service scope information for Cape Town, then share your site details for a structured quote. Verified
            project case studies and customer testimonials will be published separately as evidence becomes available.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PREVIEW.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-lg border bg-background overflow-hidden shadow-card hover:border-primary/40 hover:shadow-elevated transition-all"
            >
              <div className="relative aspect-[4/3] bg-muted border-b">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 text-left">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.caption}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">View service scope &amp; request a quote →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
