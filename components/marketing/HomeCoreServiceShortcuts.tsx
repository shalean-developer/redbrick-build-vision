import Link from "next/link";

const SHORTCUTS: { href: string; title: string; blurb: string }[] = [
  {
    href: "/services/tiling",
    title: "Tiling services",
    blurb: "Bathrooms, kitchens, floors, and outdoor layouts, precision installs with wet-area discipline.",
  },
  {
    href: "/services/renovations",
    title: "Renovations",
    blurb: "Partial and full refits with sequencing that keeps your home or tenancy workable.",
  },
  {
    href: "/services/waterproofing",
    title: "Waterproofing",
    blurb: "Slabs, balconies, and wet areas detailed before finishes close in.",
  },
  {
    href: "/services/construction",
    title: "Construction",
    blurb: "New builds, shells, and commercial or residential delivery to handover standards.",
  },
  {
    href: "/services/paving",
    title: "Paving",
    blurb: "Driveways, forecourts, and outdoor circulation with correct falls and restraints.",
  },
  {
    href: "/services/painting",
    title: "Painting",
    blurb: "Interior and exterior coating systems with prep and access planned into the programme.",
  },
];

export function HomeCoreServiceShortcuts() {
  return (
    <div className="mb-12">
      <p className="text-center text-sm font-medium text-muted-foreground mb-4">Jump to a service hub</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {SHORTCUTS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="block rounded-lg border bg-background p-5 text-left shadow-sm hover:border-primary/40 hover:shadow-card transition-all"
          >
            <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-snug">{s.blurb}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
