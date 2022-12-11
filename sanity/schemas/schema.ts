import { cover } from './cover';
import { post } from './post';
import { tag }from './tag';
import { source } from './source';

export const schemaTypes = [cover, post, tag, source];

// export default defineConfig({
//   // ...rest of config
//   schema: {
//     types: schemaTypes,
//   },
// })

// export default createSchema({
//   name: 'intersection',
//   types: schemaTypes.concat([cover, post, tag, source])
// });
