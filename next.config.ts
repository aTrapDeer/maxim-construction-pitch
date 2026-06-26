import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/quote",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/start-project",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
