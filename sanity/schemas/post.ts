import { defineType, defineField } from "sanity";

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      media: 'cover.mainImage'
    }
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required(),
      ]
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'cover'
    }),
    defineField({
      name: 'publishedTime',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => [
        Rule.required(),
      ]
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'markdown',
      validation: Rule => [
        Rule.required(),
      ]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => [
        Rule.required(),
      ],
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => [
        Rule.required(),
      ]
    }),
    defineField({
      title: 'Source',
      name: 'source',
      type: 'reference',
      to: [{ type: 'source' }],
      validation: Rule => [
        Rule.required(),
      ]
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }]
    }),
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'number',
      validation: Rule => [
        Rule.required(),
      ]
    }),
    defineField({
      name: 'views',
      title: 'Views',
      type: 'number',
      validation: Rule => [
        Rule.required(),
      ]
    })
  ]
});
