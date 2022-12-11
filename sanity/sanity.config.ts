import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas/schema';
import { markdownSchema } from 'sanity-plugin-markdown';

export default defineConfig({
  name: 'design-intersection',
  title: 'Intersection',
  projectId: '56h86i66',
  dataset: 'production',
  plugins: [deskTool(), markdownSchema()],
  schema: {
    types: schemaTypes
  }
});
