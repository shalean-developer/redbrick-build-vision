import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export function BlogInlineCta({ title, description, href, linkLabel }: Props) {
  return (
    <aside className="my-8 rounded-lg border border-primary/20 bg-muted/60 p-5 not-prose">
      <p className="font-semibold text-foreground mb-1">{title}</p>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Link href={href} className="text-sm font-semibold text-primary hover:underline">
        {linkLabel} →
      </Link>
    </aside>
  );
}
