import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "drive.google.com" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      // 301 permanent redirects from old static industry pages → blog articles
      { source: "/strategy-for-small-business", destination: "/blog/social-media-strategy-for-small-business", permanent: true },
      { source: "/strategy-for-ecommerce",      destination: "/blog/social-media-strategy-for-ecommerce",      permanent: true },
      { source: "/strategy-for-b2b",            destination: "/blog/social-media-strategy-for-b2b",            permanent: true },
      { source: "/strategy-for-saas",           destination: "/blog/social-media-strategy-for-saas",           permanent: true },
      { source: "/strategy-for-coaches",        destination: "/blog/social-media-strategy-for-coaches",        permanent: true },
      { source: "/strategy-for-healthcare",     destination: "/blog/social-media-strategy-for-healthcare",     permanent: true },
      { source: "/strategy-for-realtors",       destination: "/blog/social-media-strategy-for-real-estate",    permanent: true },
      { source: "/strategy-for-lawyers",        destination: "/blog/social-media-strategy-for-law-firms",      permanent: true },
      { source: "/strategy-for-restaurants",    destination: "/blog/social-media-strategy-for-restaurants",    permanent: true },
      { source: "/strategy-for-startups",       destination: "/blog/social-media-strategy-for-startups",       permanent: true },
      { source: "/strategy-for-beauty-brands",  destination: "/blog/social-media-strategy-for-beauty-brands",  permanent: true },
      { source: "/strategy-for-nonprofit",      destination: "/blog/social-media-strategy-for-nonprofits",     permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Aggressive caching for static assets
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
