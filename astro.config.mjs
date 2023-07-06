import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/edge";

import react from "@astrojs/react";

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
  ],
  output: "hybrid",
  adapter: vercel(),
});
