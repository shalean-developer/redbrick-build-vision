"use client";

import { AuthorityImage } from "@/components/authority/AuthorityImage";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  expectedBeforePath: string;
  expectedAfterPath: string;
  caption: string;
  cityLabel: string;
};

const BEFORE_FALLBACK = "/projects/placeholder-before.svg";
const AFTER_FALLBACK = "/projects/waterproofing-wet-areas-cape-town.jpg";

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  expectedBeforePath,
  expectedAfterPath,
  caption,
  cityLabel,
}: Props) {
  return (
    <section className="mt-14" aria-labelledby="before-after-heading">
      <h2 id="before-after-heading" className="text-2xl font-bold mb-2">
        Before &amp; after in {cityLabel}
      </h2>
      <p className="text-sm text-muted-foreground mb-6">{caption}</p>
      <p className="text-xs text-muted-foreground font-mono mb-4 break-all">
        Replace with: {expectedBeforePath} · {expectedAfterPath}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border bg-card">
          <div className="relative aspect-[4/3] bg-muted">
            <AuthorityImage
              src={beforeSrc}
              alt={`Before: ${caption}`}
              fallback={BEFORE_FALLBACK}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="p-3 text-center text-sm font-semibold text-muted-foreground">Before</figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border bg-card">
          <div className="relative aspect-[4/3] bg-muted">
            <AuthorityImage
              src={afterSrc}
              alt={`After: ${caption}`}
              fallback={AFTER_FALLBACK}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="p-3 text-center text-sm font-semibold text-muted-foreground">After</figcaption>
        </figure>
      </div>
    </section>
  );
}
