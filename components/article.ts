import { styled } from '../stitches.config';

export const MdxHeadings = styled('h2', {
  marginBlockStart: 0,
  marginBlockEnd: '$8',
  color: 'hsl($shade100)',

  variants: {
    level: {
      h2: {
        fontSize: '$24',
        lineHeight: '$36',
      },
      h3: {
        fontSize: '$20',
        lineHeight: '$28',
      }
    }
  }
});

export const Paragraph = styled('p', {
  '&:not(blockquote p)': {
    marginBlockStart: 0,
    marginBlockEnd: '$24',
    color: 'hsl($shade400)',
    fontSize: '$20',
    lineHeight: '$32'
  }
});

export const List = styled('ul', {
  display: 'grid',
  rowGap: '$12',
  marginBlockStart: 0,
  marginBlockEnd: '$24',
  paddingInlineStart: '$16',
  color: 'hsl($shade400)',
  fontSize: '$20',
  lineHeight: '$32',

  variants: {
    type: {
      unordered: {
        listStyleType: 'square'
      }
    }
  }
});

export const ListItem = styled('li', {
});

export const ArticleFigure = styled('figure', {
  marginBlockEnd: '$16',

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
})

export const ArticleImage = styled('img', {
  width: '100%',
  maxWidth: 'calc(100% + 32px)'
});

export const ArticleLink = styled('a', {
  color: 'hsl($shade500)'
});
