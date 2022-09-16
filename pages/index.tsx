import type { NextPage } from 'next';
import Script from 'next/script';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import HeadMeta from '@utils/HeadMeta';
import Header from '@components/Header';
import { Container } from '@components/layouts';
import Footer from '@components/Footer';

interface queryProps {
  slug: {
    current: string;
  };
  title: string;
  mainImage: {
    asset: {
      url: string;
    }
  };
  description: string;
  _updatedAt: string;
  publishedTime: string;
  tags: [{
    slug: string
  }];
}

interface postsProps {
  posts: [{
    slug: string;
    title: string;
    cover: string;
    description: string;
    modifiedTime: string;
    publishedTime: string;
    tags: string[];
  }]
}

const Home: NextPage<postsProps> = ({ posts }) => {
  const featuredPosts = posts.filter(({ tags }) =>
    tags.includes('featured')
  );

  console.log(featuredPosts)

  return (
    <>
      <HeadMeta />
      <Script async src="https://cdn.splitbee.io/sb.js"></Script>
      <Header />
      <Container as="main" responsive={{ '@m1200': 'noPadding' }}>
        <ul>
          {featuredPosts.map(({ title, description, publishedTime }, index) => (<li key={index}><h2>{title}</h2><p>{description}{publishedTime}</p></li>))}
        </ul>
        <ul>
          {posts.map(({ title }, index) => (<li key={index}><h2>{title}</h2></li>))}
        </ul>
      </Container>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        allPost {
          slug {
            current
          }
          title
          mainImage {
            asset {
              url
            }
          }
          description
          _updatedAt
          publishedTime
          tags {
            slug
          }
        }
      }
    `,
  });

  const posts = data.allPost.map(({ slug, title, mainImage, description, _updatedAt, publishedTime, tags }: queryProps) => {
    const tagsSlug = tags.map(({ slug }) => slug);
    return ({
      slug: slug.current,
      title,
      cover: mainImage.asset.url,
      description,
      modifiedTime: _updatedAt,
      publishedTime,
      tags: tagsSlug
    })
  });

  return {
    props: {
      posts
    },
 };
}

export default Home;
