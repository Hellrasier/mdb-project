import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  
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
  
  // vite: {
  //     css: {
  //         preprocessorOptions: {
  //             sass: {
  //                 additionalData: '@import "@/assets/css/main.sass"',
  //             },
  //         },
  //     },
  // }
})
