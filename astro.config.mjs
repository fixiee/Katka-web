import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://tomas-juri.github.io/",
  base: "Astro-Starter",
  integrations: [tailwind(), sitemap(), robotsTxt()],
});
