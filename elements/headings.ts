import { styled } from '../stitches.config';

export const Heading = styled('h2', {
  variants: {
    position: {
      cell: {
        margin: '0 0 $16',
        paddingBlockStart: '$16',
        color: 'hsl($shade500)',
        fontSize: '$18',
        lineHeight: '$24'
      },
      postsFeatured: {
        margin: '0 0 $12',
        color: 'hsl($shade100)',
        fontSize: '$20',
        lineHeight: '$28'
      },
      postsAll: {
        margin: 0,
        color: 'hsl($shade100)',
        fontSize: '$16',
        lineHeight: '$24'
      },
      translator: {
        margin: '0 0 $16',
        color: 'hsl($shade500)',
        fontSize: '$16',
        lineHeight: '$24'
      },
      postsYear: {
        margin: '0 0 $4',
        color: 'hsl($shade1200)',
        fontSize: '$fluidXXLarge',
        fontStyle: 'italic',
        lineHeight: '$48',
      }
    }
  }
});
