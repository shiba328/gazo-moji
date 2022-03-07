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
      :disabled="compDisabled"
      v-bind="attr"
      @input="type === 'comp' ? false : apply($event)"
      @toggle="apply"
    />
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { IFAttr, IFItem, IFTool, TYPES } from '@/composables/Tool'
import TheIcon from '@/components/TheIcon'

// TODO: 変更待ち
interface Props extends IFTool {
  id: string,
  components: object | string,
  apply:(e) => void,
  value?: string
  attr?: IFAttr
  icon?: string
  state?: Ref
  items?: IFItem[]
  type?: TYPES
  disabled?: Ref
}

const { disabled } = defineProps<Props>()

const compDisabled = computed(() => disabled && !disabled.value)
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

  &:disabled {
    background: $disabledColor;
  }
}
.w4em {
  width: 3.8em;
}
.w3em {
  width: 2.8em;
}
</style>
