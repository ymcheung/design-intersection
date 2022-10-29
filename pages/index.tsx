import type { NextPage } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { queryProps, postsProps } from '@utils/types';
import { formatDate } from '@utils/formatDate';
import { styled } from '../stitches.config';
import ymcheung from '../public/translator/ymcheung.webp';
import HeadMeta from '@utils/HeadMeta';
import { Divider } from '@elements/divider';
import Header from '@components/Header';
import { Container } from '@components/layouts';
import { Heading } from '@elements/headings';
import Footer from '@components/Footer';

const HomeLayout = styled(Container, {
  fontFamily: '$default',

  variants: {
    layout: {
      tablet: {
        display: 'grid',
        grid: '"featured all" auto / 5fr 3fr',
        alignItems: 'start',
        columnGap: '$64'
      }
    }
  }
});

const HomeCell = styled('div', {
  variants: {
    position: {
      featured: {
        gridArea: 'featured'
      },
      all: {
        gridArea: 'all'
      }
    },
    responsive: {
      tablet: {
        position: 'sticky',
        top: '$64'
      }
    }
  }
});


const PostList = styled('ul', {
  display: 'grid',
  rowGap: '$24',
  marginBlockStart: 0,
  marginBlockEnd: '$24',
  padding: 0
});

const PostItem = styled('li', {
  listStyleType: 'none'
  // variants: {
  //   position: {
  //     featured: {

  //     },
  //     all: {

  //     }
  //   }
  // }
});

const PostLink = styled('a', {
  display: 'block',
  textDecoration: 'none'
});

const Cover = styled('figure', {
  position: 'relative',
  marginBlockStart: 0,
  marginBlockEnd: '$16',
  backgroundColor: 'hsl($shade1500)',

  variants: {
    responsive: {
      mobile: {
        marginX: '-$16'

      },
      tablet: {
        marginX: 0
      }
    },
    featured: {
      mobile: {
        aspectRatio: 16 / 9
      },
      tablet: {
        aspectRatio: 32 / 9
      }
    },
    position: {
      all: {
        aspectRatio: 16 / 9
      }
    }
  }
});

const DateLabel = styled('time', {
  position: 'absolute',
  right: 0,
  bottom: '-$12',
  paddingTop: '$4',
  paddingBottom: '$2',
  paddingInlineStart: '$12',
  color: 'hsl($shade800)',
  fontSize: '$14',
  lineHeight: '$18',
  backgroundColor: 'hsl($shade1500)',
  border: '4px solid white',
  borderRight: 0,

  variants: {
    responsive: {
      mobile: {
        paddingInlineEnd: '$16'
      },
      tablet: {
        paddingInlineEnd: '$12'
      }
    }
  }
});

const Description = styled('p', {
  marginBlockStart: 0,

  variants: {
    position: {
      featured: {
        color: 'hsl($shade500)',
        fontSize: '$16',
        lineHeight: '$24'
      },
      translator: {
        marginBlockEnd: '$4',
        color: 'hsl($shade800)',
        fontSize: '$14',
        lineHeight: '$20'
      },
      translatorLink: {
        marginBlockEnd: '$4',
        color: 'hsl($shade800)',
        fontSize: '$14',
        lineHeight: '$20',
        textDecorationColor: 'transparent',

        '&:hover': {
          textDecorationColor: 'hsl($shade800)',
        }
      }
    }
  }
});

const WebsiteProcessLink = styled('a', {
  display: 'block'
})

const WebsiteProcess = styled('figure', {
  position: 'relative',
  marginX: 0,
  marginBlockEnd: '$16',

  variants: {
    responsive: {
      mobile: {
        aspectRatio: 3 / 1
      },
      tablet: {
        aspectRatio: 16 / 3
      }
    }
  }
});

const WebsiteProcessImage = styled(Image, {
  objectFit: 'cover',
  borderRadius: '24px'
});

const TranslatorCard = styled('figure', {
  display: 'grid',
  grid: 'auto / 80px 1fr',
  columnGap: '$8',
  margin: '0 0 $32',
});

const TranslatorAvatar = styled(Image, {
  borderRadius: '12px'
});

const AllByList = styled('ul', {
  display: 'grid',
  marginBlockStart: 0,
  marginBlockEnd: '$32',
  padding: 0,

  variants: {
    responsive: {
      mobile: {
        grid: 'auto / 1fr 1fr',
        columnGap: '$16'
      }
    }
  }
});

