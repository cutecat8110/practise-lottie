import * as LottiePlayer from '@lottiefiles/lottie-player'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      LottiePlayer: LottiePlayer
    }
  }
})
