import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    reactCompiler: false,
  },

  allowedDevOrigins: ['**.ddev.site'],

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  turbopack: {
    rules: {
      // this experimental flag is used for the nextjs-sass-loader
      // because the default loader is using the sass legacy-api, which is deprecated
      '*.module.scss': {
        loaders: ['sass-loader'],
        as: '*.module.css',
      },
      '*.scss': {
        loaders: ['sass-loader'],
        as: '*.css',
      },
    },
  },

  basePath: '',

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ddev.site',
      },
      {
        protocol: 'https',
        hostname: '**.halftime.dev',
      },
      {
        protocol: 'https',
        hostname: '**.halftime.space',
      },
    ],
  },
}

export default nextConfig
