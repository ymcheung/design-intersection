import { Paragraph } from './styled';

interface ChildrenProps {
  children?: React.ReactNode;
}

export default function ArticleP({ children }: ChildrenProps) {
  return (<Paragraph>{children}</Paragraph>);
};
