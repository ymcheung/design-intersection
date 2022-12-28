import React from 'react';
import '@master/css';
import 'styles/master.css';

interface logoProps {
  position: 'header' | 'footer';
}

export default function IntersectionLogo({ position }: logoProps) {
  const header = position === 'header';
  const footer = position === 'footer';

  return (
    <>
      <svg className={`d:${header ? 'block' : 'inline-block'} w:${header ? 20 : 24} aspect-ratio:1 mb:${header ? 4 : 0} border-radius:${header ? 3 : 4}`} viewBox="0 0 96 96">
        <use xlinkHref="/sprite.svg#logoIntersection" />
      </svg>
      <span className={`intersection f:${footer ? 16 : 12} line-height:${footer ? 1.5 : '16px'}`}>Intersection</span>
    </>
  );
}
