interface ChildrenProps {
  children?: React.ReactNode;
}

export default function Heading2({ children }: ChildrenProps) {
  return (<h2 className="article-heading article-heading-xlg sansDefault">{children}</h2>);
};
