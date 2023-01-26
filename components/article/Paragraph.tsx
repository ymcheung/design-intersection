// import { Paragraph } from './styled';

interface ChildrenProps {
  children?: React.ReactNode;
}

export default function ArticleP({ children }: ChildrenProps) {
  return (
    <p className="margin-top:0:not(blockquote_p):not(pre_p) margin-bottom:24 color:shade-500 sansDefault font-size:clamp(18px,2.6vmin,20px) line-height:1.6 break-word padding-top:24+.article-heading">{children}</p>
  );
};
