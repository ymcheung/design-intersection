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
          '/%E6%88%91%E6%BC%B8%E6%BC%B8%E4%B8%8D%E4%BF%A1%E4%BB%BB-ux-%E7%9A%84%E5%8E%9F%E5%9B%A0-c9ea15dd2ca7',
        destination: '/c9ea15dd2ca7',
        permanent: true
      },
      {
        source:
          '/all-design-projects-should-start-in-a-google-doc-c0139a21fe37',
        destination: '/c0139a21fe37',
        permanent: true
      },
      {
        source: '/modal-ux-6e9b2104eac0',
        destination: '/6e9b2104eac0',
        permanent: true
      },
      {
        source:
          '/10-%E5%80%8B%E6%88%91%E5%80%91%E9%82%84%E5%9C%A8%E7%8A%AF%E7%9A%84%E8%A8%AD%E8%A8%88%E5%B0%8F%E9%8C%AF%E8%AA%A4-7b39407b7c6e',
        destination: '/7b39407b7c6e',
        permanent: true
      },
      {
        source:
          '/%E6%8E%A2%E7%B4%A2%E7%8F%BE%E5%AF%A6%E7%94%9F%E6%B4%BB%E4%B8%AD%E7%9A%84%E8%A6%96%E8%A6%BA%E6%8C%87%E7%A4%BA-b2a227b43f5d',
        destination: 'https://medium.com/intersection-translation/b2a227b43f5d',
        permanent: true
      },
      {
        source:
          '/%E6%8E%A2%E7%B4%A2%E7%8F%BE%E5%AF%A6%E7%94%9F%E6%B4%BB%E4%B8%AD%E7%9A%84%E8%A6%96%E8%A6%BA%E6%8C%87%E7%A4%BA-b2a227b43f5d',
        destination: 'https://medium.com/intersection-translation/b2a227b43f5d',
        permanent: false
      },
      {
        source:
          '/%E4%BD%BF%E7%94%A8%E8%80%85%E4%BB%8B%E9%9D%A2%E7%9A%84%E8%A6%96%E8%A6%BA%E6%95%88%E6%87%89-%E7%B5%A6%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%8B%82%E7%86%B1%E4%BB%BD%E5%AD%90-54ee84d365de',
        destination: '/54ee84d365de',
        permanent: true
      },
      {
        source:
          '/%E7%95%B6%E6%88%91%E5%80%91%E5%9C%A8%E8%AB%87-%E7%94%A2%E5%93%81%E6%84%9F%E8%A6%BA-%E6%99%82-%E6%98%AF%E4%BB%80%E9%BA%BC%E6%84%8F%E6%80%9D-b398a04e0d3a',
        destination:
          'https://medium.com/intersection-translation/%E7%95%B6%E6%88%91%E5%80%91%E5%9C%A8%E8%AB%87-%E7%94%A2%E5%93%81%E6%84%9F%E8%A6%BA-%E6%99%82-%E6%98%AF%E4%BB%80%E9%BA%BC%E6%84%8F%E6%80%9D-b398a04e0d3a',
        permanent: false
      },
      {
        source:
          '/%E5%88%A9%E7%94%A8%E5%8B%95%E7%95%AB%E5%89%B5%E9%80%A0%E6%98%93%E7%94%A8%E6%80%A7-%E5%8B%95%E7%95%AB%E7%9A%84-ux-%E5%AE%A3%E8%A8%80-20b6c6475682',
        destination: '/20b6c6475682',
        permanent: true
      },
      {
        source:
          '/%E5%9C%98%E9%9A%8A%E8%A3%A1%E6%96%B0%E8%A8%AD%E8%A8%88%E5%B8%AB%E6%88%90%E5%93%A1%E8%A6%81%E5%95%8F%E7%9A%84%E5%95%8F%E9%A1%8C-1c739906589b',
        destination:
          'https://medium.com/intersection-translation/%E5%9C%98%E9%9A%8A%E8%A3%A1%E6%96%B0%E8%A8%AD%E8%A8%88%E5%B8%AB%E6%88%90%E5%93%A1%E8%A6%81%E5%95%8F%E7%9A%84%E5%95%8F%E9%A1%8C-1c739906589b',
        permanent: false
      },
      {
        source:
          '/%E8%A6%81%E6%9C%89%E7%B2%BE%E9%80%9A%E8%A8%AD%E8%A8%88%E7%9A%84%E8%83%BD%E5%8A%9B-%E5%BF%85%E9%A0%88%E5%85%88%E7%86%9F%E7%B7%B4%E5%9F%BA%E7%A4%8E-6e8cbf632c37',
        destination:
          'https://medium.com/intersection-translation/%E8%A6%81%E6%9C%89%E7%B2%BE%E9%80%9A%E8%A8%AD%E8%A8%88%E7%9A%84%E8%83%BD%E5%8A%9B-%E5%BF%85%E9%A0%88%E5%85%88%E7%86%9F%E7%B7%B4%E5%9F%BA%E7%A4%8E-6e8cbf632c37',
        permanent: false
      },
      {
        source:
          '/%E8%A8%AD%E8%A8%88%E5%B8%AB%E8%B7%9F%E7%94%A2%E5%93%81%E7%B6%93%E7%90%86%E7%9A%84%E5%90%88%E4%BD%9C%E6%8C%87%E5%8D%97-8518f04448e6',
        destination:
          'https://medium.com/intersection-translation/%E8%A8%AD%E8%A8%88%E5%B8%AB%E8%B7%9F%E7%94%A2%E5%93%81%E7%B6%93%E7%90%86%E7%9A%84%E5%90%88%E4%BD%9C%E6%8C%87%E5%8D%97-8518f04448e6',
        permanent: false
      },
      {
        source:
          '/%E8%A8%AD%E8%A8%88%E5%B8%AB%E5%B0%8D-svg-%E6%87%89%E8%A9%B2%E6%9C%89%E7%9A%84%E8%A7%80%E5%BF%B5-38ba64b48b32',
        destination: '/38ba64b48b32',
        permanent: true
      },
      {
        source:
          '/%E5%BE%9E%E9%AD%94%E6%B3%95%E7%8E%8B%E5%9C%8B%E5%A0%B4%E6%89%80%E7%87%9F%E9%80%A0%E5%AD%B8%E5%88%B0%E7%9A%84%E4%B8%89%E5%A0%82%E8%AA%B2-8c0829baacba',
        destination: '/8c0829baacba',
        permanent: true
      },
      {
        source:
          '/%E5%99%93-%E5%88%A5%E8%B7%9F%E4%BB%96%E5%80%91%E8%AA%AA%E8%A8%AD%E8%A8%88%E6%80%9D%E8%80%83%E4%B8%8D%E6%98%AF%E9%AD%94%E6%B3%95-ce86469dda59',
        destination:
          'https://medium.com/intersection-translation/%E5%99%93-%E5%88%A5%E8%B7%9F%E4%BB%96%E5%80%91%E8%AA%AA%E8%A8%AD%E8%A8%88%E6%80%9D%E8%80%83%E4%B8%8D%E6%98%AF%E9%AD%94%E6%B3%95-ce86469dda59',
        permanent: false
      },
      {
        source:
          '/%E6%89%93%E9%80%A0%E6%8F%92%E5%9C%96%E9%A2%A8%E6%A0%BC%E6%8C%87%E5%8D%97-4d517aaa52d1',
        destination:
          'https://medium.com/intersection-translation/%E6%89%93%E9%80%A0%E6%8F%92%E5%9C%96%E9%A2%A8%E6%A0%BC%E6%8C%87%E5%8D%97-4d517aaa52d1',
        permanent: false
      },
      {
        source:
          '/%E8%89%B2%E5%BD%A9%E7%9A%84%E5%BD%B1%E9%9F%BF%E5%8A%9B-eca816e8e014',
        destination:
          'https://medium.com/intersection-translation/%E8%89%B2%E5%BD%A9%E7%9A%84%E5%BD%B1%E9%9F%BF%E5%8A%9B-eca816e8e014',
        permanent: false
      },
      {
        source:
          '/%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E6%B2%92%E6%9C%89%E8%AE%8A%E5%BE%97%E6%9B%B4%E7%84%A1%E8%B6%A3-%E4%B9%9F%E6%B2%92%E6%9C%89%E5%A4%B1%E5%8E%BB%E9%9D%88%E9%AD%82-44eac3686ea7',
        destination:
          'https://medium.com/intersection-translation/%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E6%B2%92%E6%9C%89%E8%AE%8A%E5%BE%97%E6%9B%B4%E7%84%A1%E8%B6%A3-%E4%B9%9F%E6%B2%92%E6%9C%89%E5%A4%B1%E5%8E%BB%E9%9D%88%E9%AD%82-44eac3686ea7',
        permanent: false
      },
      {
        source:
          '/%E6%98%93%E7%94%A8%E6%80%A7%E6%B8%AC%E8%A9%A6%E6%B5%81%E7%A8%8B%E7%9A%84%E5%BC%B7%E5%8A%9B%E4%BF%AE%E6%AD%A3-955d99420fd9',
        destination:
          'https://medium.com/intersection-translation/%E6%98%93%E7%94%A8%E6%80%A7%E6%B8%AC%E8%A9%A6%E6%B5%81%E7%A8%8B%E7%9A%84%E5%BC%B7%E5%8A%9B%E4%BF%AE%E6%AD%A3-955d99420fd9',
        permanent: false
      },
      {
        source:
          '/%E6%8E%A5%E6%A1%88%E5%B7%A5%E4%BD%9C%E4%B8%80%E5%B9%B4%E5%BE%8C-7-%E5%80%8B%E5%B0%8D%E6%88%91%E5%BE%88%E6%9C%89%E5%B9%AB%E5%8A%A9%E7%9A%84%E5%B0%8F%E7%A7%98%E8%A8%A3-32c3b9784dd6',
        destination:
          'https://medium.com/intersection-translation/%E6%8E%A5%E6%A1%88%E5%B7%A5%E4%BD%9C%E4%B8%80%E5%B9%B4%E5%BE%8C-7-%E5%80%8B%E5%B0%8D%E6%88%91%E5%BE%88%E6%9C%89%E5%B9%AB%E5%8A%A9%E7%9A%84%E5%B0%8F%E7%A7%98%E8%A8%A3-32c3b9784dd6',
        permanent: false
      },
      {
        source:
          '/%E5%AD%B8%E7%BF%92%E4%BD%BF%E7%94%A8%E8%80%85%E7%B6%93%E9%A9%97%E7%9A%84-ux-%E5%A3%9E%E4%BA%86-b3fae12e97bb',
        destination:
          'https://medium.com/intersection-translation/%E5%AD%B8%E7%BF%92%E4%BD%BF%E7%94%A8%E8%80%85%E7%B6%93%E9%A9%97%E7%9A%84-ux-%E5%A3%9E%E4%BA%86-b3fae12e97bb',
        permanent: false
      },
      {
        source:
          '/%E8%A8%AD%E8%A8%88%E6%99%BA%E6%85%A7%E5%9E%8B%E9%80%9A%E7%9F%A5-38ec311eb749',
        destination:
          'https://medium.com/intersection-translation/%E8%A8%AD%E8%A8%88%E6%99%BA%E6%85%A7%E5%9E%8B%E9%80%9A%E7%9F%A5-38ec311eb749',
        permanent: false
      },
      {
        source:
          '/sketch-symbol-%E6%9C%80%E4%BD%B3%E5%AF%A6%E5%81%9A%E6%96%B9%E6%B3%95-f57826ebee13',
        destination:
          'https://medium.com/intersection-translation/sketch-symbol-%E6%9C%80%E4%BD%B3%E5%AF%A6%E5%81%9A%E6%96%B9%E6%B3%95-f57826ebee13',
        permanent: false
      },
      {
        source:
          '/%E8%A8%AD%E8%A8%88%E6%9B%B4%E5%A5%BD%E7%9A%84%E8%B3%87%E6%96%99%E8%A1%A8%E6%A0%BC-17fcb0361090',
        destination: '/17fcb0361090',
        permanent: true
      },
      {
        source:
          '/%E8%A8%AD%E8%A8%88%E7%84%A1%E6%B3%95%E8%A1%A1%E9%87%8F-b284a5c204c4',
        destination:
          'https://medium.com/intersection-translation/%E8%A8%AD%E8%A8%88%E7%84%A1%E6%B3%95%E8%A1%A1%E9%87%8F-b284a5c204c4',
        permanent: false
      },
      {
        source:
          '/%E8%A8%AD%E8%A8%88%E5%B8%AB%E7%9A%84%E5%B8%95%E9%87%91%E6%A3%AE%E7%91%A3%E7%A2%8E%E5%AE%9A%E7%90%86%E6%8C%87%E5%8D%97-e1a4a0f59b51',
        destination:
          'https://medium.com/intersection-translation/%E8%A8%AD%E8%A8%88%E5%B8%AB%E7%9A%84%E5%B8%95%E9%87%91%E6%A3%AE%E7%91%A3%E7%A2%8E%E5%AE%9A%E7%90%86%E6%8C%87%E5%8D%97-e1a4a0f59b51',
        permanent: false
      },
      {
        source:
          '/%E5%A6%82%E4%BD%95%E6%89%BE%E5%88%B0%E7%B7%9A%E7%A8%BF%E7%9A%84%E5%83%B9%E5%80%BC-99a830480da',
        destination:
          'https://medium.com/intersection-translation/%E5%A6%82%E4%BD%95%E6%89%BE%E5%88%B0%E7%B7%9A%E7%A8%BF%E7%9A%84%E5%83%B9%E5%80%BC-99a830480da',
        permanent: false
      },
      {
        source:
          '/%E5%83%8F%E7%B4%A0%E5%AF%86%E5%BA%A6%E8%A7%A3%E5%AF%86-630b3ac2e0bb',
        destination: '/630b3ac2e0bb',
        permanent: true
      },
      {
        source:
          '/%E8%A6%AA%E6%84%9B%E7%9A%84%E5%AE%A2%E6%88%B6-%E8%AB%8B%E5%8B%BF%E5%86%8D%E8%A6%81%E6%B1%82%E4%BC%B0%E4%B8%80%E5%BA%A7%E7%90%83%E5%A0%B4%E7%9A%84%E5%83%B9%E6%A0%BC-55354a803370',
        destination:
          'https://medium.com/intersection-translation/%E8%A6%AA%E6%84%9B%E7%9A%84%E5%AE%A2%E6%88%B6-%E8%AB%8B%E5%8B%BF%E5%86%8D%E8%A6%81%E6%B1%82%E4%BC%B0%E4%B8%80%E5%BA%A7%E7%90%83%E5%A0%B4%E7%9A%84%E5%83%B9%E6%A0%BC-55354a803370',
        permanent: false
      },
      {
        source:
          '/%E8%81%B7%E4%BA%BA%E7%B2%BE%E7%A5%9E-%E8%A8%AD%E8%A8%88%E8%88%87%E7%A8%8B%E5%BC%8F-a2c829de9625',
        destination:
          'https://medium.com/intersection-translation/%E8%81%B7%E4%BA%BA%E7%B2%BE%E7%A5%9E-%E8%A8%AD%E8%A8%88%E8%88%87%E7%A8%8B%E5%BC%8F-a2c829de9625',
        permanent: false
      },
      {
        source:
          '/%E5%A2%9E%E9%80%B2%E4%BD%BF%E7%94%A8%E8%80%85%E7%B6%93%E9%A9%97%E7%9A%84%E6%96%87%E5%AD%97%E7%B7%A8%E6%8E%92%E7%A7%98%E8%A8%A3-bb788a60b1ce',
        destination:
          'https://medium.com/intersection-translation/%E5%A2%9E%E9%80%B2%E4%BD%BF%E7%94%A8%E8%80%85%E7%B6%93%E9%A9%97%E7%9A%84%E6%96%87%E5%AD%97%E7%B7%A8%E6%8E%92%E7%A7%98%E8%A8%A3-bb788a60b1ce',
        permanent: false
      },
      {
        source:
          '/%E9%9D%9E%E5%AE%98%E6%96%B9%E8%A8%AD%E8%A8%88%E4%BD%9C%E5%93%81%E9%9B%86%E6%89%8B%E5%86%8A-9fcb7aa5344',
        destination: '/9fcb7aa5344',
        permanent: true
      },
      {
        source:
          '/%E5%A6%82%E4%BD%95%E5%88%A9%E7%94%A8-%E4%BD%BF%E7%94%A8%E8%80%85%E5%B0%8E%E5%90%91%E8%A8%AD%E8%A8%88%E7%95%AB%E5%B8%83-f707058576f7',
        destination:
          'https://medium.com/intersection-translation/%E5%A6%82%E4%BD%95%E5%88%A9%E7%94%A8-%E4%BD%BF%E7%94%A8%E8%80%85%E5%B0%8E%E5%90%91%E8%A8%AD%E8%A8%88%E7%95%AB%E5%B8%83-f707058576f7',
        permanent: false
      },
      {
        source:
          '/%E6%B8%9B%E5%B0%91-ui-%E8%A8%AD%E8%A8%88%E8%A4%87%E9%9B%9C%E5%BA%A6%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%AD%A5%E9%A9%9F-cd323e10b710',
        destination:
          'https://medium.com/intersection-translation/%E6%B8%9B%E5%B0%91-ui-%E8%A8%AD%E8%A8%88%E8%A4%87%E9%9B%9C%E5%BA%A6%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%AD%A5%E9%A9%9F-cd323e10b710',
        permanent: false
      },
      {
        source:
          '/%E5%A6%82%E4%BD%95%E6%94%B9%E5%96%84-%E9%97%9C%E6%96%BC%E6%88%91%E5%80%91-%E9%A0%81%E9%9D%A2-70597fc7a36b',
        destination:
          'https://medium.com/intersection-translation/%E5%A6%82%E4%BD%95%E6%94%B9%E5%96%84-%E9%97%9C%E6%96%BC%E6%88%91%E5%80%91-%E9%A0%81%E9%9D%A2-70597fc7a36b',
        permanent: false
      },
      {
        source:
          '/%E8%AE%93%E8%A8%AD%E8%A8%88-ui-%E7%9A%84%E6%99%82%E5%80%99%E6%9B%B4%E4%BA%95%E7%84%B6%E6%9C%89%E5%BA%8F-1b9f426486a9',
        destination:
          'https://medium.com/intersection-translation/%E8%AE%93%E8%A8%AD%E8%A8%88-ui-%E7%9A%84%E6%99%82%E5%80%99%E6%9B%B4%E4%BA%95%E7%84%B6%E6%9C%89%E5%BA%8F-1b9f426486a9',
        permanent: false
      },
      {
        source:
          '/%E5%BE%AE%E4%BA%92%E5%8B%95-%E8%A8%AD%E8%A8%88%E8%89%AF%E5%A5%BD-app-%E7%9A%84%E7%A7%98%E5%AF%86-742c369a464e',
        destination:
          'https://medium.com/intersection-translation/%E5%BE%AE%E4%BA%92%E5%8B%95-%E8%A8%AD%E8%A8%88%E8%89%AF%E5%A5%BD-app-%E7%9A%84%E7%A7%98%E5%AF%86-742c369a464e',
        permanent: false
      },
      {
        source:
          '/microcopy-%E7%B0%A1%E7%9F%AD%E7%9A%84%E5%B0%8F%E6%8F%90%E9%86%92%E9%80%A0%E6%88%90%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%BD%B1%E9%9F%BF-41bb0047b605',
        destination:
          'https://medium.com/intersection-translation/microcopy-%E7%B0%A1%E7%9F%AD%E7%9A%84%E5%B0%8F%E6%8F%90%E9%86%92%E9%80%A0%E6%88%90%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%BD%B1%E9%9F%BF-41bb0047b605',
        permanent: false
      },
      {
        source:
          '/%E6%88%90%E7%82%BA%E5%89%B5%E6%A5%AD%E5%85%AC%E5%8F%B8%E7%9A%84%E9%A6%96%E4%BD%8D%E8%A8%AD%E8%A8%88%E5%B8%AB-17b2b8e1aaf0',
        destination:
          'https://medium.com/intersection-translation/%E6%88%90%E7%82%BA%E5%89%B5%E6%A5%AD%E5%85%AC%E5%8F%B8%E7%9A%84%E9%A6%96%E4%BD%8D%E8%A8%AD%E8%A8%88%E5%B8%AB-17b2b8e1aaf0',
        permanent: false
      },
      {
        source:
          '/%E4%BF%9D%E7%9C%9F%E5%BA%A6%E6%9B%B2%E7%B7%9A-%E5%A6%82%E4%BD%95%E8%A1%A1%E9%87%8F%E6%89%93%E9%80%A0-ui-%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%88%90%E6%9C%AC%E8%88%87%E5%A5%BD%E8%99%95-700e2a930715',
        destination:
          'https://medium.com/intersection-translation/%E4%BF%9D%E7%9C%9F%E5%BA%A6%E6%9B%B2%E7%B7%9A-%E5%A6%82%E4%BD%95%E8%A1%A1%E9%87%8F%E6%89%93%E9%80%A0-ui-%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%88%90%E6%9C%AC%E8%88%87%E5%A5%BD%E8%99%95-700e2a930715',
        permanent: false
      },
      {
        source:
          '/%E7%82%BA%E6%96%B0%E7%9A%84%E6%B3%B0%E6%99%A4%E5%A3%AB%E5%A0%B1%E7%B6%B2%E7%AB%99%E6%89%93%E9%80%A0-ui-f5f1e42899e5',
        destination:
          'https://medium.com/intersection-translation/%E7%82%BA%E6%96%B0%E7%9A%84%E6%B3%B0%E6%99%A4%E5%A3%AB%E5%A0%B1%E7%B6%B2%E7%AB%99%E6%89%93%E9%80%A0-ui-f5f1e42899e5',
        permanent: false
      },
      {
        source:
          '/5-%E5%80%8B%E8%83%BD%E7%A9%A9%E5%AE%9A%E9%80%B2%E8%A1%8C%E5%A5%BD%E8%A8%AD%E8%A8%88%E7%9A%84-ux-%E6%96%B9%E6%B3%95-36e0dc42b5f3',
        destination:
          'https://medium.com/intersection-translation/5-%E5%80%8B%E8%83%BD%E7%A9%A9%E5%AE%9A%E9%80%B2%E8%A1%8C%E5%A5%BD%E8%A8%AD%E8%A8%88%E7%9A%84-ux-%E6%96%B9%E6%B3%95-36e0dc42b5f3',
        permanent: false
      },
      {
        source:
          '/%E5%A6%82%E4%BD%95%E9%80%B2%E8%A1%8C%E5%9C%96%E7%A4%BA%E7%9A%84%E6%98%93%E7%94%A8%E6%80%A7%E6%B8%AC%E8%A9%A6-%E5%9C%96%E7%A4%BA%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E5%A2%9E%E9%80%B2%E6%98%93%E7%94%A8%E6%80%A7%E5%97%8E-c2811905545e',
        destination:
          'https://medium.com/intersection-translation/%E5%A6%82%E4%BD%95%E9%80%B2%E8%A1%8C%E5%9C%96%E7%A4%BA%E7%9A%84%E6%98%93%E7%94%A8%E6%80%A7%E6%B8%AC%E8%A9%A6-%E5%9C%96%E7%A4%BA%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E5%A2%9E%E9%80%B2%E6%98%93%E7%94%A8%E6%80%A7%E5%97%8E-c2811905545e',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
