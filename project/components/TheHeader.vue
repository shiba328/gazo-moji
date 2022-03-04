<template>
  <div class="header flex items-center px-2">
    <div class="Logo justify-start flex-1 py-2">
      <div class="h5">
        🏞️ 画像結合・文字入れ
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div>
        update
      </div>
      <div>
        contact
      </div>
    </div>
    <div class="flex justify-end flex-1 gap-1 mr-4">
      <div
        class="flex items-center items-center"
        @click="isHelp = !isHelp, isDialog = true"
      >
        <TheIcon
          :path="mdiHelpCircleOutline"
          size="28px"
          class="mr-1"
        />
        <span>使い方</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiHelpCircleOutline } from '@mdi/js'
import TheIcon from '@/components/TheIcon'
import { useIsHelp, useIsDialog } from '@/composables/State'

const isHelp = useIsHelp()
const isDialog = useIsDialog()
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: #fff;
  .Logo {
    font-weight: bold;
    font-family: serif;
  }
}
</style>
