import Link from "next/link";
import { styled } from "../stitches.config";
import '@master/css';
import 'styles/master.css';
import { Container } from "@components/layouts";
import IntersectionLogo from "@elements/IntersectionLogo";


const FooterLayout = styled(Container, {
  display: 'grid',

  variants: {
    layout: {
      wide: {
        grid: 'auto / 1fr 1fr',
        columnGap: '$16'
      }
    }
  }
});

const AuthorLink = styled('a', {
  color: 'inherit'
});

const Footnote = styled('span', {
  display: 'inline-block',
  color: 'hsl($shade800)',
  fontSize: '$14',
  lineHeight: '$20'
});

export default function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="fontDefault pt:24 pb:16 background-color:shade-1500 grid-area:footer@m768">
      <FooterLayout responsive={{ '@m1232': 'desktop' }} layout={{'@m640': 'wide' }}>
        <section>
          <figure className="d:grid grid-template-columns:24|auto} gap-x:8 mt:0 mx:0 mb:16">
            <IntersectionLogo position="footer" />
          </figure>
          <span className="d:inline-block mb:32 color:shade-800 font-size:14 line-height:20px">
            優化、插件、高清、視頻、反饋、交互設計：已經看膩這些中國用語。
          </span>
        </section>
        <section>
          <Link href="https://build.intersection.tw" passHref>
            <a className="d:block mb:32 mb:16@m640">
              <svg className="w:160 aspect-ratio:25/4" viewBox="0 0 500 80">
                <title>喜歡的 UI 就要親手做出來</title>
                <use xlinkHref="/sprite.svg#logoBuild" />
              </svg>
            </a>
          </Link>
          <hr className="divider w:80 margin-left:0" />
          <Footnote>2016 ~ {thisYear}・<Link href="https://read.cv/ymcheung" passHref><AuthorLink target="_blank" rel="noopener">@ymcheung</AuthorLink></Link> 翻譯的文章</Footnote>
        </section>
      </FooterLayout>
    </footer>
  );
}
