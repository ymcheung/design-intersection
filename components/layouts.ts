import { styled } from "../stitches.config";

export const Container = styled('div', {
  maxWidth: '1200px',
  marginX: '$auto',
  paddingX: '$16',

  variants: {
    responsive: {
      noPadding: {
        paddingX: 0
      }
    }
  }
});
