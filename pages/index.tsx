import type { NextPage } from 'next';
import Script from 'next/script';
import HeadMeta from '@utils/HeadMeta';
import Header from '@components/Header';


const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <Script async src="https://cdn.splitbee.io/sb.js"></Script>
      <Header />
      <main>index</main>
    </>
  )
}

export default Home
