import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";

export default function DesignIntersection({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights route={router.pathname} />
      <Analytics />
    </>
  );
}
