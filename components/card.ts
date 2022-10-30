import { styled } from '../stitches.config';

export const PostLink = styled('a', {
  display: 'block',
  textDecoration: 'none'
});

export const Cover = styled('figure', {
  position: 'relative',
  marginBlockStart: 0,
  marginBlockEnd: '$16',
  backgroundColor: 'hsl($shade1500)',

  variants: {
    responsive: {
      mobile: {
        marginX: '-$16'

      },
      tablet: {
        marginX: 0
      }
    },
    featured: {
      mobile: {
        aspectRatio: 16 / 9
      },
      tablet: {
        aspectRatio: 32 / 9
      }
    },
    position: {
      all: {
        aspectRatio: 16 / 9
      }
    }
  }
});

export const DateLabel = styled('time', {
  position: 'absolute',
  right: 0,
  bottom: '-$4',
  paddingTop: '$4',
  paddingBottom: '$2',
  paddingInlineStart: '$12',
  color: 'hsl($shade500)',
  fontSize: '$14',
  lineHeight: '$18',
  backgroundColor: 'hsl($shade1500)',
  border: '4px solid white',
  borderRight: 0,

  variants: {
    responsive: {
      mobile: {
        paddingInlineEnd: '$16'
      },
      tablet: {
        paddingInlineEnd: '$12'
      }
    }
  }
});

export const Description = styled('p', {
  marginBlockStart: 0,

  variants: {
    position: {
      featured: {
        color: 'hsl($shade500)',
        fontSize: '$16',
        lineHeight: '$24'
      },
      translator: {
        marginBlockEnd: '$4',
        color: 'hsl($shade800)',
        fontSize: '$14',
        lineHeight: '$20'
      },
      translatorLink: {
        marginBlockEnd: '$4',
        color: 'hsl($shade800)',
        fontSize: '$14',
        lineHeight: '$20',
        textDecorationColor: 'transparent',

        '&:hover': {
          textDecorationColor: 'hsl($shade800)',
        }
      }
    }
  }
});
