/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/frontend-challenge",
  output: "export",  // enables static exports
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