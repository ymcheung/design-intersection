import { styled } from '../../stitches.config';

export const Headings = styled('h2', {
  marginBlockStart: 0,
  marginBlockEnd: '$8',
  color: 'hsl($shade100)',

  variants: {
    level: {
      h2: {
        fontSize: '$h2',
        lineHeight: 1.33,
      },
      h3: {
        fontSize: '$h3',
        lineHeight: 1.33,
      }
    }
  }
});

export const Paragraph = styled('p', {
  overflowWrap: 'break-word',

  '&:not(blockquote p)': {
    marginBlockStart: 0
  },

  variants: {
    position: {
      article: {
        '&:not(blockquote p)': {
          marginBlockEnd: '$24',
          color: 'hsl($shade400)',
          fontSize: '$paragraph',
          lineHeight: 1.6,

          [`& + ${Headings}`]: {
            paddingTop: '$24'
          }
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
  paddingInlineStart: '$24',
  color: 'hsl($shade400)',
  fontSize: '$paragraph',
  lineHeight: 1.6,

  variants: {
    type: {
      unordered: {
        listStyleType: 'square'
      }
    }
  }
});

export const StyledLink = styled('a', {
  color: 'hsl($shade500)',

  variants: {
    linkChild: {
      image: {
        display: 'block',
        marginX: '$auto',
        textDecoration: 'none'
      }
    }
  }
});


export const StyledFigure = styled('figure', {
  marginBlockStart: 0,
  marginBlockEnd: '$32',

  variants: {
    cover: {
      mobile: {
        marginX: '-$16'
      },
      tablet: {
        marginX: '$auto'
      }
    },
    general: {
      true: {
        marginX: '$auto'
      }
    },
    ratio: {
      '16x9': {
        '& > iframe': {
          aspectRatio: '16 / 9'
        }
      }
    }
  }
});

export const StyledFigcaption = styled('figcaption', {
  paddingBlockStart: '$8',
  color: 'hsl($shade800)',
  fontSize: '$16',
  lineHeight: '$24',
  overflowWrap: 'break-word',
  textDecoration: 'none',

  variants: {
    responsive: {
      mobile: {
        marginBlockEnd: '$16'
      },
      tablet: {
        marginBlockEnd: '$24'
      }
    }
  }
});

export const StyledBlockQuote = styled('blockquote', {
  marginBlockStart: 0,
  marginBlockEnd: '$40',
  marginX: 0,

  variants: {
    responsive: {
      mobile: {
        paddingX: '$24'
      },
      desktop: {
        width: '72%',
        paddingInlineEnd: 0
      }
    }
  },

  '& p': {
    marginY: 0,
    color: 'hsl($shade500)',
    fontSize: '$20',
    fontWeight: 'bold',
    lineHeight: '$32',
  },

  '& a': {
    color: 'hsl($shade800)',
    fontWeight: 'normal'
  }
})
