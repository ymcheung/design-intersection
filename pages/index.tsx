import type { NextPage } from 'next';
import Script from 'next/script';
import HeadMeta from '@utils/HeadMeta';
import Header from '@components/Header';
import Footer from '@components/Footer';


const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <Script async src="https://cdn.splitbee.io/sb.js"></Script>
      <Header />
      <main></main>
      <Footer />
    </>
  )
}

export default Home
