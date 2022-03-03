<template>
  <div class="flex nowrap">
    <div
      v-for="item, i in items"
      :key="item.value"
      class="pa-1 btn"
      :class="{'checked': state.value == item.value, 'mr-1': items.length - 1 != i }"
      @click="$emit('toggle', item.value)"
    >
      <TheIcon size="18px" :path="item.icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import TheIcon from '@/components/TheIcon'
import { IFItem } from '@/composables/Tool'
defineProps<{
  items: IFItem[]
  state: Ref
}>()
</script>
