import Head from 'next/head';
import * as headMetaDefault from '../constant';

type HeadMetaProps = {
  title: string;
  description: string;
  slug: string;
  ogCover: string;
} & typeof defaultProps;

const defaultProps = {
  title: headMetaDefault.TITLE,
  description: headMetaDefault.DESCRIPTION,
  slug: '',
  ogCover: '/home/ogCover.jpg'
};

HeadMeta.defaultProps = defaultProps;

export default function HeadMeta({ title, description, slug, ogCover }: HeadMetaProps) {
  return (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOSTNAME}${slug}`} />
    <link rel="icon" sizes="any" href="/favicon.ico" />
    <link rel="icon" type="image/svg+xml" href="/intersecrtion.svg" />
    <link rel="apple-touch-icon" href="/intersection.png" />
    <link rel="manifest" href="/favicons/site.webmanifest" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${process.env.NEXT_PUBLIC_HOSTNAME}${slug}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOSTNAME}og${ogCover}`} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={`${process.env.NEXT_PUBLIC_HOSTNAME}${slug}`} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_HOSTNAME}og${ogCover}`} />
    <meta name="format-detection" content="telephone=no" />
    {/* <script type="application/ld+json" set:html={schema}></script> */}
  </Head>);
}
