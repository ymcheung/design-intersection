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
    marginBlockStart: 0
  },
  variants: {
    position: {
      article: {
        '&:not(blockquote p)': {
          marginBlockEnd: '$24',
          color: 'hsl($shade400)',
          fontSize: '$20',
          lineHeight: '$32'
        }
      },
      intro: {
        '&:not(blockquote p)': {
          marginBlockEnd: '$16',
          color: 'hsl($shade800)',
          fontSize: '$14',
          lineHeight: '$24'
        }
      }
    }
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

export const StyledBlockQuote = styled('blockquote', {
  marginBlockStart: 0,
  marginBlockEnd: '$24',
  marginX: 0,

  variants: {
    responsive: {
      mobile: {
        paddingInlineStart: '$20',

        '& p': {
          '&::before': {
            left: '-$24'
          }
        }
      },
      desktop: {
        width: '64%',
        paddingInlineStart: 0
      }
    }
  },

  '& p': {
    position: 'relative',
    marginY: 0,
      color: 'hsl($accent)',
    fontSize: '$20',
    fontWeight: 'bold',
    lineHeight: '$32',

    '&::before': {
      position: 'absolute',
      content: '「',
      fontWeight: 'normal'
    },

    '&::after': {
      content: '」',
      fontWeight: 'normal'
    }
  }
})
