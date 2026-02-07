import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    dateModified: z.date().optional(),
    author: z.string().default('Succession France'),
    category: z.enum([
      'Succession',
      'Héritage',
      'Donation',
      'Testament',
      'Droits',
      'Notaire',
    ]),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    dateModified: z.date().optional(),
    author: z.string().default('Succession France'),
    category: z.enum([
      'Succession',
      'Héritage',
      'Donation',
      'Testament',
      'Droits',
      'Notaire',
    ]),
    readingTime: z.number().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  guides: guidesCollection,
};
