interface ChildrenProps {
  children?: React.ReactNode;
}

export default function Heading3({ children }: ChildrenProps) {
  return (<h3 className="article-heading article-heading-lg sansDefault">{children}</h3>);
};
