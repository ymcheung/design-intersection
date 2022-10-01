export default {
  name: 'source',
  title: 'Source',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Link Url',
      type: 'string',
      required: true
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      required: true
    },
    {
      name: 'intro',
      title: 'Author Intro',
      type: 'markdown'
    }
  ]
}
