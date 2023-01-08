import '@master/css';

interface logoProps {
  position: 'header' | 'footer';
}

export default function IntersectionLogo({ position }: logoProps) {
  const header = position === 'header';
  const footer = position === 'footer';

  return (
    <>
      <svg className={`${header ? 'd:block' : 'd:inline-block'} ${header ? 'width:20' : 'width:24'} aspect-ratio:1 ${header ? 'mb:4' : 'mb:0'} ${header ? 'border-radius:3' : 'border-radius:4'}`} viewBox="0 0 96 96">
        <use xlinkHref="/sprite.svg#logoIntersection" />
      </svg>
      <span className={`intersection ${footer ? 'f:16' : 'f:12'} ${footer ? 'line-height:1.5' : 'line-height:16px'}`}>Intersection</span>
    </>
  );
}
