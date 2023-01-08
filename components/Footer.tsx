import Link from "next/link";
import '@master/css';
import IntersectionLogo from "@elements/IntersectionLogo";

export default function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="fontDefault pt:24 pb:16 background-color:shade-1500 grid-area:footer@m768">
      <section className="container d:grid grid-template-columns:1fr|1fr@m640 gap-x:16@m640 margin-bottom:32">
        <div>
          <figure className="d:grid grid-template-columns:24|auto gap-x:8 mt:0 mx:0 mb:16">
            <IntersectionLogo position="footer" />
          </figure>
          <span className="d:inline-block mb:32 color:shade-800 font-size:14 line-height:20px">
            優化、插件、高清、視頻、反饋、交互設計：已經看膩這些中國用語。
          </span>
        </div>
        <div>
          <Link href="https://build.intersection.tw" passHref>
            <a className="d:block mb:32 mb:16@m640">
              <svg className="w:160 aspect-ratio:25/4" viewBox="0 0 500 80">
                <title>喜歡的 UI 就要親手做出來</title>
                <use xlinkHref="/sprite.svg#logoBuild" />
              </svg>
            </a>
          </Link>
          <hr className="divider w:80 margin-left:0" />
          <span className="d:inline-block color:shade-800 font-size:14 line-height:20px">2016 ~ {thisYear}・<Link href="https://read.cv/ymcheung" passHref><a className="color:inherit" target="_blank" rel="noopener">@ymcheung</a></Link> 翻譯的文章</span>
        </div>
      </section>
    </footer>
  );
}
