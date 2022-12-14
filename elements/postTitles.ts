import { styled } from '../stitches.config';

export const PostTitle = styled('h1', {
  marginBlockStart: 0,
  marginBlockEnd: '$24',
  color: 'hsl($shade100)',

  variants: {
    translated: {
      mobile: {
        fontSize: '$28',
        lineHeight: '$36'
      },
      tablet: {
        fontSize: '$32',
        lineHeight: '$40'
      }
    },
    source: {
      mobile: {
        display: 'inline-block',
        fontSize: '$16',
        fontWeight: 'bold',
        lineHeight: '$24'
      }
    },
    withSubtitle: {
      true: {
        marginBlockEnd: '$8'
      }
    }
  }
});

export const PostSubtitle = styled('p', {
  marginBlockStart: 0,
  marginBlockEnd: '$24',
  color: 'hsl($shade800)',

  variants: {
    translated: {
      mobile: {
        fontSize: '$20',
        lineHeight: '$28',
      }
    },
    source: {
      mobile: {
        fontSize: '$16',
        lineHeight: '$20',
      }
    }
  }
});
