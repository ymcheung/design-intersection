import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  html: {
    boxSizing: 'border-box',
    fontSize: '62.5%'
  },

  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },

  body: {
    backgroundColor: 'hsl($white)',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },

  '@font-face': [
    {
      fontFamily: 'Overpass',
      fontStyle: 'normal',
      fontWeight: 400,
      src: 'local("Overpass"), url("/fonts/Overpass-Regular.woff2") format("woff2")',
    },
    {
      fontFamily: 'Overpass',
      fontStyle: 'italic',
      fontWeight: 400,
      src: 'local("Overpass"), url("/fonts/Overpass-Italic.woff2") format("woff2")',
    },
    {
      fontFamily: 'Overpass',
      fontStyle: 'normal',
      fontWeight: 600,
      src: 'local("Overpass"), url("/fonts/Overpass-SemiBold.woff2") format("woff2")',
    },
    {
      fontFamily: 'Overpass',
      fontStyle: 'italic',
      fontWeight: 600,
      src: 'local("Overpass"), url("/fonts/Overpass-SemiBoldItalic.woff2") format("woff2")',
    },
    {
      fontFamily: 'Overpass',
      fontStyle: 'normal',
      fontWeight: 700,
      src: 'local("Overpass"), url("/fonts/Overpass-Bold.woff2") format("woff2")',
    },
    {
      fontFamily: 'Overpass',
      fontStyle: 'italic',
      fontWeight: 700,
      src: 'local("Overpass"), url("/fonts/Overpass-BoldItalic.woff2") format("woff2")',
    }
  ],

  // '#__next': {
  //   display: 'grid',

  //   '@media screen and (min-width: 992px)': {
  //     grid: `"header header" auto
  //            "featured all" auto
  //            "footer footer" auto / 5fr 3fr`,
  //     alignItems: 'start',
  //     columnGap: '$64'
  //   }
  // }
});
