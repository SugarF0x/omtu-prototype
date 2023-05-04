export default defineNuxtConfig({
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@nuxt/devtools',
    '@pinia/nuxt'
  ],
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
