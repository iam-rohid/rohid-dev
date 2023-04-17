import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

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
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
