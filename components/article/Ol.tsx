import { List } from './styled';

interface ChildrenProps {
  children?: React.ReactNode;
}

export default function ArticleOL({ children }: ChildrenProps) {
  return (<List as="ol">{children}</List>);
};
