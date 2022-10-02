import { styled } from "../stitches.config";

export const Divider = styled('hr', {
  marginBlockStart: 0,
  marginBlockEnd: '$16',
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
    position: {
      article: {
        display: 'block',
        width: '80px',
        marginX: '$auto',
        marginBlockEnd: '$64'
      }
    }
  }
});
