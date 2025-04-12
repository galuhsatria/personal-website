import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';

const posts = defineCollection({
  name: 'posts',
  directory: 'app/posts',
  include: '**/*.mdx',
  schema: (z) => ({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    thumbnail: z.string(),
    createdAt: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
