import Image from 'next/image';
import { styled } from '../stitches.config';

export const MdxHeadings = styled('h2', {
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

export const Paragraph = styled('p', {
  '&:not(blockquote p)': {
    marginBlockStart: 0,
    marginBlockEnd: '$24',
    color: 'hsl($shade400)',
    fontSize: '$18',
    lineHeight: '$28'
  }
});

export const List = styled('ul', {
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

export const ArticleImage = styled(Image, {
  variants: {
    responsive: {
      mobile: {
        marginX: '-$16'
      },
      tablet: {
        marginX: 0
      }
    }
  }
});
