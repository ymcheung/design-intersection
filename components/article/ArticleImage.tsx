import { StyledFigure, StyledImage, StyledFigcaption } from './styled';

interface ImageProps {
  src?: string;
  alt?: string;
}

export default function ArticleImage({ src, alt }: ImageProps) {
  return (
    <StyledFigure responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>
      <StyledImage src={src} alt="" />
      {alt && <StyledFigcaption responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>{alt}</StyledFigcaption>}
    </StyledFigure>
  );
};
