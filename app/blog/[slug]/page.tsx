import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { PaintingCostCapeTownBody } from "@/components/blog/PaintingCostCapeTownBody";
import { PavingCostCapeTownBody } from "@/components/blog/PavingCostCapeTownBody";
import { PlumbingCostCapeTownBody } from "@/components/blog/PlumbingCostCapeTownBody";
import { WaterproofingCostCapeTownBody } from "@/components/blog/WaterproofingCostCapeTownBody";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog";
import { buildPageMetadata, getSocialImagePath } from "@/lib/seo";
import { siteName, siteOrigin } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildPageMetadata(`/blog/${slug}`, post.title, post.description, {
    keywords: [
      "Team Edlick",
      "construction",
      "South Africa",
      "tiling",
      "renovations",
      "Cape Town",
      "Western Cape",
    ],
  });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articlePath = `/blog/${post.slug}`;
  const articleUrl = `${siteOrigin}${articlePath}`;
  const articleImage = `${siteOrigin}${getSocialImagePath(articlePath)}`;
  const organizationId = `${siteOrigin}/#organization`;
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    image: articleImage,
    author: {
      "@type": "Organization",
      "@id": organizationId,
      name: siteName,
      url: siteOrigin,
    },
    publisher: {
      "@type": "Organization",
      "@id": organizationId,
      name: siteName,
      url: siteOrigin,
      logo: {
        "@type": "ImageObject",
        url: `${siteOrigin}/brand/teamedlick-logo.png`,
      },
    },
  };

  const body =
    slug === "painting-cost-cape-town" ? (
      <PaintingCostCapeTownBody />
    ) : slug === "paving-cost-per-square-metre-cape-town" ? (
      <PavingCostCapeTownBody />
    ) : slug === "plumbing-cost-cape-town" ? (
      <PlumbingCostCapeTownBody />
    ) : slug === "waterproofing-cost-cape-town" ? (
      <WaterproofingCostCapeTownBody />
    ) : (
      <BlogArticleBody slug={slug} />
    );

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <Navbar />
      <article className="flex-grow container mx-auto px-4 py-24 max-w-3xl">
        <p className="text-sm font-medium text-primary mb-2">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </p>
        <h1 className="mb-4">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">By {siteName}</p>
        <p className="text-muted-foreground text-lg mb-10">{post.description}</p>
        {body}
        <div className="mt-14 rounded-xl border bg-muted/50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">Ready for numbers on your site?</p>
            <p className="text-sm text-muted-foreground">We&apos;ll align trades and programme on one brief.</p>
          </div>
          <Button asChild>
            <Link href="/contact">Request a quote</Link>
          </Button>
        </div>
      </article>
      <Footer />
    </div>
  );
}
