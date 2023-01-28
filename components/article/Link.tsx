import type { ComponentProps } from 'react';
import Link from 'next/link';

export default function ArticleLink({ children, href }: ComponentProps<'a'>) {
  if (!href) {
    throw new Error('should pass href as props')
  }

  const isExternal = href.startsWith('http');

  return (
    <Link href={href} passHref>
      <a className="color:shade-500"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? "noopener" : undefined}>
        {children}
      </a>
    </Link>
  );
};
