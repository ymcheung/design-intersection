import type { NextPage } from 'next';
import Script from 'next/script';
import { useRouter } from 'next/router';
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


const All: NextPage<postsProps> = ({ posts }) => {
  const meta = {
    title: '所有文章以時間排序',
    dateModified: '2022-11-01T23:00:00+08:00',
    datePublished: '2016-06-13T00:00:00+08:00'
  }

  const handleTimeToYear = (time: string) => {
    return new Date(time).getFullYear();
  };

  const byYear = () => {
    const allYears = posts.map(({ publishedTime }) => handleTimeToYear(publishedTime));
    const uniqueYears = [...new Set(allYears)];

    const filterByYear = uniqueYears.map((year) => {
      const yearPosts = posts.filter(({ publishedTime }) => handleTimeToYear(publishedTime) === year);

      return {
        year,
        yearPosts
      }
    })

    return filterByYear;
  };

  const router = useRouter();

  return (
    <>
      <HeadMeta title={meta.title} slug={router.asPath} dateModified={meta.dateModified} datePublished={meta.datePublished} />
      {process.env.NODE_ENV === 'production' && <Script data-respect-dnt async src="https://cdn.splitbee.io/sb.js"></Script>}
      <Header />
      <Container as="main" layout="all" responsive={{ '@initial': 'mobile', '@m1232': 'desktop' }}>
        <Heading as="h1" position="cell">{meta.title}</Heading>
        <PostsList year={{ '@initial': 'mobile' }}>
        {
          byYear().map(({ year, yearPosts }) =>
          <ListItem key={`year_${year}`}>
            <Heading position="postsYear">{year}</Heading>
            <PostsList posts={{ '@initial': 'mobile' }}>
              {yearPosts.map(({ title, slug, cover, publishedTime }) =>
                <ListItem key={slug}>
                  <Link href={`/${slug}`} passHref>
                    <PostLink>
                      <Cover responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} position="all">
                        <Image src={`${cover.url}?w=880&q=100`} layout="fill" objectFit="cover" alt={cover.alt} />
                        <DateLabel responsive={{ '@initial': 'mobile', '@m992': 'tablet' }} dateTime={formatDate(publishedTime)}>{formatDate(publishedTime)}</DateLabel>
                      </Cover>
                      <Heading as="h2" position="postsAll">{title}</Heading>
                    </PostLink>
                  </Link>
                </ListItem>
              )}
            </PostsList>
          </ListItem>
              )}
        </PostsList>
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
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
