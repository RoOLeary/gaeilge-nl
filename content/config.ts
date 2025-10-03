import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    hero: z.string().optional(),
    author: z.string().optional(),
    slug: z.string().optional(),
    lang: z.enum(['ga', 'en', 'nl']).default('ga'),
  }),
});

const events = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z.string(),
    location: z.string(),
    slug: z.string().optional(),
    lang: z.enum(['ga', 'en', 'nl']).default('ga'),
  }),
});

const translations = defineCollection({
  type: 'data',
  schema: z.record(z.string()),
});

export const collections = {
  posts,
  events,
  translations,
};
