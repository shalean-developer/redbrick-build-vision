import Link from "next/link";
import type { ShowcaseProject } from "@/lib/authority-showcase";
import { AuthorityImage } from "@/components/authority/AuthorityImage";

const IMG_FALLBACK = "/projects/placeholder-showcase.svg";

type Props = {
  serviceSlug: string;
  citySlug: string;
  serviceLabel: string;
  cityLabel: string;
  projects: ShowcaseProject[];
};

export function ProjectShowcaseSection({
  serviceSlug,
  citySlug,
  serviceLabel,
  cityLabel,
  projects,
}: Props) {
  const selfAnchor = `/services/${serviceSlug}/${citySlug}#project-showcase-heading`;

  return (
    <section className="mt-14" aria-labelledby="project-showcase-heading">
      <h2 id="project-showcase-heading" className="text-2xl font-bold mb-2">
        Recent {serviceLabel.toLowerCase()} project documentation in {cityLabel}
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        Replace placeholders by uploading JPGs to <code className="text-xs bg-muted px-1 rounded">/public/projects/</code>{" "}
        using the filenames referenced below each frame (see <code className="text-xs bg-muted px-1 rounded">lib/authority-showcase.ts</code>
        ).
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <figure key={p.src} className="overflow-hidden rounded-xl border bg-card shadow-card">
            <div className="relative aspect-[4/3] w-full bg-muted">
              <AuthorityImage
                src={p.src}
                alt={p.alt}
                fallback={IMG_FALLBACK}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="p-4 space-y-1">
              <p className="text-sm text-foreground leading-relaxed">{p.caption}</p>
              <p className="text-xs text-muted-foreground font-mono break-all">{p.expectedPath}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link href={selfAnchor} className="font-semibold text-primary hover:underline">
          View more {serviceLabel.toLowerCase()} project frames for {cityLabel}
        </Link>
        <Link href="/projects" className="text-muted-foreground hover:text-primary hover:underline">
          Browse full portfolio →
        </Link>
      </div>
    </section>
  );
}
