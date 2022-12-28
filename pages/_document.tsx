import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { render } from '@master/css/render';
import { StyleSheet } from '@master/css';
import '@master/css';
import 'styles/master.css';

export default function IntersectionDocument() {
  return (
    <Html lang="zh-TW" className="box-sizing:border-box">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: 'window.MasterCSSManual=true' }}></script>
      </Head>
      <body className="f:antialiased">
        <Main />
        <NextScript />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      </body>
    </Html>
  )
}

IntersectionDocument.getInitialProps = async (ctx: DocumentContext) => {
  const { css } = render((await ctx.renderPage()).html, { StyleSheet })
  const initialProps = await Document.getInitialProps(ctx)
  return {
    ...initialProps,
    styles: (
      <>
        <style id="master-css">{css}</style>
        {initialProps.styles}
      </>
    )
  }
}
