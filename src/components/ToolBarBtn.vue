<template>
  <div
    :class="{'checked': state.value }"
    class="btn"
    @click="apply(!state.value)"
  >
    <TheIcon size="26px" :path="icon" />
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import TheIcon from '@/components/TheIcon'
defineProps<{
  apply?:(e) => void,
  state: Ref,
  icon: string,
}>()
</script>
