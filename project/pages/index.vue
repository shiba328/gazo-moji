<template>
  <div
    class="area"
    :class="{'is-preview': isDialog}"
  >
    <TheHeader />
    <MainArea />
    <PreviewArea v-if="isPreview" />
    <HelpArea />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader'
import MainArea from '@/components/MainArea'
import PreviewArea from '@/components/PreviewArea'
import HelpArea from '@/components/HelpArea'
import { useIsPreview, useIsDialog } from '@/composables/state/Default'

const isPreview = useIsPreview()
const isDialog = useIsDialog()
useMeta({
  title: '画像結合・文字入れ | オンラインツール',
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

  &.is-preview {
    & :deep(.header),
    & :deep(.main) {
      filter: blur(3px);
      overflow: hidden;
    }
  }
}
</style>
