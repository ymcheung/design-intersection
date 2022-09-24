import { StyledBlockQuote } from './styled';

interface ChildrenProps {
  children?: React.ReactNode;
}

export default function ArticleBlockquote({ children }: ChildrenProps) {
  return (<StyledBlockQuote responsive={{ '@initial': 'mobile', '@m992': 'tablet'}}>{children}</StyledBlockQuote>);
};
