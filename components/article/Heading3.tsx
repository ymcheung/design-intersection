import { Headings } from './styled';

interface ChildrenProps {
  children?: React.ReactNode;
}

export default function Heading3({ children }: ChildrenProps) {
  return (<Headings article="large">{children}</Headings>);
};
