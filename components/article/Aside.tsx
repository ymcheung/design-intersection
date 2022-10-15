import Link from 'next/link';
import { formatDate } from '@utils/formatDate';
import { styled } from '../../stitches.config';
import { MDXRemote } from 'next-mdx-remote';
import { Heading } from '@elements/headings';
import { PostTitle, PostSubtitle } from '@elements/postTitles';
import ArticleLink from '@components/article/Link';
import IntroP from '@components/article/IntroP';
import { Divider } from '@elements/divider';

interface AsideProps {
  authorIntro: {
    compiledSource: string;
  }
  publishedTime: string;
  source: {
    url: string;
    title: string;
    subtitle?: string;
    author: string;
  }
}

const SourceAuthor = styled('h3', {
  marginBlockStart: 0,

  variants: {
    of: {
      name: {
        marginBlockEnd: '$4',
        color: 'hsl($shade500)',
        fontSize: '$16',
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

export default function Aside({ authorIntro, publishedTime, source }: AsideProps) {
  const mdxComponents = {
    p: IntroP,
    a: ArticleLink
  };

  return (
    <aside>
      <Heading position="cell">原文</Heading>
      <Link href={source.url} passHref>
        <PostTitle as="a" source={{ '@initial': 'mobile' }} withSubtitle={!!source.subtitle} target="_blank" rel="noopener">{source.title}</PostTitle>
      </Link>
      {source.subtitle && <PostSubtitle source={{ '@initial': 'mobile' }}>{source.subtitle}</PostSubtitle>}
      <Divider />
      <SourceAuthor of="name">{source.author}</SourceAuthor>
      <div>
        <MDXRemote {...authorIntro} components={mdxComponents} />
      </div>
      <Heading position="cell">日期</Heading>
      <Time dateTime={formatDate(publishedTime)} floor={{ '@initial': 'ground', '@m992': 'aside' }}>
        {formatDate(publishedTime)}
      </Time>
    </aside>
  );
}
