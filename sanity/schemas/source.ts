import { defineType, defineField } from "sanity";

export const source = defineType({
  name: 'source',
  title: 'Source',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      validation: Rule => [
        Rule.required(),
      ],
      options: {
        hotspot: true
      }
    }),
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
      name: 'url',
      title: 'Link Url',
      type: 'string',
      validation: Rule => [
        Rule.required(),
      ]
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => [
        Rule.required(),
      ]
    }),
    defineField({
      name: 'intro',
      title: 'Author Intro',
      type: 'markdown'
    })
  ],
});
