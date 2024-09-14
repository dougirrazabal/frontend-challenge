/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/frontend-challenge",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "http2.mlstatic.com",
      }
    ],
  },
};

module.exports = nextConfig;