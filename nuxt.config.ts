export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', 'nuxt-simple-sitemap'],
  content: {
    documentDriven: true
  }
})