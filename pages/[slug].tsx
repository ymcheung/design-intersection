import type { GetStaticPropsContext } from 'next';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '@components/MDXComponents';
import Link from 'next/link';
import { formatDate } from '@utils/formatDate';
import remarkGfm from 'remark-gfm';
import { styled } from '../stitches.config';
import { Divider } from '@elements/divider';
import Header from '@components/Header';
import { Container } from '@components/layouts';
import { Heading } from '@components/headings';
import Footer from '@components/Footer';

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
  mainImage: {
    asset: {
      url: string;
    }
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
    cover: string;
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
  },
  mdxSource: {
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
  paddingBlockStart: '$16',

  '& img': {
    maxWidth: '100%'
  },

  variants: {
    responsive: {
      tablet: {
      }
    }
  }
});

const PostTitle = styled('h1', {
  marginBlockStart: 0,
  marginBlockEnd: '$16',
  color: 'hsl($shade100)',

  variants: {
    translated: {
      mobile: {
        fontSize: '$24',
        lineHeight: '$32'
      },
      tablet: {
        fontSize: '$32',
        lineHeight: '$40'
      }
    },
    source: {
      mobile: {
        display: 'inline-block',
        fontSize: '$16',
        fontWeight: 'bold',
        lineHeight: '$24'
      }
    },
    withSubtitle: {
      true: {
        marginBlockEnd: '$8'
      }
    }
  }
});

const PostSubtitle = styled('p', {
  marginBlockStart: 0,
  color: 'hsl($shade800)',

  variants: {
    translated: {
      mobile: {
        marginBlockEnd: '$24',
        fontSize: '$18',
        lineHeight: '$24',
      }
    },
    source: {
      mobile: {
        marginBlockEnd: '$16',
        fontSize: '$16',
        lineHeight: '$20',
      }
    }
  }
});

// const PostMeta = styled('aside', {
// });

const SourceAuthor = styled('h3', {
  marginBlockStart: 0,

  variants: {
    of: {
      name: {
        marginBlockEnd: '$8',
        color: 'hsl($shade500)',
        fontSize: '$16',
        lineHeight: '$24',
      },
      intro: {
        marginBlockEnd: 0,
        color: 'hsl($shade800)',
        fontSize: '$14',
        lineHeight: '$24',
      }
    }
  }
});


const Pipe = styled('span', {
  display: 'inline-block',
  marginX: '$8',
  color: 'hsl($shade1200)',
  fontWeight: 'normal'
});

export default function Post({ post, mdxSource }: postProps) {
  const { title, subtitle, source} = post;

  return (
    <>
      <Header />
      <PostLayout layout={{ '@m992': 'tablet' }} responsive={{ '@m1200': 'noPadding' }}>
        <PostBody responsive={{ '@m992': 'tablet' }}>
          <PostTitle translated={{ '@initial': 'mobile', '@m992': 'tablet' }} withSubtitle={!!subtitle}>{title}</PostTitle>
          {subtitle && <PostSubtitle translated={{ '@initial': 'mobile' }}>{subtitle}</PostSubtitle>}
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </PostBody>
        <aside>
          <Heading position="cell">日期<Pipe>|</Pipe>原文</Heading>
          <Link href={source.url} passHref>
            <PostTitle as="a" source={{ '@initial': 'mobile' }} withSubtitle={!!source.subtitle}>{source.title}</PostTitle>
          </Link>
          {source.subtitle && <PostSubtitle source={{ '@initial': 'mobile' }}>{source.subtitle}</PostSubtitle>}
          <Divider />
          <SourceAuthor of="name">{source.author}</SourceAuthor>
          <SourceAuthor as="p" of="intro">{source.intro}</SourceAuthor>
        </aside>
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
          mainImage {
            asset {
              url
            }
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

  const post = data.allPost.map(({ title, subtitle, mainImage, description, _updatedAt, publishedTime, source, tags }: queryProps) => {
    const tagsSlug = tags.map(({ slug }) => slug);
    return ({
      title,
      subtitle,
      cover: mainImage.asset.url,
      description,
      modifiedTime: _updatedAt,
      publishedTime,
      source: {
        title: source.title,
        subtitle: source.subtitle,
        url: source.url,
        author: source.author,
        intro: source.intro
      },
      tags: tagsSlug
    })
  });

  const source = data.allPost[0].body;
  const mdxSource = await serialize(
    source,
    {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
        format: 'mdx'
      },
      parseFrontmatter: false
    }
  );

  return {
    props: {
      post: post[0],
      mdxSource
    },
  }
}
