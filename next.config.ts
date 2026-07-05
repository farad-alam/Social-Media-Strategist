import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/strategy-for-:industry',
        destination: '/industry/:industry',
      },
    ];
  },
};

export default nextConfig;
