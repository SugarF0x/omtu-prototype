export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'ОМТУ Прототип',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }]
    },
  },
  typescript: {
    strict: true
  },
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@nuxt/devtools',
    '@pinia/nuxt'
  ],
  imports: {
    dirs: ['./stores'],
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark'
      }
    }
  },
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  }
})
