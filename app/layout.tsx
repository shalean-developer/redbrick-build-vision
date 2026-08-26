import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "@/components/json-ld";
import { Providers } from "./providers";
import "./globals.css";
import {
  defaultDescription,
  defaultOgImagePath,
  siteName,
  siteOrigin,
} from "@/lib/site";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1e1e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  applicationName: siteName,
  title: {
    default: `${siteName} | Cape Town Construction`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "construction Cape Town",
    "Western Cape contractor",
    "tiling Cape Town",
    "renovations Cape Town",
    "waterproofing Cape Town",
    "paving Cape Town",
    "decking Cape Town",
    "building contractor Cape Town",
  ],
  authors: [{ name: siteName, url: siteOrigin }],
  creator: siteName,
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "512x512", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: `${siteName} | Cape Town Construction`,
    description: defaultDescription,
    url: siteOrigin,
    siteName,
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: defaultOgImagePath,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@teamedlick",
    title: `${siteName} | Cape Town Construction`,
    description: defaultDescription,
    images: [defaultOgImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-[calc(4.5rem+env(safe-area-inset-bottom))]">
        <JsonLd />
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
