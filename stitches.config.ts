import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      accent: '11 71% 61%',

      shade100: '210 4% 10%',
      shade400: '210 2% 25%',
      shade500: '120 1% 34%',
      shade800: '210 1% 53%',
      shade1200: '210 2% 77%',
      shade1500: '210 9% 96%',
      white: '240 100% 100%',

      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)'
    },
    space: {
      auto: 'auto',
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      64: '64px'
    },
    sizes: {
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      24: '24px'
    },
    fontSizes: {
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2rem',
      24: '2.4rem',
      28: '2.8rem',
      32: '3.2rem',
      48: '4.8rem',
      64: '6.4rem',
      'fluidXXLarge': 'clamp($32, 5vmin, $48)',
      'fluidXLarge': 'clamp($28, 2.6vmin, $32)',
      'fluidLarge': 'clamp($24, 2.6vmin, $28)',
      'paragraph': 'clamp($18, 2.6vmin, $20)'
    },
    lineHeights: {
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      48: '48px'
    },
    fonts: {
      default: `"Overpass", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
    },
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    m640: '(min-width: 640px)',
    m768: '(min-width: 768px)',
    m992: '(min-width: 992px)',
    m1200: '(min-width: 1200px)',
    m1232: '(min-width: 1232px)'
  },
})
