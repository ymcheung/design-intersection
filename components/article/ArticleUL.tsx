import { List } from './styled';

interface ChildrenProps {
  children?: React.ReactNode;
}

export default function ArticleUL({ children }: ChildrenProps) {
  return (<List type="unordered">{children}</List>);
};
