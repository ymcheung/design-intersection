import Link from 'next/link';
import { styled } from '../stitches.config';

const Paragraph = styled('p', {
  marginBlockStart: 0,
  marginBlockEnd: '$16',
  fontSize: '$16',
  lineHeight: '$24'
});

const List = styled('ul', {
  marginBlockStart: 0,
  marginBlockEnd: '$16',
  fontSize: '$16',
  lineHeight: '$24',

  variants: {
    type: {
      unordered: {
        listStyleType: 'square'
      }
    }
  }
});

// const InlineLink = styled('a', {
//   textDecoration
// });


const MDXComponents = {
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  ul: ({ children }) => <List type="unordered">{ children }</List>,
  ol: ({ children }) => <List as="ol">{ children }</List>,
  a: ({ href, children }) => <Link href={href} passHref><a>{ children }</a></Link>
};

export default MDXComponents;
