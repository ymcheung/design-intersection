/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  images: {
    domains: ['cdn.sanity.io']
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source:
          '/%E4%BD%BF%E7%94%A8%E8%80%85%E4%BB%8B%E9%9D%A2%E7%9A%84%E8%A6%96%E8%A6%BA%E6%95%88%E6%87%89-%E7%B5%A6%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%8B%82%E7%86%B1%E4%BB%BD%E5%AD%90-54ee84d365de',
        destination: '/54ee84d365de',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
