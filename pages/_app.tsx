import type { AppProps } from 'next/app';
import '../styles/global.css';
import { Analytics } from '@vercel/analytics/react';

export default function DesignIntersection({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <Analytics />
  </>
};
