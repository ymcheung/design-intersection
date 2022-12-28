import { init, Style } from '@master/css';
import { typography } from './typography';
import { colors } from './colors';

Style.extend(
  'classes', {
    fontDefault: 'font-family:$(font-default)',
    container: 'max-width:1200 margin-x:auto margin-bottom:32 padding-x:16 padding-x:0@m992',
    intersection: 'd:inline-block mb:-2 pt:2 color:shade-100 font-style:italic font-weight:700 letter-spacing:4 text-transform:uppercase',
    divider: 'block margin-top:0 margin-bottom:24 border-top:1|solid|shade-1200 br:0 border-bottom:0 bl:0',
    ...typography
  }
);

Style.extend(
  'colors',
  { ...colors }
);

Style.extend('mediaQueries', {
  m640: '(min-width: 640px)',
  m768: '(min-width: 768px)',
  m992: '(min-width: 992px)',
  m1200: '(min-width: 1200px)',
  m1232: '(min-width: 1232px)'
});

init();
