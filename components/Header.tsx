import Link from "next/link";
import { styled } from "../stitches.config";
import { Container } from "@components/layouts";

interface HeaderProps {
  headingTag?: string;
}

const HeaderBox = styled('header', {
  borderBottom: '1px solid hsl($shade1200)'
});

const HomeLink = styled('a', {
  display: 'block',
  textDecoration: 'none'
});

const SiteHeading = styled('strong', {
  display: 'block'
});

const SiteHeadingHome = styled('span', {
  display: 'block',
  fontSize: '1.6rem'
});

const SiteHeadingName = styled('span', {
  display: 'block',
  fontSize: '1.2rem'
});

export default function Header({ headingTag }: HeaderProps ) {
  return (
    <HeaderBox>
      <Container>
        <Link href="/" passHref>
          <HomeLink>
            <SiteHeading>
              <SiteHeadingHome>首頁</SiteHeadingHome>
              <SiteHeadingName>Intersection</SiteHeadingName>
            </SiteHeading>
          </HomeLink>
        </Link>
      </Container>
    </HeaderBox>
  );
}
