import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [
    tailwind(),
    mdx({
      drafts: false,
    }),
    react(),
    markdoc(),
  ],
  output: "hybrid",
  adapter: vercel(),
  experimental: {
    viewTransitions: true,
    assets: true,
  },
});
