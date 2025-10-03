import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    hero: z.string().optional(),
    thumbnail: z.string().optional(),
    author: z.string().optional(),
    lang: z.enum(['ga', 'en', 'nl']).default('ga'),
    tags: z.array(z.string()).optional(),
    rating: z.number().optional(),
    date: z.date().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional(),
    layout: z.string().optional(),
  }),
});

const events = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    venue: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    price: z.string().optional(),
    registrationUrl: z.string().optional(),
    organizer: z.string().optional(),
    organizerEmail: z.string().optional(),
    languageLevel: z.string().optional(),
    tags: z.array(z.string()).optional(),
    imageUrl: z.string().optional(),
    hero: z.string().optional(),
    pubDate: z.date().optional(),
    lang: z.enum(['ga', 'en', 'nl']).default('ga'),
    layout: z.string().optional(),
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
