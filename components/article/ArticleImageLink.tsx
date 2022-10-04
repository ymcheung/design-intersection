import type { ComponentProps } from 'react';
import Link from 'next/link';
import { StyledLink } from './styled';

export default function ArticleImageLink({ children, href }: ComponentProps<'a'>) {
  if (!href) {
    throw new Error('should pass href as props')
  }

  const isExternal = href.startsWith('http');

  return (
    <Link href={href} passHref>
      {
        isExternal ?
          <StyledLink linkChild="image" target="_blank" rel="noopener">{children}</StyledLink> :
          <StyledLink linkChild="image">{children}</StyledLink>
      }
    </Link>
  );
};
