import type { GetStaticPropsContext } from 'next';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '@components/MDXComponents';
import { formatDate } from '@utils/formatDate';
import { styled } from '../stitches.config';
import Header from '@components/Header';
import { Container } from '@components/layouts';
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
  mainImage: {
    asset: {
      url: string;
    }
  };
  body: string;
  description: string;
  _updatedAt: string;
  publishedTime: string;
  tags: [{
    slug: string
  }];
}

interface postProps {
  post: {
    title: string;
    cover: string;
    description: string;
    modifiedTime: string;
    publishedTime: string;
    tags: string[];
  },
  source: {
    compiledSource: string;
  }
}

const PostLayout = styled(Container, {
  fontFamily: '$default',

  variants: {
    layout: {
      tablet: {
        display: 'grid',
        grid: 'auto / 4fr 1fr',
        columnGap: '$64'
      }
    }
  }
});

const PostBody = styled('article', {

});

export default function Post({ post, source }: postProps) {
  const { title } = post;

  return (
    <>
      <Header />
      <PostLayout layout={{ '@m992': 'tablet' }} responsive={{ '@m1200': 'noPadding' }}>
        <article>
          <h1>{title}</h1>
          <MDXRemote {...source} components={MDXComponents} />
        </article>
        <aside>

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

  const paths = data.allPost.map(({ slug }: staticPathProps) => ({ params: { slug: slug.current }}));

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
          mainImage {
            asset {
              url
            }
          }
          body
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

  const post = data.allPost.map(({ title, mainImage, description, _updatedAt, publishedTime, tags }: queryProps) => {
    const tagsSlug = tags.map(({ slug }) => slug);
    return ({
      title,
      cover: mainImage.asset.url,
      description,
      modifiedTime: _updatedAt,
      publishedTime,
      tags: tagsSlug
    })
  });

  const source = data.allPost[0].body;
  const mdxSource = await serialize(
    source,
    {
    // made available to the arguments of any custom mdx component
    // MDX's available options, see the MDX docs for more info.
    // https://mdxjs.com/packages/mdx/#compilefile-options
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'mdx'
    },
    // Indicates whether or not to parse the frontmatter from the mdx source
    parseFrontmatter: false,
  }
  );

  return {
    props: {
      post: post[0],
      source: mdxSource
    },
  }
}
