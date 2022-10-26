import { Headings } from './styled';

interface ChildrenProps {
  children?: React.ReactNode;
}

export default function Heading2({ children }: ChildrenProps) {
  return (<Headings article="xlarge">{children}</Headings>);
};
