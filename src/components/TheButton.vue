<template>
  <div class="button">
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.button {
  display: flex;
  align-items: center;
  cursor: pointer;
  background: $btnBgVColor;
  color: #fff;
  padding: 8px 16px;
}
</style>
