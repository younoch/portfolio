// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/css/main.scss'],
  
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  ui: {},
  app: {
    baseURL: '/portfolio/', 
    buildAssetsDir: 'assets',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' }
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-B515496QYL",
          async: true,
        },
        {
          type: "text/javascript",
          id: "ga-inline",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B515496QYL');
          `
        },
      ],
    }
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