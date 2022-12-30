<template>
  <div>
    <div class="test2"></div>
    <client-only>
      <lottie-player
        ref="house"
        id="firstLottie"
        style="width: 400px"
        :src="housePath"
        @ready="test"
      ></lottie-player>
    </client-only>
    <div class="test2"></div>
  </div>
</template>

<script setup>
import housePath from '~/assets/json/house.json'
import { create } from '@lottiefiles/lottie-interactivity'

const house = ref(null)
const test = () => {
  create({
    mode: 'scroll',
    player: '#firstLottie',
    actions: [
      {
        visibility: [0.2, 0.8],
        type: 'seek',
        frames: [0, 50]
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.test2 {
  height: 1000px;
}
</style>
