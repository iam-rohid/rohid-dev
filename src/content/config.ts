import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishDate: z.date(),
    isDraft: z.boolean().default(true),
  }),
});

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    isDraft: z.boolean().default(true),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    coverImage: z.string(),
    appIcon: z.string().optional(),
    isLaunched: z.boolean().default(false),
    urls: z
      .object({
        appStore: z.string().optional(),
        playStore: z.string().optional(),
        web: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  pages: pagesCollection,
};
