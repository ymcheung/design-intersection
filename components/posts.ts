import { styled } from "../stitches.config";

export const PostsList = styled('ul', {
  display: 'grid',
  marginY: 0,
  padding: 0,
  fontFamily: '$default',

  variants: {
    year: {
      mobile: {
        rowGap: '$32'
      }
    },
    posts: {
      mobile: {
        display: 'grid',
        grid: 'auto / repeat(auto-fill, minmax(288px, 1fr))',
        gap: '$24'
      }
    }
  }
});

export const ListItem = styled('li', {
  listStyleType: 'none',
});
