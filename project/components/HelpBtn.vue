<template>
  <div
    class="flex items-center items-center text-btn"
    @click="isHelp = !isHelp, isDialog = true"
  >
    <TheIcon
      :path="mdiHelpCircleOutline"
      size="20px"
      class="mr-1"
    />
    <span>使い方</span>
  </div>
</template>

<script setup lang="ts">
import { mdiHelpCircleOutline } from '@mdi/js'
import { useIsHelp, useIsDialog } from '@/composables/state/Default'
import TheIcon from '@/components/TheIcon'

const isHelp = useIsHelp()
const isDialog = useIsDialog()
</script>
