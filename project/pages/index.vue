<template>
  <div
    class="area flex nowrap column"
    :class="{'is-preview': isDialog}"
  >
    <TheHeader />
    <MainArea class="flex-1" />
    <PreviewArea v-if="isPreview" />
    <HelpArea />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader'
import MainArea from '@/components/MainArea'
import PreviewArea from '@/components/PreviewArea'
import HelpArea from '@/components/HelpArea'

import { useIsPreview, useIsDialog } from '@/composables/State'

const isPreview = useIsPreview()
const isDialog = useIsDialog()
useMeta({
  title: '🏞️ 画像結合・文字入れ | オンラインツール'
})
</script>
<style lang="scss" scoped>
.is-preview {
  & :deep(.header),
  & :deep(.main) {
    filter: blur(3px);
    overflow: hidden;
  }
}
</style>
<style lang="scss" scoped>
.area {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
}
</style>
