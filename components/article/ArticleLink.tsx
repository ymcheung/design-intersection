import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { StyledLink } from './styled';

interface ArticleLinkProps {
  children: React.ReactNode
  href: string;
}

type AnchorProps = JSX.IntrinsicElements['a'] & {
  href: string;
  children: React.ReactNode
} & LinkProps;

// React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function ArticleLink({ children, href }: AnchorProps) {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};