const AllByItem = styled('li', {
  listStyleType: 'none'
});

const AllByLink = styled('a', {
  display: 'block',
  paddingBlockStart: '$10',
  paddingBlockEnd: '$6',
  paddingInlineStart: '$12',
  color: 'hsl($white)',
  fontSize: '$16',
  lineHeight: 1,
  textDecoration: 'none',
  backgroundColor: 'hsl($accent)'
});

const AllByIcon = styled('svg', {
  width: '$16',
  aspectRatio: 1,
  verticalAlign: 'middle'
});

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
      path: 'all/time'
    }
  ];

  const featuredPosts = posts.filter(({ tags }) =>
    tags.includes('featured')
  );

  return (
    <>
      <HeadMeta dateModified={meta.dateModified} datePublished={meta.datePublished} />
      {process.env.NODE_ENV === 'production' && <Script async src="https://cdn.splitbee.io/sb.js"></Script>}
      <Header />
      <HomeLayout layout={{ '@m992': 'tablet' }} responsive={{ '@m1232': 'noPadding' }}>
        <HomeCell as="main" position={{ '@m992': 'featured' }} responsive={{ '@m992': 'tablet' }}>
          <PostList>
            {featuredPosts.map(({ slug, title, cover, description, publishedTime }, index) => (
              <PostItem key={`featured_${index}`}>
                <Link href={`/${slug}`} passHref>
                  <PostLink>
                    <Cover
                      responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}
                      featured={{ '@initial': 'mobile', '@m992': 'tablet' }}
                    >
                      <Image src={cover.url} layout="fill" objectFit="cover" alt={cover.alt} priority />
                      <DateLabel responsive={{ '@initial': 'mobile', '@m992': 'tablet' }} dateTime={formatDate(publishedTime)}>{formatDate(publishedTime)}</DateLabel>
                    </Cover>
                    <Heading position="postsFeatured">{title}</Heading>
                    <Description position="featured">{description}</Description>
                  </PostLink>
                </Link>
              </PostItem>
            ))}
          </PostList>
          <Link href="https://thecosignstudio.github.io/process" passHref>
            <WebsiteProcessLink>
              <WebsiteProcess responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>
                <WebsiteProcessImage src="/website/process.webp" layout="fill" alt="專業人士的設計流程 (Design Process for Pros)" />
              </WebsiteProcess>
            </WebsiteProcessLink>
          </Link>
          <Heading position="cell">關於譯者</Heading>
          <TranslatorCard>
            <TranslatorAvatar src={ymcheung} width={80} height={80} layout="fixed" alt="" />
            <figcaption>
              <Heading position="translator">Yuming Cheung</Heading>
              <Description position="translator">網站前端開發 @RE:LAB</Description>
              <Link href="https://read.cv/ymcheung" passHref><Description as="a" position="translatorLink">read.cv/ymcheung</Description></Link>
            </figcaption>
          </TranslatorCard>
          <Divider display={{ '@m992': 'none' }} />
        </HomeCell>
        <HomeCell position={{ '@m992': 'all' }} responsive={{ '@m992': 'tablet' }}>
          <Heading position="cell">所有文章</Heading>
          <PostList>
            {posts.map(({ slug, title, cover, publishedTime }, index) => (
              <PostItem key={`all_${index}`}>
                <Link href={`/${slug}`} passHref>
                  <PostLink>
                    <Cover responsive={{ '@initial': 'mobile', '@m992': 'tablet' }} position="all">
                      <Image src={cover.url} layout="fill" objectFit="cover" alt={cover.alt} />
                      <DateLabel responsive={{ '@initial': 'mobile', '@m992': 'tablet' }} dateTime={formatDate(publishedTime)}>{formatDate(publishedTime)}</DateLabel>
                    </Cover>
                    <Heading as="h3" position="postsAll">{title}</Heading>
                  </PostLink>
                </Link>
              </PostItem>
            ))}
          </PostList>
          <AllByList responsive={{ '@initial': 'mobile' }}>
            {
              allBy.map(({ title, path }) =>
                <AllByItem key={`AllBy-${path}`}>
                  <Link href={`/${path}`} passHref>
                    <AllByLink>
                      {title}
                      <AllByIcon viewBox="0 0 16 16">
                        <use xlinkHref="/sprite.svg#arrow" />
                      </AllByIcon>
                    </AllByLink>
                  </Link>
                </AllByItem>
              )
            }
          </AllByList>
        </HomeCell>
      </HomeLayout>
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
