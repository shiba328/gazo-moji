<template>
  <div class="header flex items-center px-2">
    <div class="Logo justify-start flex-1 py-2">
      <div class="h5">
        🏞️ 画像結合・文字入れ
      </div>
    </div>
    <div class="flex justify-end flex-1 gap-2 mr-4">
      <HelpBtn />
      <VersionDate />
    </div>
  </div>
</template>

<script setup lang="ts">
import HelpBtn from '@/components/HelpBtn'
import VersionDate from '@/components/VersionDate'
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
