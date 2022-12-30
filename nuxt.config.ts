// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    {
      src: '@/plugins/Vue3Lottie.client.js'
    }
  ],
  vue: {
    compilerOptions: {
      isCustomElement: tag => {
        console.log('tag',tag);
        return ['lottie-player'].includes(tag)}
    }
  }
})
