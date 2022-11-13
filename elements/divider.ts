import { styled } from "../stitches.config";

export const Divider = styled('hr', {
  display: 'block',
  marginBlockStart: 0,
  marginBlockEnd: '$24',
  borderTop: '1px solid hsl($shade1200)',
  borderRight: 0,
  borderBottom: 0,
  borderLeft: 0,

  variants: {
    display: {
      none: {
        display: 'none'
      }
    },
    length: {
      short: {
        width: '80px'
      },
      full: {
        width: '100%'
      }
    },
    align: {
      left: {
        marginInlineStart: 0
      }
    },
    position: {
      article: {
        marginBlockEnd: '$64'
      },
      pre: {
        marginBlockEnd: '$8'
      }
    }
  },
  defaultVariants: {
    length: 'short'
  }
});
