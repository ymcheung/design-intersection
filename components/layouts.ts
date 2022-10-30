  import { styled } from "../stitches.config";

export const Container = styled('div', {
  maxWidth: '1200px',
  marginX: '$auto',
  paddingX: '$16',

  variants: {
    layout: {
      home: {
        display: 'grid',
        grid: '"featured all" auto / 5fr 3fr',
        alignItems: 'start',
        columnGap: '$64',
        fontFamily: '$default'
      },
      post: {
        display: 'grid',
        grid: 'auto / 3fr 1fr',
        columnGap: '$64',
        fontFamily: '$default'
      },
      all: {
        marginBlockEnd: '$32',
        paddingBlockStart: '$16'
      }
    },
    responsive: {
      mobile: {
        marginBlockEnd: '$32'
      },
      desktop: {
        paddingX: 0
      }
    }
  }
});
