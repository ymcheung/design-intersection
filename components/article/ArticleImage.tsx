import { StyledFigure, StyledImage, StyledFigcaption } from './styled';

interface ImageProps {
  src?: string;
  alt?: string;
  title?: string;
}

export default function ArticleImage({ src, alt, title }: ImageProps) {
  return (
    <StyledFigure responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>
      <StyledImage src={src} alt={alt} />
      {title && <StyledFigcaption responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>{title}</StyledFigcaption>}
    </StyledFigure>
  );
};
