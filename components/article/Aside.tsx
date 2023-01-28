import Link from 'next/link';
import { useRouter } from 'next/router';
import { formatDate } from '@utils/formatDate';
import { styled } from '../../stitches.config';
import { MDXRemote } from 'next-mdx-remote';
import IntroP from '@components/article/IntroP';
import ArticleLink from '@components/article/Link';
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
    <>
      <hr className="divider display:none@m992" />
      <aside>
        <h2 className="cell-heading">原文</h2>
        <Link href={source.url} passHref>
          <a className={`d:block margin-bottom:${!!source.subtitle ? 8 :24} color:shade-100 sansDefault font-weight:bold line-height:24px`} target="_blank" rel="noopener">{source.title}</a>
        </Link>
        {source.subtitle && <p className="margin-top:0 margin-bottom:24 color:shade-800 sansDefault line-height:20px">{source.subtitle}</p>}
        <hr className="divider w:80 margin-left:0" />
        <strong className="d:block margin-bottom:4 color:shade-500 line-height:24px">{source.author}</strong>
        <div>
          <MDXRemote {...authorIntro} components={mdxComponents} />
        </div>
        <h2 className="cell-heading">日期</h2>
        <time className="d:inline-block margin-bottom:16 color:shade-800" dateTime={formatDate(publishedTime)}>
          {formatDate(publishedTime)}
        </time>
        <h2 className="cell-heading">分享</h2>
        <button className="padding-top:10 padding-bottom:8 px:12 color:shade-500 font-family:inherit f:14 line-height:1 appearance:none background-color:shade-1500 border:0 border-radius:4 cursor:pointer" type="button" onClick={() => copy(postUrl)}>複製文章網址</button>
        {value &&<span className="d:inline-block margin-left:12 color:shade-500 f:14">已複製！</span>}
      </aside>
    </>
  );
}
