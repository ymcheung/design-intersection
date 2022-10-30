import type { NextPage, GetStaticPaths, GetStaticPropsContext } from 'next';
import Script from 'next/script';
import HeadMeta from '@utils/HeadMeta';
import { queryProps, postsProps } from '@utils/types';
import Header from '@components/Header';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
import { Container } from '@components/layouts';
import { Heading } from '@elements/headings';
import { PostsList, ListItem } from '@components/posts';
import { PostLink, Cover, DateLabel } from '@components/card';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@utils/formatDate';
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
      <Container as="main" layout="all" responsive={{ '@initial': 'mobile', '@m1232': 'desktop' }}>
        <Heading as="h1" position="cell">{meta.title[by]}</Heading>
        <PostsList posts={{ '@initial': 'mobile' }}>
        {
          posts.map(({ title, slug, cover, publishedTime }) =>
            <ListItem key={slug}>
              <Link href={`/${slug}`} passHref>
                <PostLink>
                  <Cover responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} position="all">
                    <Image src={cover.url} layout="fill" objectFit="cover" alt={cover.alt} />
                    <DateLabel responsive={{ '@initial': 'mobile', '@m992': 'tablet' }} dateTime={formatDate(publishedTime)}>{formatDate(publishedTime)}</DateLabel>
                  </Cover>
                  <Heading as="h2" position="postsAll">{title}</Heading>
                </PostLink>
              </Link>
            </ListItem>
          )
        }
        </PostsList>
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
        allPost(sort: { likes:DESC }) {
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
