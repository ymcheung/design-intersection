import type { NextPage } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { queryProps, postsProps } from '@utils/types';
import { formatDate } from '@utils/formatDate';
import HeadMeta from '@utils/HeadMeta';
import '@master/css';
// import 'styles/master.css';
import Header from '@components/Header';
import Translator from '@components/Translator';
import Footer from '@components/Footer';

const Home: NextPage<postsProps> = ({ posts }) => {
  const meta = {
    dateModified: '2022-11-01T00:00:00+08:00',
    datePublished: '2016-06-13T00:00:00+08:00'
  };

  const allBy = [
    {
      title: '熱門文章',
      path: 'all/popular'
    },
    {
      title: '時間排序',
      path: 'all'
    }
  ];

  const featuredPosts = posts.filter(({ tags }) =>
    tags.includes('featured')
  );

  return (
    <>
      <HeadMeta dateModified={meta.dateModified} datePublished={meta.datePublished} />
      {process.env.NODE_ENV === 'production' && <Script data-respect-dnt async src="https://cdn.splitbee.io/sb.js"></Script>}
      <Header />
      {/* <Container layout={{ '@m992': 'home' }} responsive={{ '@initial': 'mobile', '@m1232': 'desktop' }}> */}
      <div className="container d:grid@m992 grid-template-areas:'featured|all'@m992 grid-template-columns:5fr|3fr@m992 align-items:start@m992 gap-x:64@m992 margin-bottom:32">
        <main className="grid-template-areas:featured@m992 position:sticky@m992 top:64@m992">
          <ul className="d:grid gap-y:24 mt:0 mb:24 p:0">
            {featuredPosts.map(({ slug, title, cover, description, publishedTime }, index) => (
              <li className="list-style-type:none" key={`featured${index}`}>
                <Link href={`/${slug}`} passHref>
                  <a className="d:block linkArea">
                    <figure className="cardCover aspect-ratio:32/9@m992">
                      <Image src={cover.url} layout="fill" objectFit="cover" alt={cover.alt} priority />
                      <time className="dateLabel" dateTime={formatDate(publishedTime)}>{formatDate(publishedTime)}</time>
                    </figure>
                    <h2 className="margin:0|0|12 color:shade-100 f:20 line-height:1.4">{title}</h2>
                    <p className="mt:0 color:shade-500 f:16 line-height:1.5">{description}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="https://thecosignstudio.github.io/process" passHref>
            <a className="d:block">
              <figure className="position:relative aspect-ratio:3/1 aspect-ratio:16/3@m992 mx:0 mb:16">
                <Image className="object-fit:cover border-radius:24" src="/website/process.webp" layout="fill" alt="專業人士的設計流程 (Design Process for Pros)" />
              </figure>
            </a>
          </Link>
          <Translator />
          <hr className="divider display:none@m992" />
        </main>
        <div className="grid-template-areas:all@m992">
          <h2 className="cellHeading fontDefault">所有文章</h2>
          <ul className="d:grid gap-y:24 mt:0 mb:24 p:0">
            {posts.map(({ slug, title, cover, publishedTime }, index) => (
              <li className="list-style-type:none" key={`all_${index}`}>
                <Link href={`/${slug}`} passHref>
                  <a className="d:block linkArea">
                    <figure className="cardCover">
                      <Image src={cover.url} layout="fill" objectFit="cover" alt={cover.alt} />
                      <time className="dateLabel" dateTime={formatDate(publishedTime)}>{formatDate(publishedTime)}</time>
                    </figure>
                    <h3 className="margin:0 color:shade-100 f:16 line-height:1.5">{title}</h3>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="d:grid grid-template-columns:1fr|1fr gap-x:16 my:0 p:0">
            {
              allBy.map(({ title, path }) =>
                <li className="list-style-type:none" key={`AllBy_${path}`}>
                  <Link href={`/${path}`} passHref>
                    <a className="d:block pt:10 pb:6 pl:12 color:white f:16 line-height:1 text-decoration:none background-color:accent">
                      {title}
                      <svg className="w:16 aspect-ratio:1 vertical-align:middle" viewBox="0 0 16 16">
                        <use xlinkHref="/sprite.svg#arrow" />
                      </svg>
                    </a>
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
        {/* </Container> */}
        </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        allPost(limit: 8, sort: { publishedTime:DESC }) {
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
          tags {
            slug
          }
        }
      }
    `,
  });

  const posts = data.allPost.map(({ slug, title, cover, description, _updatedAt, publishedTime, tags }: queryProps) => {
    const tagsSlug = tags.map(({ slug }) => slug);
    return ({
      slug: slug.current,
      title,
      cover: {
        url: cover.mainImage.asset.url,
        alt: cover.alt
      },
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
