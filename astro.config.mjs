import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import compress from "astro-compress";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bitwit-techno-site.web.app",
  integrations: [
    tailwind(),
    compress(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-ES",
          fr: "fr-CA",
        },
      },
      lastmod: new Date(),
    }),
  ],
});
