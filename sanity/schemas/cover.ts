import { defineType, defineField } from "sanity";

export const cover = defineType({
  name: 'cover',
  title: 'Cover',
  type: 'object',
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
      name: 'position',
      title: 'Is Above Title',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string'
    })
  ],
})
