import { styled } from "../stitches.config";

export const IntersectionLogo = styled('svg', {
  aspectRatio: 1,

  variants: {
    position: {
      header: {
        display: 'block',
        width: '$16',
        marginBottom: '$4',
        borderRadius: '3px'
      },
      footer: {
        width: '$24',
        borderRadius: '4px'
      }
    }
  }
});

export const Intersection = styled('span', {
  marginBottom: '-$2',
  paddingTop: '$2',
  color: 'hsl($shade100)',
  fontWeight: 700,
  fontStyle: 'italic',
  letterSpacing: '4px',
  textTransform: 'uppercase',

  variants: {
    position: {
      header: {
        fontSize: '$12',
        lineHeight: '$16'
      },
      footer: {
        fontSize: '$16',
        lineHeight: '$24'
      }
    }
  }
});
