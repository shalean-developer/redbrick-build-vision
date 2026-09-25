import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /** Legacy and competing URLs permanently consolidate into their canonical replacements. */
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/locations/johannesburg",
        destination: "/locations/cape-town",
        permanent: true,
      },
      {
        source: "/services/:serviceSlug/johannesburg",
        destination: "/services/:serviceSlug",
        permanent: true,
      },
      {
        source: "/services/:serviceSlug/cape-town",
        destination: "/services/:serviceSlug",
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
