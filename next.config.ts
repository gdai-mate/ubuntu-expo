import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment the line below if deploying to GitHub Pages project (not custom domain)
  // basePath: '/ubuntu-expo',
};

export default nextConfig;
