export default defineNuxtConfig({
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
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  }
})
