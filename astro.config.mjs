import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [sitemap(), react()],
  viewTransitions: false,
  site: process.env.NODE_ENV === 'production' ? "https://astro-theme-creek.netlify.app/" : "http://localhost:4321/",
  i18n: {
    defaultLocale: "ga",
    locales: ["ga", "en", "nl"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
