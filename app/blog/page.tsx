import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = buildPageMetadata(
  "/blog",
  "Cape Town Construction Cost Guides & Renovation Advice",
  "Practical Cape Town construction cost guides, renovation timelines, tiling, paving, waterproofing, painting and plumbing advice from Team Edlick.",
  {
    keywords: ["construction cost Cape Town", "renovation costs Cape Town", "tiling cost Cape Town", "paving cost Cape Town"],
  },
);

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24 max-w-3xl">
        <p className="text-sm font-medium text-primary mb-2">Cape Town construction guides</p>
        <h1 className="mb-4">Construction cost guides & practical advice</h1>
        <p className="text-muted-foreground text-lg mb-5">
          Use these guides to understand the variables that move construction and renovation quotes in Cape Town before you
          compare contractors or book a site visit.
        </p>
        <p className="text-sm text-muted-foreground mb-10">
          Looking for a contractor rather than research? Browse our <Link href="/services" className="text-primary font-medium hover:underline">construction services</Link>, the <Link href="/locations/cape-town" className="text-primary font-medium hover:underline">Cape Town service area</Link>, or <Link href="/contact" className="text-primary font-medium hover:underline">request a quote</Link>.
        </p>
        {blogPosts.length === 0 ? (
          <p className="text-muted-foreground">New articles will appear here soon.</p>
        ) : (
          <ul className="space-y-5">
            {blogPosts.map((post) => (
              <li key={post.slug} className="rounded-lg border bg-card p-5 shadow-sm">
                <Link href={`/blog/${post.slug}`} className="text-primary font-semibold text-lg hover:underline">
                  {post.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                  aria-label={`Read ${post.title}`}
                >
                  Read guide →
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}
