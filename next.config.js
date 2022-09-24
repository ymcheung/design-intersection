/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  images: {
    domains: ['cdn.sanity.io']
  },
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
