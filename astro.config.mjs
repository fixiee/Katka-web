import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tomas-juri.github.io/",
  copyrightStart: 2024,
  base: "Astro-Starter",
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap(), robotsTxt()],
});
