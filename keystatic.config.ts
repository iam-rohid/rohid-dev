import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage:
    process.env.NODE_ENV === "development"
      ? {
          kind: "local",
        }
      : {
          kind: "github",
          repo: {
            name: "rohid-dev",
            owner: "iam-rohid",
          },
        },
  singletons: {
    settings: singleton({
      label: "Settings",
      path: "src/content/settings",
      schema: {
        headline: fields.text({ label: "Headline" }),
      },
    }),
  },
  collections: {
    pages: collection({
      label: "Pages",
      path: "src/content/pages/*/",
      slugField: "title",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: {
              length: {
                max: 100,
              },
            },
          },
        }),
        isDraft: fields.checkbox({
          label: "Draft",
          defaultValue: true,
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
          images: {
            directory: "public/images/pages",
            publicPath: "/images/pages/",
          },
        }),
      },
    }),
    posts: collection({
      label: "Posts",
      path: "src/content/posts/*/",
      slugField: "title",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: {
              length: {
                max: 100,
              },
            },
          },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: {
            length: {
              max: 300,
            },
          },
        }),
        isDraft: fields.checkbox({
          label: "Draft",
          description:
            "Set this post as draft to prevent it from being published",
          defaultValue: true,
        }),
        coverImage: fields.image({
          label: "Cover Iamge",
          directory: "public/images/posts",
          publicPath: "/images/posts/",
        }),
        publishDate: fields.date({
          label: "Publish Date",
          defaultValue: { kind: "today" },
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
          images: {
            directory: "public/images/posts",
            publicPath: "/images/posts/",
          },
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      path: "src/content/projects/*/",
      slugField: "title",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: {
              length: {
                max: 100,
              },
            },
          },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: {
            length: {
              max: 300,
            },
          },
        }),
        coverImage: fields.image({
          label: "Cover Iamge",
          directory: "public/images/projects",
          publicPath: "/images/projects/",
        }),
        weight: fields.integer({ label: "Weight", defaultValue: 0 }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/images/projects",
            publicPath: "/images/projects/",
          },
        }),
      },
    }),
  },
});
