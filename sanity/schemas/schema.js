import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import cover from './cover';
import post from './post';
import tag from './tag';
import source from './source';

export default createSchema({
  name: 'intersection',
  types: schemaTypes.concat([cover, post, tag, source])
});
