interface ChildrenProps {
  children?: React.ReactNode;
}

export default function IntroP({ children }: ChildrenProps) {
  return (
    <p className="margin-top:0:not(blockquote_p):not(pre_p) {margin-bottom:16 color:shade-800 f:14 line-height:24px sansDefault break-word}:not(blockquote_p)">
      {children}
    </p>
  );
};
