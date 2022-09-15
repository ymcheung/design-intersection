import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import tag from './tag';
import post from './post';

export default createSchema({
  name: 'intersection',
  types: schemaTypes.concat([
    post,
    tag,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent
  ])
});
