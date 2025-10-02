import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [sitemap(), react()],
  viewTransitions: true,
  site: "https://astro-theme-creek.netlify.app/",
});
