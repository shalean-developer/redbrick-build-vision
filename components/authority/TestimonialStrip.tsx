import type { Testimonial } from "@/lib/testimonials";

export function TestimonialStrip({ items }: { items: Testimonial[] }) {
  return (
    <section className="mt-14" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="text-2xl font-bold mb-4">
        What clients emphasise
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        Replace bylines with verified names/locations when you have consent. Review structured data stays off until then.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <blockquote
            key={t.byline}
            className="rounded-xl border bg-background p-5 shadow-card text-muted-foreground leading-relaxed"
          >
            <p className="text-foreground font-medium mb-3">&ldquo;{t.quote}&rdquo;</p>
            <footer className="text-sm">
              <cite className="not-italic font-semibold text-foreground">{t.byline}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
