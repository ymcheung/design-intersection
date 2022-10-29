import type { NextPage, GetStaticPropsContext } from 'next';
import Script from 'next/script';
import HeadMeta from '@utils/HeadMeta';
import { queryProps, postsProps } from '@utils/types';
import Header from '@components/Header';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
import Footer from '@components/Footer';

const All: NextPage<postsProps> = ({ posts }) => {
  const meta = {
    title: '時間排序所有文章',
    dateModified: '2022-11-01T00:00:00+08:00',
    datePublished: '2016-06-13T00:00:00+08:00'
  }

  return (
    <>
      <HeadMeta title={meta.title}  dateModified={meta.dateModified} datePublished={meta.datePublished} />
      {process.env.NODE_ENV === 'production' && <Script async src="https://cdn.splitbee.io/sb.js"></Script>}
      <Header />
      <Footer />
    </>
  );
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
      posts
    }
  }
}

export default All;
