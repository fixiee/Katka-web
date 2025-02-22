import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://tomas-juri.github.io/",
  copyrightStart: 2024,
  base: "Astro-Starter",
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap(), robotsTxt()],
});
