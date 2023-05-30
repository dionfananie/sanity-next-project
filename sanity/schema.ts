import { SchemaTypeDefinition } from 'sanity'

import banner from './schema/banner'
import media from './schema/media'
import post from './schema/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, banner, media],
}
