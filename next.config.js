/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ss3.4sqi.net", "fastly.4sqi.net"],
  },
};

module.exports = nextConfig;
