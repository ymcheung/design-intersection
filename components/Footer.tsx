import Link from "next/link";
import { styled } from "../stitches.config";
import { Container } from "@components/layouts";
import { IntersectionLogo, Intersection } from "@elements/intersection";
import { Divider } from "@elements/divider";

const FooterBox = styled('footer', {
  paddingTop: '$24',
  paddingBottom: '$16',
  fontFamily: '$default',
  backgroundColor: 'hsl($shade1500)',

  variants: {
    responsive: {
      tablet: {
        gridArea: 'footer'
      }
    }
  }
});

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

const Logo = styled('figure', {
  display: 'grid',
  grid: 'auto / 24px auto',
  columnGap: '$8',
  margin: '0 0 $16'
});

// const LogoImage = styled('svg', {
//   width: '$24',
//   aspectRatio: 1,
//   borderRadius: '4px'
// });

const Slogan = styled('span', {
  display: 'inline-block',
  marginBottom: '$32',
  color: 'hsl($shade800)',
  fontSize: '$14',
  lineHeight: '$20'
});

const LogoBuild = styled('svg', {
  width: '160px',
  aspectRatio: '25 / 4',
});

const LogoBuildLink = styled('a', {
  display: 'block',
  marginBlockEnd: '$32',

  variants: {
    responsive: {
      wide: {
        marginBlockEnd: '$16'
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
    <FooterBox>
      <FooterLayout responsive={{ '@m1232': 'noPadding' }} layout={{'@m640': 'wide' }}>
        <section>
        <Logo>
          <IntersectionLogo position="footer" viewBox="0 0 96 96"><use xlinkHref="/sprite.svg#logoIntersection" /></IntersectionLogo>
          <Intersection position="footer">Intersection</Intersection>
        </Logo>
          <Slogan>優化、插件、高清、視頻、反饋、交互設計：已經看膩這些中國用語。</Slogan>
        </section>
        <section>
          <Link href="https://build.intersection.tw" passHref>
            <LogoBuildLink responsive={{ '@m640': 'wide' }} aria-labelledby="logoBuildTitle">
              <LogoBuild viewBox="0 0 500 80">
                <use xlinkHref="/sprite.svg#logoBuild" />
              </LogoBuild>
            </LogoBuildLink>
          </Link>
          <Divider />
          <Footnote>2016 ~ {thisYear}・<Link href="https://read.cv/ymcheung" passHref><AuthorLink target="_blank" rel="noopener">@ymcheung</AuthorLink></Link> 翻譯的文章</Footnote>
        </section>
      </FooterLayout>
    </FooterBox>
  );
}
