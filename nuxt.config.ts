import { defineNuxtConfig } from 'nuxt3'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',

  css: ['@/assets/main.scss'],

  meta: {
    titleTemplate: '%s | 画像結合ツール',
    title: process.env.NAME || ' 画像結合ツール',
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: 'description', content: 'c' }
    ]
  },

  vite: {
    // define: {
    //   "process.env.DEBUG": "false",
    // },

  },

  publicRuntimeConfig: {
    // BASEURL: global.BASE_URL
  }
})
