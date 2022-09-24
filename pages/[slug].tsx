import type { GetStaticPropsContext } from 'next';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Heading2 from '@components/article/Heading2';
import Heading3 from '@components/article/Heading3';
import ArticleP from '@components/article/ArticleP';
import ArticleUL from '@components/article/ArticleUL';
import ArticleOL from '@components/article/ArticleOL';
import ArticleLink from '@components/article/ArticleLink';
import ArticleImage from '@components/article/ArticleImage';
import Link from 'next/link';
import { formatDate } from '@utils/formatDate';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
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
  }
  postBody: {
    compiledSource: string;
  },
  authorIntro: {
    compiledSource: string;
  }
}

interface ChildrenProps {
  children: React.ReactNode;
}

interface HrefProp extends ChildrenProps {
  href: string;
}

interface OrderedListProp extends ChildrenProps {
  startNumber: number;
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

  '& a': {
    color: 'hsl($shade500)'
  }
});

const PostTitle = styled('h1', {
  marginBlockStart: 0,
  marginBlockEnd: '$16',
  color: 'hsl($shade100)',

  variants: {
    translated: {
      mobile: {
        fontSize: '$28',
        lineHeight: '$36'
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
        fontSize: '$20',
        lineHeight: '$28',
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

const SourceAuthor = styled('h3', {
  marginBlockStart: 0,

  variants: {
    of: {
      name: {
        marginBlockEnd: '$4',
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

const Time = styled('time', {
  display: 'inline-block',
  color: 'hsl($shade800)',
  fontSize: '$16',

  variants: {
    floor: {
      ground: {
        marginBlockEnd: '$64'
      },
      aside: {
        marginBlockEnd: 0
      }
    }
  }
})

// const Pipe = styled('span', {
//   display: 'inline-block',
//   width: '1px',
//   height: '$20',
//   marginX: '$8',
//   verticalAlign: 'text-top',
//   backgroundColor: 'hsl($accent / 0.5)'
// });

export default function Post({ post, postBody, authorIntro }: postProps) {
  const { title, subtitle, publishedTime, source } = post;

  // const OlWithStartNumber = ({ startNumber, children }: OrderedListProp) => {
  //   const Ol = styled('ol', {
  //     marginBlockStart: 0
  //   });

  //   const Li = styled('li', {
  //     fontSize: '$18',
  //     listStyleType: 'square'
  //   });

  //   return (<Ol start={startNumber}><Li>{children}</Li></Ol>);
  // }

  const mdxComponents = {
    h2: Heading2,
    h3: Heading3,
    p: ArticleP,
    ul: ArticleUL,
    ol: ArticleOL,
    // a: ArticleLink,
    img: ArticleImage
    // blockquote: ({ children }: ChildrenProps) =>
    //   <ArticleBlockQuote responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>{children}</ArticleBlockQuote>,
    // hr: () => <Divider position="article" />
  };

  return (
    <>
      <Header />
      <PostLayout layout={{ '@m992': 'tablet' }} responsive={{ '@m1200': 'noPadding' }}>
        <PostBody>
          <PostTitle translated={{ '@initial': 'mobile', '@m992': 'tablet' }} withSubtitle={!!subtitle}>{title}</PostTitle>
          {subtitle && <PostSubtitle translated={{ '@initial': 'mobile' }}>{subtitle}</PostSubtitle>}
          <MDXRemote {...postBody} components={mdxComponents} />
        </PostBody>
        <aside>
          <Heading position="cell">原文</Heading>
          <Link href={source.url} passHref>
            <PostTitle as="a" source={{ '@initial': 'mobile' }} withSubtitle={!!source.subtitle}>{source.title}</PostTitle>
          </Link>
          {source.subtitle && <PostSubtitle source={{ '@initial': 'mobile' }}>{source.subtitle}</PostSubtitle>}
          <Divider />
          <SourceAuthor of="name">{source.author}</SourceAuthor>
          <SourceAuthor as="p" of="intro"><MDXRemote {...authorIntro} /></SourceAuthor>
          <Heading position="cell">日期</Heading>
          <Time dateTime={formatDate(publishedTime)} floor={{ '@initial': 'ground', '@m992': 'aside' }}>
            {formatDate(publishedTime)}
          </Time>
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
    },
  }
}
