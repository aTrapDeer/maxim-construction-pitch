import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/start-project",
        destination: "/quote",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
