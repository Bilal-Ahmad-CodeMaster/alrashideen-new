import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "ebackend.s3.eu-north-1.amazonaws.com",
      }, {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.alrashideenengg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
