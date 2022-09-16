import type { NextPage } from 'next';
import Script from 'next/script';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import HeadMeta from '@utils/HeadMeta';
import Header from '@components/Header';
import Footer from '@components/Footer';

interface postsProps {
  posts: [
    {
      slug: {
        current: string;
      }
      title: string;
      description: string;
    }
  ]
}

const Home: NextPage = ({ posts }: postsProps) => {
  console.log(posts)
  // const { slug, title, description } = posts;

  return (
    <>
      <HeadMeta />
      <Script async src="https://cdn.splitbee.io/sb.js"></Script>
      <Header />
      {/* <main>{posts}</main> */}
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        allPost {
          title
          description
          slug {
            current
          }
        }
      }
    `,
  });
  return {
    props: {
      posts: data.allPost,
    },
 };
}

export default Home;
