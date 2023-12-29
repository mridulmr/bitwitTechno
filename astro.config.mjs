import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import babelScripts from 'astro-babel'
import robotsTxt from 'astro-robots-txt'
import compressor from 'astro-compressor'
import node from '@astrojs/node'

export default defineConfig({
  output: 'hybrid',
  site: 'https://bitwit-techno-site.web.app',
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          fr: 'fr-CA'
        }
      },
      lastmod: new Date()
    }),
    babelScripts({
      presets: [
        [
          'minify',
          {
            builtIns: false,
            evaluate: false,
            mangle: false
          }
        ],
        [
          '@babel/preset-env',
          {
            modules: false
          }
        ]
      ]
    }),
    robotsTxt(),
    compressor()
  ],
  adapter: node({
    mode: 'standalone'
  })
})
