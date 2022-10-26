/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ss3.4sqi.net", "fastly.4sqi.net"],
  },
  i18n,
};

module.exports = nextConfig;
