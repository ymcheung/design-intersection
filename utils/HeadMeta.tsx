import Head from 'next/head';
import * as headMetaDefault from '../constant';

type HeadMetaProps = {
  title: string;
  description: string;
  slug: string;
  dateModified: string;
  datePublished: string;
  ogCover: {
    url: string;
    dimensions: {
      width: number;
      height: number;
    }
    alt: string;
  }
} & typeof defaultProps;

const defaultProps = {
  title: headMetaDefault.TITLE,
  description: headMetaDefault.DESCRIPTION,
  slug: '',
  ogCover: {
    url: `${process.env.NEXT_PUBLIC_HOSTNAME}/ogCover.jpg`,
    dimensions: {
      width: 1200,
      height: 630
    },
    alt: 'Intersection 的標誌'
  }
};

HeadMeta.defaultProps = defaultProps;

export default function HeadMeta({ title, description, slug, dateModified, datePublished, ogCover }: HeadMetaProps) {
  const handleOgType = () => {
    if (!slug || slug.includes('all')) return 'website';

    return 'article';
  };

  const schema = () => {
    const website = {
      '@type': 'Website',
      name: headMetaDefault.TITLE,
      url: process.env.NEXT_PUBLIC_HOSTNAME
    };

    const blogPosting = {
      '@type': 'BlogPosting',
      url: `${process.env.NEXT_PUBLIC_HOSTNAME}${slug}`,
      name: title,
      dateModified: dateModified,
      datePublished: datePublished,
      author: [
        {
          '@type': 'Person',
          name: 'Yuming Cheung',
          url: 'https://read.cv/ymcheung',
        },
      ],
      publisher: {
        '@type': 'Organization',
        name: 'Intersection',
        url: process.env.NEXT_PUBLIC_HOSTNAME,
        logo: {
          '@type': 'ImageObject',
          name: 'Intersection: 優化、插件、高清、視頻、反饋、交互設計：已經看膩這些中國網路媒體用語。',
          width: 400,
          height: 400,
          url: `${process.env.NEXT_PUBLIC_HOSTNAME}/intersection.png`,
        },
      },
    }

    return JSON.stringify({
      '@context': 'https://schema.org/',
      '@graph': [
        website,
        ...(slug ? [blogPosting] : [])
      ]
    })
  }

  const { url: ogUrl, dimensions: { width: ogWidth, height: ogHeight }, alt: ogAlt } = ogCover;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOSTNAME}${slug}`} />
      <link rel="icon" sizes="any" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/intersection.svg" />
      <link rel="apple-touch-icon" href="/intersection.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <meta property="og:type" content={handleOgType()} />
      <meta property="og:site_name" content={headMetaDefault.TITLE} />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_HOSTNAME}${slug}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogUrl} />
      <meta property="og:image:width" content={`${ogWidth}`} />
      <meta property="og:image:height" content={`${ogHeight}`} />
      <meta property="og:image:alt" content={ogAlt} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${process.env.NEXT_PUBLIC_HOSTNAME}${slug}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogUrl} />
      <meta property="twitter:image:alt" content={ogAlt} />
      <meta name="format-detection" content="telephone=no" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema() }}
      />
    </Head>);
}
