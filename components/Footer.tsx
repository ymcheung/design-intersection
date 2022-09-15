import Link from "next/link";
import { styled } from "../stitches.config";
import { Container } from "@components/layouts";

const FooterBox = styled('footer', {
  paddingTop: '$24',
  paddingBottom: '$16',
  fontFamily: '$default',
  backgroundColor: 'hsl($shade1500)'
});

const FooterLayout = styled(Container, {
  display: 'grid',

  variants: {
    responsive: {
      wide: {
        grid: 'auto / 1fr 1fr'
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

const LogoImage = styled('svg', {
  width: '$24',
  aspectRatio: 1,
  borderRadius: '4px'
});

const Intersection = styled('figcaption', {
  marginBottom: '-$2',
  paddingTop: '$2',
  color: 'hsl($shade100)',
  fontSize: '1.6rem',
  fontWeight: 600,
  fontStyle: 'italic',
  letterSpacing: '4px',
  lineHeight: '$24',
  textTransform: 'uppercase'
});

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

const LinkBlock = styled('a', {
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

const Divider = styled('hr', {
  marginBlockStart: 0,
  marginBlockEnd: '$16',
  borderBottom: '1px solid $shade1200'
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
      <FooterLayout responsive={{ '@m640': 'wide' }}>
        <section>
        <Logo>
          <LogoImage viewBox="0 0 96 96"><use xlinkHref="/sprite.svg#logoIntersection" /></LogoImage>
          <Intersection>Intersection</Intersection>
        </Logo>
          <Slogan>優化、插件、高清、視頻、反饋、交互設計：已經看膩這些中國用語。</Slogan>
        </section>
        <section>
          <Link href="https://build.intersection.tw" passHref>
            <LinkBlock responsive={{ '@m640': 'wide' }}>
              <LogoBuild viewBox="0 0 500 80">
                <use xlinkHref="/sprite.svg#logoBuild" />
              </LogoBuild>
            </LinkBlock>
          </Link>
          <Divider />
          <Footnote>2016 - {thisYear}・@ymcheung 翻譯的文章</Footnote>
        </section>
      </FooterLayout>
    </FooterBox>
  );
}
