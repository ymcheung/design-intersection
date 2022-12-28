import Link from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '../stitches.config';
import { Container } from '@components/layouts';
import IntersectionLogo from '@elements/IntersectionLogo';
// import { IntersectionLogo, Intersection } from '@elements/intersection';

const HeaderBox = styled('header', {
  position: 'sticky',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1,
  fontFamily: '$default',
  paddingY: '$12',
  borderBottom: '1px solid hsl($shade1200)',
  backgroundColor: 'hsl($white / 0.88)',
  backdropFilter: 'blur(12px)',
});

const HomeLink = styled('a', {
  display: 'inline-block',
  textDecoration: 'none'
});

const SiteHeading = styled('strong', {
  display: 'block',
  margin: 0,
  fontSize: 0
});

const SiteHeadingHome = styled('span', {
  display: 'block',
  marginBlockEnd: '$4',
  color: 'hsl($shade800)',
  fontSize: '$14',
  fontWeight: 'normal',
  lineHeight: '$20'
});

export default function Header() {
  const router = useRouter();
  const isRootPath = router.pathname === '/';

  return (
    <HeaderBox>
      <Container responsive={{ '@m1232': 'desktop' }}>
        <SiteHeading as={isRootPath ? 'h1' : 'strong'}>
        {
          isRootPath ?
          <IntersectionLogo position="header" /> : (
            <Link href="/" passHref>
              <HomeLink>
                <SiteHeadingHome>首頁</SiteHeadingHome>
                <span className="intersection font-size:12 line-height:16px">Intersection</span>
              </HomeLink>
            </Link>
          )
        }
        </SiteHeading>
      </Container>
    </HeaderBox>
  );
}
