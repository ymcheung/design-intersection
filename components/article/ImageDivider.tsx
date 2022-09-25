import Image from 'next/image';

interface ImageProps {
  src: string;
  width: number;
  height: number;
}

export default function ImageDivider({ src, width, height }: ImageProps) {
  return (<Image src={src} layout="fixed" width={width} height={height} alt="" />);
};
