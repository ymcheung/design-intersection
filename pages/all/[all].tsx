import type { NextPage, GetStaticPaths, GetStaticPropsContext } from 'next';
import Script from 'next/script';
import HeadMeta from '@utils/HeadMeta';
import { queryProps, postsProps } from '@utils/types';
import Header from '@components/Header';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
import { Container } from '@components/layouts';
import Footer from '@components/Footer';

interface allByPostsProps extends postsProps {
  by: string;
};

interface metaProps {
  title: {
    [by: string]: string;
  }
  dateModified: string;
  datePublished: string;
}

const AllBy: NextPage<allByPostsProps> = ({ posts, by }) => {
  const meta: metaProps = {
    title: {
      popular: '熱門文章'
    },
    dateModified: '2022-11-01T00:00:00+08:00',
    datePublished: '2016-06-13T00:00:00+08:00'
  };

  return (
    <>
      <HeadMeta title={meta.title[by]} dateModified={meta.dateModified} datePublished={meta.datePublished} />
      {process.env.NODE_ENV === 'production' && <Script async src="https://cdn.splitbee.io/sb.js"></Script>}
      <Header />
      <Container responsive={{ '@initial': 'mobile', '@m1232': 'desktop' }}>
      {
        posts.map(({ title, slug }) => <a href={slug}>{title}</a>)
      }
      </Container>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{
    params: {
      all: 'popular'
    }
  }];

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { data } = await client.query({
    query: gql`
      query Posts {
        allPost(sort: { publishedTime:DESC }) {
          _id
          slug {
            current
          }
          title
          cover {
            mainImage {
              asset {
                url
              }
            }
            alt
          }
          description
          _updatedAt
          publishedTime
          views
          likes
          tags {
            slug
          }
        }
      }
    `,
  });

  const posts = data.allPost.map(({ slug, title, cover, description, _updatedAt, publishedTime }: queryProps) => {
    return ({
      slug: slug.current,
      title,
      cover: {
        url: cover.mainImage.asset.url,
        alt: cover.alt
      },
      description,
      modifiedTime: _updatedAt,
      publishedTime
    })
  });

  return {
    props: {
      posts,
      by: params?.all
    }
  }
}

export default AllBy;