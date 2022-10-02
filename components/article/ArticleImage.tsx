import Image from 'next/image';
import { StyledFigure, StyledFigcaption } from './styled';

interface ImageProps {
  src: string;
  figWidth?: string;
  figHeight?: string;
  width: number;
  height: number;
  alt?: string;
  caption?: string;
}

export default function ArticleImage({ src, figWidth, figHeight, width, height, alt, caption }: ImageProps) {
  return (
    <StyledFigure css={{ width: figWidth, height: figHeight }} responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>
      <Image src={src} width={width} height={height} layout="responsive" alt={alt}  />
      {
        caption &&
        <StyledFigcaption responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>{caption}</StyledFigcaption>
      }
    </StyledFigure>
  );
};
