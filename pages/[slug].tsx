import type { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import HeadMeta from '@utils/HeadMeta';
import Heading2 from '@components/article/Heading2';
import Heading3 from '@components/article/Heading3';
import ArticleP from '@components/article/ArticleP';
import ArticleUL from '@components/article/ArticleUL';
import ArticleOL from '@components/article/ArticleOL';
import ArticleLink from '@components/article/ArticleLink';
import ArticleImage from '@components/article/ArticleImage';
import ImageDivider from '@components/article/ImageDivider';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import { styled } from '../stitches.config';
import { PostTitle, PostSubtitle } from '@elements/postTitles';
import { Divider } from '@elements/divider';
import Header from '@components/Header';
import { Container } from '@components/layouts';
import Aside from '@components/article/Aside';
import Footer from '@components/Footer';
import ArticleBlockquote from '@components/article/ArticleBlockquote';

interface staticPathProps {
  slug: {
    current: string;
  };
}

interface queryProps {
  slug: {
    current: string;
  };
  title: string;
  subtitle?: string;
  cover: {
    mainImage: {
      asset: {
        url: string;
      }
    },
    position: boolean;
    alt: string;
  };
  body: string;
  description: string;
  _updatedAt: string;
  publishedTime: string;
  source: {
    title: string;
    subtitle?: string;
    url: string;
    author: string;
    intro: string;
  };
  tags: [{
    slug: string
  }];
}

interface postProps {
  post: {
    title: string;
    subtitle?: string;
    cover: {
      url: string;
      position: boolean;
      alt: string;
    };
    description: string;
    modifiedTime: string;
    publishedTime: string;
    source: {
      title: string;
      subtitle?: string;
      url: string;
      author: string;
      intro: string;
    }
    tags: string[];
  }
  postBody: {
    compiledSource: string;
  },
  authorIntro: {
    compiledSource: string;
  }
}

const PostLayout = styled(Container, {
  fontFamily: '$default',

  variants: {
    layout: {
      tablet: {
        display: 'grid',
        grid: 'auto / 3fr 1fr',
        columnGap: '$64'
      }
    }
  }
});

const PostBody = styled('article', {
  marginBlockEnd: '$64',
  paddingBlockStart: '$16'
});

// const Pipe = styled('span', {
//   display: 'inline-block',
//   width: '1px',
//   height: '$20',
//   marginX: '$8',
//   verticalAlign: 'text-top',
//   backgroundColor: 'hsl($accent / 0.5)'
// });

export default function Post({ post, postBody, authorIntro }: postProps) {
  const { title, subtitle, cover, description, publishedTime, source } = post;

  const router = useRouter();

  const meta = {
    title: `${title} | Intersection`,
    description: `${description}翻譯自 ${source.author} 的 “${source.title}”`,
    slug: router.asPath
  }

  const mdxComponents = {
    h2: Heading2,
    h3: Heading3,
    p: ArticleP,
    ul: ArticleUL,
    ol: ArticleOL,
    a: ArticleLink,
    img: ArticleImage,
    ImageDivider,
    blockquote: ArticleBlockquote,
    hr: () => <Divider position="article" />
  };

  return (
    <>
      <HeadMeta
        title={meta.title}
        description={meta.description}
        slug={meta.slug}
      />
      {process.env.NODE_ENV === 'production' && <Script async src="https://cdn.splitbee.io/sb.js"></Script>}
      <Header />
      <PostLayout layout={{ '@m992': 'tablet' }} responsive={{ '@m1232': 'noPadding' }}>
        <PostBody>
          {cover.position ? '534543' : '99999'}
          <PostTitle translated={{ '@initial': 'mobile', '@m992': 'tablet' }} withSubtitle={!!subtitle}>{title}</PostTitle>
          {subtitle && <PostSubtitle translated={{ '@initial': 'mobile' }}>{subtitle}</PostSubtitle>}
          <MDXRemote {...postBody} components={mdxComponents} />
        </PostBody>
        <Aside authorIntro={authorIntro} publishedTime={publishedTime} source={source} />
      </PostLayout>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Paths {
        allPost {
          slug {
            current
          }
        }
      }
    `,
  });

  const paths = data.allPost.map(({ slug }: staticPathProps) => ({
    params: { slug: slug.current }
  }));

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { data } = await client.query({
    query: gql`
      query Posts {
        allPost( where: { slug: { current: { eq: "${params?.slug}"}}}) {
          _id
          title
          subtitle,
          cover {
            mainImage {
              asset {
                url
              }
            }
            position
            alt
          }
          body
          description
          _updatedAt
          publishedTime
          source {
            title
            subtitle
            url
            author
            intro
          }
          tags {
            slug
          }
        }
      }
    `,
  });

  const post = data.allPost.map(({ title, subtitle, cover, description, _updatedAt, publishedTime, source, tags }: queryProps) => {
    const tagsSlug = tags.map(({ slug }) => slug);
    return ({
      title,
      subtitle,
      cover: {
        url: cover.mainImage.asset.url,
        position: cover.position,
        alt: cover.alt
      },
      description,
      modifiedTime: _updatedAt,
      publishedTime,
      source: {
        title: source.title,
        subtitle: source.subtitle,
        url: source.url,
        author: source.author
      },
      tags: tagsSlug
    })
  });

  const body = data.allPost[0].body;
  const postBody = await serialize(
    body, {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkUnwrapImages],
        format: 'mdx'
      },
      parseFrontmatter: false
    }
  );

  const intro = data.allPost[0].source.intro;
  const authorIntro = await serialize(
    intro, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        format: 'md'
      },
      parseFrontmatter: false
    }
  );

  return {
    props: {
      post: post[0],
      postBody,
      authorIntro
    }
  }
}
