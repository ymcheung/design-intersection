import { createElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '../stitches.config';
import { Container } from '@components/layouts';
import IntersectionLogo from '@elements/IntersectionLogo';
// import { IntersectionLogo, Intersection } from '@elements/intersection';

interface HeaderProps {
  children?: React.ReactNode
}

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


// const SiteHeading = styled('strong', {
//   display: 'block',
//   margin: 0,
//   fontSize: 0
// });

export default function Header() {
  const router = useRouter();
  const isRootPath = router.pathname === '/';

  const SiteHeading = ({ children }: HeaderProps) => {
    return isRootPath ? <h1 className="margin:0 f:0">{children}</h1> : <strong className="d:block f:0">{children}</strong>
  }

  return (
    <header className="position:sticky top:0 right:0 left:0 z-index:1 py:12 background-color:hsl(0|100%|100%/0.88) border-bottom:1|solid|shade-1200 backdrop-filter:blur(12px)">
      <div className="container">
        <SiteHeading>
        {
          isRootPath ?
          <IntersectionLogo position="header" /> : (
            <Link href="/" passHref>
              <a className="d:inline-block text-decoration:none">
                <span className="d:block margin-bottom:4 color:shade-800 f:14 font-weight:normal line-height:20px">首頁</span>
                <span className="sansDefault intersection font-size:12 line-height:16px">Intersection</span>
              </a>
            </Link>
          )
        }
        </SiteHeading>
      </div>
    </header>
  );
}
