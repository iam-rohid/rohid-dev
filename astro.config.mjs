import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  image: {
    service: "astro/assets/services/sharp"
  },
  integrations: [tailwind(), mdx({
    drafts: false
  })],
  output: "server",
  adapter: vercel()
});