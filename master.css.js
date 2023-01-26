/** @type {import('./packages/css/src/config').Config} */

import { typography } from './styles/typography';
import { article } from './styles/article';
import { card } from './styles/card';
import { colors } from './styles/colors';

module.exports = {
  colors: {
    ...colors
  },
  // semantics: {
  //   fontFamily: {
  //     sansDefault: ''
  //   }
  // textDecoration: {
  //   'hide-decor': 'none'
  // }
  // },
  classes: {
    container: 'max-width:1200 mx:auto px:16 px:0@m1232',
    intersection:
      'd:inline-block mb:-2 pt:2 color:shade-100 font-style:italic font-weight:700 letter-spacing:4 text-transform:uppercase',
    divider:
      'block margin-top:0 margin-bottom:24 border-top:1|solid|shade-1200 br:0 border-bottom:0 bl:0',
    ...article,
    ...typography,
    ...card
  },
  mediaQueries: {
    m640: '(min-width: 640px)',
    m768: '(min-width: 768px)',
    m992: '(min-width: 992px)',
    m1200: '(min-width: 1200px)',
    m1232: '(min-width: 1232px)'
  }
};
