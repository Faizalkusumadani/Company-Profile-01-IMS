import { defineCollection, z } from "astro:content";

const schema = z.object({
  titleKey: z.string().optional(),
  contentKeys: z.array(z.string()).optional(),
  category: z.string().optional(),
  dateKey: z.string().optional(),
  excerpKey: z.string().optional(),
  title: z.string().optional(),
  date: z.coerce.date().optional(),
  excerpt: z.string().optional(),
  cover: z.string(),
  gallery: z.array(z.string()).optional(),
  author: z.string().default("Admin"),
  isNew: z.boolean().default(false),
});

const activityCollection = defineCollection({ type: "content", schema });
const newsCollection = defineCollection({ type: "content", schema });

export const collections = {
  activity: activityCollection,
  news: newsCollection,
};
