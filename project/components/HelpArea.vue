<template>
  <div
    v-if="isHelp"
    class="help dialog"
    @click.self="close()"
  >
    <div class="card">
      <div
        class="card-text"
        v-html="md"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIsHelp, useIsDialog } from '@/composables/state/Default'

const { data } = await useAsyncData('doc', () => $fetch('/api/doc'))
const nuxtApp = useNuxtApp()
const md = nuxtApp.$mdit.render(data.value)

const isHelp = useIsHelp()
const isDialog = useIsDialog()

const close = () => {
  isHelp.value = false
  isDialog.value = false
}
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.card {
  max-width: 700px;
  filter: drop-shadow(0 0 20px $barShadowColor);

  & > * {
    margin: 16px;
  }

  &-text {
    background: #fff;
    border-radius: 6px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 80vh;
    padding: 0 2em;

    :deep(img) {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
