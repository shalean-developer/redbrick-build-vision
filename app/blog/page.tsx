import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = buildPageMetadata(
  "/blog",
  "Construction Insights & Updates",
  "Articles on construction, renovations, and projects from Team Edlick Construction in South Africa.",
  {
    keywords: ["construction blog South Africa", "renovation tips", "building contractor news"],
  },
);

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="mb-4">Blog</h1>
        <p className="text-muted-foreground mb-10">
          Cost guides, renovation timelines, and specification pitfalls, each article links through to local service hubs and
          contact.
        </p>
        {blogPosts.length === 0 ? (
          <p className="text-muted-foreground">New articles will appear here soon.</p>
        ) : (
          <ul className="space-y-4">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:underline">
                  {post.title}
                </Link>
                <p className="text-sm text-muted-foreground">{post.description}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}
