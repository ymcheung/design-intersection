import type { ComponentProps } from 'react';
import Link from 'next/link';
import { StyledLink } from './styled';

export default function ArticleLink({ children, href }: ComponentProps<'a'>) {
  if (!href) {
    throw new Error('should pass href as props')
  }

  const isExternal = href.startsWith('http');

  return (
    <Link href={href} passHref>
      {
        isExternal ?
          <StyledLink target="_blank" rel="noopener">{children}</StyledLink> :
          <StyledLink>{children}</StyledLink>
      }
    </Link>
  );
};
