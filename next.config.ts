import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/piwi.github.io' : '',
  assetPrefix: isProd ? 'https://lemophile.github.io/piwi.github.io/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
