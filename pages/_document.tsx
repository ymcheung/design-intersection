import { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';
import { globalStyles } from '@utils/globalStyles';

export default function IntersectionDocument() {
  globalStyles();

  return (
    <Html lang="zh-TW">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
