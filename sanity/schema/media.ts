import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media',
  icon: ImageIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
    }),
  ],
})
