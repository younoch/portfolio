// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/css/main.scss'],
  
  modules: ['@nuxt/ui', '@pinia/nuxt', 'nuxt-swiper', '@nuxt/image'],
  ui: {},
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