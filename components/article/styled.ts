import { styled } from '../../stitches.config';

export const Headings = styled('h2', {
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

export const StyledLink = styled('a', {
  color: 'hsl($shade500)'
});


export const StyledFigure = styled('figure', {
  marginBlockStart: 0,
  marginBlockEnd: '$24',

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

export const StyledImage = styled('img', {
  width: '100%',
  maxWidth: 'calc(100% + 32px)',
  marginBlockEnd: '$8'
});


export const StyledFigcaption = styled('figcaption', {
  color: 'hsl($shade800)',
  fontSize: '$16',
  lineHeight: '$24',

  variants: {
    responsive: {
      mobile: {
        marginX: '$16'
      },
      tablet: {
        marginX: 0
      }
    }
  }
});

export const ArticleBlockQuote = styled('blockquote', {
  marginBlockStart: 0,
  marginBlockEnd: '$24',
  marginX: 0,
  paddingX: '$32',

  variants: {
    responsive: {
      mobile: {
        paddingX: '$32'
      },
      tablet: {
        paddingX: '$64'
      }
    }
  },

  '& p': {
    position: 'relative',
    marginY: 0,
    color: 'hsl($shade100)',
    fontSize: '$20',
    fontWeight: 'bold',
    lineHeight: '$32',

    '&::before': {
      position: 'absolute',
      left: '-$24',
      content: '「',
      color: 'hsl($accent / 0.5)'
    },

    '&::after': {
      content: '」',
      color: 'hsl($accent / 0.5)'
    }
  }
})
