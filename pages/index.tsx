import type { NextPage } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { formatDate } from '@utils/formatDate';
import { styled } from '../stitches.config';
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

const HomeLayout = styled(Container, {
  display: 'grid',
  fontFamily: '$default',

  variants: {
    layout: {
      tablet: {
        grid: '"featured all" auto / 5fr 3fr',
        columnGap: '$64'
      }
    }
  }
});

const PostList = styled('ul', {
  marginTop: 0,
  marginBottom: '$24',
  padding: 0,

  variants: {
    position: {
      featured: {
        gridArea: 'featured'
      },
      all: {
        gridArea: 'all'
      }
    }
  }
});

const PostItem = styled('li', {
  listStyleType: 'none',

  variants: {
    position: {
      featured: {

      },
      all: {

      }
    }
  }
});

const Cover = styled('figure', {
  position: 'relative',
  aspectRatio: 16 / 9,
  marginTop: 0,

  variants: {
    position: {
      featured: {
        marginBlockEnd: '$16'
      },
      all: {
        marginBlockEnd: '$12'
      }
    },
    responsive: {
      mobile: {
        marginX: '-$16'

      },
      tablet: {
        marginX: 0
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
  fontSize: '$16',
  lineHeight: 1,
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

const PostTitle = styled('h2', {
  variants: {
    position: {
      featured: {
        margin: '0 0 $12',
        fontSize: '$20',
        lineHeight: '$28'
      },
      all: {
        margin: '0 0 $8',
        fontSize: '$16'
      }
    }
  }
});

const PostDescription = styled('p', {
  marginTop: 0,

  variants: {
    position: {
      featured: {
        fontSize: '$16',
        lineHeight: '$24'
      }
    }
  }
});

const Home: NextPage<postsProps> = ({ posts }) => {
  const featuredPosts = posts.filter(({ tags }) =>
    tags.includes('featured')
  );

  return (
    <>
      <HeadMeta />
      <Script async src="https://cdn.splitbee.io/sb.js"></Script>
      <Header />
      <HomeLayout as="main" layout={{ '@m992': 'tablet' }} responsive={{ '@m1200': 'noPadding' }}>
        <PostList position={{ '@m992': 'featured' }}>
          {featuredPosts.map(({ title, cover, description, publishedTime }, index) => (
            <PostItem key={`featured_${index}`}>
              <Cover position="featured" responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>
                <Image src={cover} layout="fill" objectFit="cover" alt="" />
                <DateLabel responsive={{ '@initial': 'mobile', '@m992': 'tablet' }} dateTime={formatDate(publishedTime)}>{formatDate(publishedTime)}</DateLabel>
              </Cover>
              <PostTitle position="featured">{title}</PostTitle>
              <PostDescription position="featured">{description}</PostDescription>
            </PostItem>
          ))}
        </PostList>
        <PostList position={{ '@m992': 'all' }}>
          {posts.map(({ title, cover, publishedTime }, index) => (
            <PostItem key={`all_${index}`}>
              <Cover position="all" responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>
                <Image src={cover} layout="fill" objectFit="cover" alt="" />
                <DateLabel responsive={{ '@initial': 'mobile', '@m992': 'tablet' }} dateTime={formatDate(publishedTime)}>{formatDate(publishedTime)}</DateLabel>
              </Cover>
              <PostTitle position="all">{title}</PostTitle>
            </PostItem>
          ))}
        </PostList>
      </HomeLayout>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        allPost(sort: { publishedTime:DESC }) {
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
