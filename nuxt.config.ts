// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/portfolio/', // Replace 'portfolio' with your repo name
    buildAssetsDir: 'assets'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
