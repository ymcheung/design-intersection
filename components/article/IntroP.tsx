import { Paragraph } from './styled';

interface ChildrenProps {
  children?: React.ReactNode;
}

export default function IntroP({ children }: ChildrenProps) {
  return (
    <Paragraph position="intro">{children}</Paragraph>
  );
};
