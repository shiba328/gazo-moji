<template>
  <div class="flex nowrap items-center">
    <TheIcon
      v-if="type !== 'btn' && icon"
      :path="icon"
      size="18px"
    />
    <component
      :is="components"
      :value="value"
      :icon="icon"
      :items="items"
      :apply="apply"
      :state="state"
      :tools="tools"
      v-bind="attr"
      @input="type === 'comp' ? false : apply($event)"
      @toggle="apply"
    />
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { IFAttr, IFItem, IFTool } from '@/composables/Tool'
import TheIcon from '@/components/TheIcon'

defineProps<{
  id: string,
  icon?: string,
  value?: string,
  apply?:(e) => void,
  components?: object | string,
  attr?: IFAttr,
  items?: IFItem
  state: Ref
  type?: string
  tools?: IFTool[]
}>()
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

:deep(input[type="radio"]),
:deep(input[type="checkbox"]) {
  display: none;
}
:deep(input[type="number"]) {
  line-height: 1.5;
  font-size: 11px;
  height: 22px;
}
:deep(.btn) {
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: $btnHoverColor;
  }
}
:deep(.checked) {
  background: $checkedColor;
  color: #fff;
}
:deep(input) {
  color: currentColor;
  border: 1px solid currentColor;
  border-radius: 4px;
}
.w4em {
  width: 3.8em;
}
.w3em {
  width: 2.8em;
}
</style>
