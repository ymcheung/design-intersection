export default {
  name: 'post',
  title: 'Post',
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
      name: 'cover',
      title: 'Cover',
      type: 'cover'
    },
    {
      name: 'publishedTime',
      title: 'Published at',
      type: 'datetime',
      required: true
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
      required: true
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      required: true,
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      required: true
    },
    {
      title: 'Source',
      name: 'source',
      type: 'reference',
      to: [{ type: 'source' }],
      required: true
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }]
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'number',
      required: true
    },
    {
      name: 'views',
      title: 'Views',
      type: 'number',
      required: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cover.mainImage'
    }
  }
};
