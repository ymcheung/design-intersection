import Image from 'next/image';
import classNames from 'classnames';
import { StyledFigure, StyledFigcaption } from './styled';

interface ImageProps {
  src: string;
  width: number;
  maxWidth?: string;
  height: number;
  isCover?: boolean;
  alt?: string;
  caption?: React.ReactNode;
}

interface ChildrenProps {
  children?: React.ReactNode;
}

export default function ArticleImage({ src, width, maxWidth, height, isCover, alt, caption }: ImageProps) {
  const ImageFigcaption = ({ children }: ChildrenProps) => {
    return (
      <StyledFigcaption css={{ '@m992': { marginInlineEnd: maxWidth ? '-$64' : 'initial' }}} responsive={{ '@initial': 'mobile', '@m992': 'tablet' }}>
        {children}
      </StyledFigcaption>
    );
  }

  return (
    // <StyledFigure
    //   css={{ maxWidth: maxWidth }}
    //   cover={isCover ? { '@initial': 'mobile', '@m992': 'tablet' } : undefined}
    //   general={isCover ? undefined : true}
    // >
    // <figure className={`${maxWidth ? `max-width:${maxWidth}` : ''}${isCover ? '' : ''}`}>
    <figure className={
      classNames('article-img-figure',
        { [`max-width:${maxWidth}`]: !!maxWidth },
        'mb:32',
        isCover ? 'mx:-16 mx:auto@m992' : 'mx:auto' )
    }>
      <Image src={src} width={width} height={height} layout="responsive" alt={alt} priority={isCover} />
      {
        caption && <ImageFigcaption>{caption}</ImageFigcaption>
      }
    </figure>
    // </StyledFigure>
  );
};
