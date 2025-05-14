/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/flight",
  experimental: {
    staleTimes: {
      dynamic: 1000,
      static: 1000,
    },
  },
};

export default nextConfig;
