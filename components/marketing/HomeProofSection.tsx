"use client";

import Image from "next/image";
import Link from "next/link";
import { CLIENT_AFTER_PROOF } from "@/lib/authority-showcase";
import { gallery } from "@/lib/gallery";
import { authorityTestimonials } from "@/lib/testimonials";

const PREVIEW: {
  src: string;
  alt: string;
  caption: string;
  href: string;
}[] = [
  {
    src: gallery.e20,
    alt: "Commercial floor tiling work in progress",
    caption: "Tiling in Cape Town",
    href: "/services/tiling/cape-town",
  },
  {
    src: gallery.e21,
    alt: "Brick construction and renovation site with crew",
    caption: "Renovations in Cape Town",
    href: "/services/renovations/cape-town",
  },
  {
    src: CLIENT_AFTER_PROOF,
    alt: "Waterproofing and wet-area membrane work on a Cape Town site",
    caption: "Waterproofing & wet areas",
    href: "/services/waterproofing/cape-town",
  },
];

export function HomeProofSection() {
  const featured = authorityTestimonials[0];

  return (
    <section className="py-16 md:py-20 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="mb-3">Recent work in your area</h2>
          <p className="text-muted-foreground">
            Cape Town metro, tap through to local service pages or see the full gallery on{" "}
            <Link href="/projects" className="text-primary font-medium hover:underline">
              projects
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
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
                  unoptimized={item.src.endsWith(".svg")}
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 text-left">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.caption}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">View scope &amp; request a quote →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-xl mx-auto text-center rounded-lg border bg-muted/40 p-6 md:p-8">
          <blockquote className="text-foreground leading-relaxed italic">&ldquo;{featured.quote}&rdquo;</blockquote>
          <p className="mt-3 text-sm text-muted-foreground">{featured.byline}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            More client themes: coordination, quoting clarity, and short snag lists, {" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              share your scope for a structured quote
            </Link>
            .
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto list-none p-0 m-0">
          {authorityTestimonials.slice(1).map((t) => (
            <li key={t.byline} className="rounded-lg border bg-background p-5 text-left text-sm">
              <blockquote className="text-foreground mb-2">&ldquo;{t.quote}&rdquo;</blockquote>
              <cite className="not-italic text-muted-foreground">{t.byline}</cite>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
