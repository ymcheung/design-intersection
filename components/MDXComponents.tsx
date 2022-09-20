import Link from 'next/link';
import { styled } from '../stitches.config';

interface ChildrenProps {
  children: React.ReactNode;
}

interface HrefProp extends ChildrenProps {
  href: string;
}

interface OrderedListProp extends ChildrenProps {
  startNumber: number;
}

const MdxHeadings = styled('h2', {
  marginBlockStart: 0,
  marginBlockEnd: '$8',
  color: 'hsl($shade100)',

  variants: {
    level: {
      h2: {
        fontSize: '$20',
        lineHeight: '$32',
      },
      h3: {
        fontSize: '$16',
        lineHeight: '$24',
      }
    }
  }
});

const Paragraph = styled('p', {
  '&:not(blockquote p)': {
    marginBlockStart: 0,
    marginBlockEnd: '$24',
    color: 'hsl($shade400)',
    fontSize: '$18',
    lineHeight: '$28'
  }
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

function OlWithStartNumber({ startNumber, children }: OrderedListProp) {
  const Ol = styled('ol', {
    marginBlockStart: 0
  });

  const Li = styled('li', {
    fontSize: '$18',
    listStyleType: 'square'
  });

  return <Ol start={startNumber}><Li>{children}</Li></Ol>
}

// const OlWithStartNumber = styled('ol', {

// });

// const InlineLink = styled('a', {
//   textDecoration
// });


const MDXComponents = {
  h2: ({ children }: ChildrenProps) => <MdxHeadings level="h2">{children}</MdxHeadings>,
  h3: ({ children }: ChildrenProps) => <MdxHeadings as="h3" level="h3">{children}</MdxHeadings>,
  p: ({ children }: ChildrenProps) => <Paragraph>{children}</Paragraph>,
  strong: ({ children }: ChildrenProps) => <strong>{children}</strong>,
  ul: ({ children }: ChildrenProps) => <List type="unordered">{ children }</List>,
  ol: ({ children }: ChildrenProps) => <List as="ol">{ children }</List>,
  a: ({ href, children }: HrefProp) =>
    <Link href={href} passHref><a>{children}</a></Link>,
  OlWithStartNumber
};

export default MDXComponents;
