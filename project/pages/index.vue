<template>
  <div class="area">
    <TheHeader />
    <MainArea />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import MainArea from '@/components/MainArea.vue'

// 離脱確認
window.addEventListener('beforeunload', (event) => {
  event.preventDefault()
  event.returnValue = ''
})

useMeta({
  title: '画像結合・文字入れ加工 | 資料作りに便利なオンラインツール',
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  meta: [
    { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0' }
  ]
})
</script>

<style lang="scss" scoped>
.area {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}
</style>
