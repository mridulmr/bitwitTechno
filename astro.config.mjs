import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "pt-br", "es"],
  },
  integrations: [tailwind()],
});
