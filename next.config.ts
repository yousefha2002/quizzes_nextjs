import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/512/149/149071.png',
      },
      {
        protocol: 'https',
        hostname: 'www.globalcareercounsellor.com',
        pathname: '/blog/wp-content/uploads/**',
      },
    ],
    domains: ['localhost']
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  }
};

export default nextConfig;
