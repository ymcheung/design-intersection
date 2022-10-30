import Link from 'next/link';
import { useRouter } from 'next/router';
import { formatDate } from '@utils/formatDate';
import { styled } from '../../stitches.config';
import { MDXRemote } from 'next-mdx-remote';
import { Heading } from '@elements/headings';
import { PostTitle, PostSubtitle } from '@elements/postTitles';
import ArticleLink from '@components/article/Link';
import IntroP from '@components/article/IntroP';
import { Divider } from '@elements/divider';
import useCopyToClipboard from '@utils/useCopyToClipboard';

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
  marginBlockEnd: '$16',
  color: 'hsl($shade800)',
  fontSize: '$16'
})

const CopyUrlButton = styled('button', {
  paddingBlockStart: '$10',
  paddingBlockEnd: '$8',
  paddingX: '$12',
  color: 'hsl($shade500)',
  fontFamily: 'inherit',
  fontSize: '$14',
  lineHeight: 1,
  appearance: 'none',
  background: 'hsl($shade1500)',
  border: 0,
  borderRadius: '4px',
  cursor: 'pointer'
});

const CopiedMessage = styled('span', {
  display: 'inline-block',
  marginInlineStart: '$12',
  color: 'hsl($shade500)',
  fontSize: '$14'
});

export default function Aside({ authorIntro, publishedTime, source }: AsideProps) {
  const mdxComponents = {
    p: IntroP,
    a: ArticleLink
  };

  const router = useRouter();
  const postUrl = `${process.env.NEXT_PUBLIC_HOSTNAME}${router.asPath}`
  const [value, copy] = useCopyToClipboard();

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
      <Time dateTime={formatDate(publishedTime)}>
        {formatDate(publishedTime)}
      </Time>
      <Heading position="cell">分享</Heading>
      <CopyUrlButton type="button" onClick={() => copy(postUrl)}>複製文章網址</CopyUrlButton>
      <CopiedMessage>{value && '已複製！'}</CopiedMessage>
    </aside>
  );
}
