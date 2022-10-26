import { StyledFigure, StyledFigcaption } from './styled';

interface ChildrenProps {
  ratio?: '4x3';
  children?: React.ReactNode;
  caption?: React.ReactNode;
}

export default function Figure({ ratio, children, caption }: ChildrenProps) {
  return (
    <StyledFigure ratio={ratio ? ratio : undefined}>
      {children}
      {caption && <StyledFigcaption>{caption}</StyledFigcaption>}
    </StyledFigure>
  );
};
