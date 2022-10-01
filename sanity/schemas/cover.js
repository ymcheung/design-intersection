export default {
  name: 'cover',
  title: 'Cover',
  type: 'object',
  fields: [
    {
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      required: true,
      options: {
        hotspot: true
      }
    },
    {
    name: 'position',
    title: 'Is Above Title',
    type: 'boolean',
    options:
      {
        layout: 'checkbox'
      }
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      hidden: ({ parent, value }) => !value && !parent?.position
    }
  ]
}
