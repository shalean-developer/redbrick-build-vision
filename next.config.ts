import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    qualities: [60, 75],
  },

  /** Johannesburg money URLs preserved, 301 to Cape Town hubs (SEO equity consolidation). */
  async redirects() {
    return [
      {
        source: "/locations/johannesburg",
        destination: "/locations/cape-town",
        permanent: true,
      },
      {
        source: "/services/:serviceSlug/johannesburg",
        destination: "/services/:serviceSlug/cape-town",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
