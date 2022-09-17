import Link from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '../stitches.config';
import { Container } from '@components/layouts';
import { IntersectionLogo, Intersection } from '@elements/intersection';

const HeaderBox = styled('header', {
  position: 'sticky',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1,
  fontFamily: '$default',
  paddingTop: '$12',
  paddingBottom: '$8',
  borderBottom: '1px solid hsl($shade1200)',
  backgroundColor: 'hsl($white / 0.88)',
  backdropFilter: 'blur(12px)'
});

const HomeLink = styled('a', {
  display: 'block',
  textDecoration: 'none'
});

const SiteHeading = styled('strong', {
  display: 'block',
  margin: 0
});

const SiteHeadingHome = styled('span', {
  display: 'block',
  color: 'hsl($shade800)',
  fontSize: '$16',
  fontWeight: 'normal',
  lineHeight: '$20'
});

export default function Header() {
  const router = useRouter();
  const isRootPath = router.pathname === '/';

  return (
    <HeaderBox>
      <Container responsive={{ '@m1200': 'noPadding' }}>
        <SiteHeading as={isRootPath ? 'h1' : 'strong'}>
        {
          isRootPath ?
          <>
            <IntersectionLogo position="header" viewBox="0 0 96 96">
              <use xlinkHref="/sprite.svg#logoIntersection" />
            </IntersectionLogo>
            <Intersection position="header">Intersection</Intersection>
          </> : (
            <Link href="/" passHref>
              <HomeLink>
                <SiteHeadingHome>首頁</SiteHeadingHome>
                <Intersection position="header">Intersection</Intersection>
              </HomeLink>
            </Link>
          )
        }
        </SiteHeading>
      </Container>
    </HeaderBox>
  );
}
