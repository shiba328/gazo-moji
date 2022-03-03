<template>
  <div class="icon">
    <svg viewBox="0 0 24 24">
      <path :d="path" />
    </svg>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  path: string
  size?: string
  color?: string
}>(), {
  path: '',
  size: '16px',
  color: ''
})

const width = props.size
const height = props.size
const color = props.color
</script>
<style scoped>
.icon {
  color: v-bind(color);
  line-height: 1;
}
svg {
  width: v-bind(width);
  height: v-bind(height);
}
</style>
<style lang="scss" scoped>
svg {
  fill: currentColor;
  vertical-align: middle;
}
</style>
