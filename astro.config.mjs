import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import babelScripts from 'astro-babel'
import robotsTxt from 'astro-robots-txt'
import compressor from 'astro-compressor'
import webmanifest from 'astro-webmanifest'
import node from '@astrojs/node'

import critters from 'astro-critters'

// https://astro.build/config
export default defineConfig({
  site: 'https://bitwit-techno-site.web.app',
  output: 'hybrid',
  experimental: {
    contentCollectionCache: true,
    optimizeHoistedScript: true
  },
  adapter: node({
    mode: 'middleware'
  }),
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
    compressor({
      fileExtensions: [
        '.css',
        '.js',
        '.html',
        '.xml',
        '.cjs',
        '.mjs',
        '.svg',
        '.txt',
        '.webp'
      ],
    }),
    webmanifest({
      name: 'Bitwit Techno',
      icon: 'public/logos/bitwit-logo.webp',
      short_name: 'Bitwit',
      description:
        "Empower your journey with Bitwit Techno's avant-garde IT solutions, fusing technology and creativity for unparalleled innovation and future-proof success.",
      start_url: '/',
      theme_color: '#3367D6',
      background_color: '#3367D6',
      display: 'standalone'
    }),
    critters()
  ]
})
