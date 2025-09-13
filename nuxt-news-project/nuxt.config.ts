
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ["@pinia/nuxt"],
  devtools: { enabled: true },
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: `@use "@/assets/scss/global.scss" as *;`,
        },
      }
    }
  }
})
