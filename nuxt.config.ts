export default defineNuxtConfig({
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
