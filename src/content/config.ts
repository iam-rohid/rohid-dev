import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishDate: z.string(),
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
    title: z.string(),
    coverImage: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  pages: pagesCollection,
};
