import Image from "next/image";
import { StyledFigure, StyledFigcaption } from "./styled";

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
  span: number;
}

const ImageFigcaption = ({ children, span }: ChildrenProps) => {
  return (
    <StyledFigcaption
      css={{ gridColumn: `span ${span}` }}
      responsive={{ "@initial": "mobile", "@m992": "tablet" }}
    >
      {children}
    </StyledFigcaption>
  );
};

export default function ImageGallery({
  src,
  width,
  maxWidth,
  height,
  isCover,
  alt,
  caption,
}: ImageProps) {
  return (
    <StyledFigure
      css={{
        grid: `auto / repeat(${src.length}, 1fr)`,
        "@m992": { maxWidth: maxWidth ? maxWidth : "initial" },
      }}
      cover={isCover ? { "@initial": "mobile", "@m992": "tablet" } : undefined}
      general={isCover ? undefined : true}
      gallery={{ "@initial": "mobile" }}
    >
      {src.map((url, index) => (
        <Image
          src={url}
          width={width[index]}
          height={height[index]}
          alt={alt ? alt[index] : ""}
          key={index}
        />
      ))}
      {caption && (
        <ImageFigcaption span={src.length}>{caption}</ImageFigcaption>
      )}
    </StyledFigure>
  );
}
