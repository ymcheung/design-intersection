import Image from 'next/image';
import { StyledFigure, StyledFigcaption } from './styled';

interface ImageProps {
  src: string[];
  width: number[];
  maxWidth?: string;
  height: number[];
  isCover?: boolean;
  alt?: string[];
  caption?: React.ReactNode;
}

interface ChildrenProps {
  children?: React.ReactNode;
}

const ImageFigcaption = ({ children }: ChildrenProps) => {
  return (
    <StyledFigcaption responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>
      {children}
    </StyledFigcaption>
  );
}

export default function ArticleImage({ src, width, maxWidth, height, isCover, alt, caption }: ImageProps) {
  return (
    <StyledFigure
      css={{ '@m992': { maxWidth: maxWidth }}}
      cover={isCover ? { '@initial': 'mobile', '@m992': 'tablet' } : undefined}
      general={isCover ? undefined : true}
    >
      {src.map((url, index) =>
        <Image
          src={url} width={width[index]}
          height={height[index]}
          layout="responsive"
          alt={alt ? alt[index] : ''} key={index}
        />
      )}
      {caption && <ImageFigcaption>{caption}</ImageFigcaption>}
    </StyledFigure>
  );
};
