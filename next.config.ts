import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  experimental: {
    turbo: {
      rules: {
        // this experimental flag is used for the nextjs-sass-loader
        // because the default loader is using the sass legacy-api, which is deprecated
        "*.module.scss": {
          loaders: ["sass-loader"],
          as: "*.module.css",
        },
        "*.scss": {
          loaders: ["sass-loader"],
          as: "*.css",
        },
      },
    }
  },
};

export default nextConfig;
