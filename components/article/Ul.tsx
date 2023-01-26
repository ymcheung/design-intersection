import { List } from './styled';

interface ChildrenProps {
  children?: React.ReactNode;
}

export default function ArticleUL({ children }: ChildrenProps) {
  return (<ul className="d:grid gap-x:12 margin-top:0 margin-bottom:24 padding-left:18 color:shade-500 sansDefault line-height:1.6 list-style:square article-paragraph">{children}</ul>);
};
