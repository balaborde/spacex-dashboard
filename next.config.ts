import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
      },
      {
        protocol: "https",
        hostname: "*.imgur.com",
      },
      {
        protocol: "https",
        hostname: "*.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "photos.marinetraffic.com",
      },
      {
        protocol: "https",
        hostname: "images2.imgbox.com",
      },
    ],
  },
};

export default nextConfig;
