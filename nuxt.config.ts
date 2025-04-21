// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/css/main.scss'],
  
  modules: ['@nuxtjs/tailwindcss', '@nuxt/ui', '@pinia/nuxt', 'nuxt-swiper'],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  
  app: {
    baseURL: '/portfolio/', // Replace 'portfolio' with your repo name
    buildAssetsDir: 'assets'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})