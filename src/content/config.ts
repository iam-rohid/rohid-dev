// import { z, defineCollection } from "astro:content";

// const postsCollection = defineCollection({
//   schema: ({ image }) =>
//     z.object({
//       title: z.string(),
//       description: z.string(),
//       coverImage: image()
//         .refine((img) => img.width >= 1080, {
//           message: "Cover image must be at least 1080 pixels wide!",
//         })
//         .optional(),
//       tags: z.array(z.string()).optional(),
//       publishDate: z.date(),
//       isDraft: z.boolean().default(true),
//     }),
// });

// const pagesCollection = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     isDraft: z.boolean().default(true),
//   }),
// });

// const projectsCollection = defineCollection({
//   schema: ({ image }) =>
//     z.object({
//       name: z.string(),
//       description: z.string(),
//       coverImage: image().refine((img) => img.width >= 1080, {
//         message: "Cover image must be at least 1080 pixels wide!",
//       }),
//       appIcon: z.string().optional(),
//       isLaunched: z.boolean().default(false),
//       urls: z
//         .object({
//           appStore: z.string().optional(),
//           playStore: z.string().optional(),
//           web: z.string().optional(),
//         })
//         .optional(),
//     }),
// });

// export const collections = {
//   posts: postsCollection,
//   projects: projectsCollection,
//   pages: pagesCollection,
// };
