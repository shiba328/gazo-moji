<template>
  <div
    class="help dialog"
    @click.self="$emit('close')"
  >
    <div class="card">
      <div
        class="card-text"
        v-html="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const createHelp = useHelp()
const post = computed(() => createHelp.getPost.value)
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
