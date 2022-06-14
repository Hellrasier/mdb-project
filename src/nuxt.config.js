import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/dotenv', { path: '.env' }]
  ],
  
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // plugins: [
  //   '~/plugins/mdb.js'
  // ],
  
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
      },
    },
  },
  
  css: [
    '~/assets/css/main.sass',
    '~/assets/fonts/stylesheet.css'
  ],
  
})
