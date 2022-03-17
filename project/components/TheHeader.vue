<template>
  <div class="header">
    <div class="logo px-2">
      <div class="h5">
        🏞️ 画像結合・文字入れ加工
      </div>
    </div>
    <div class="menu px-2">
      <HelpBtn />
      <VersionDate />
    </div>
  </div>
</template>

<script setup lang="ts">
import HelpBtn from '@/components/HelpBtn.vue'
import VersionDate from '@/components/VersionDate.vue'
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  z-index: 2;
  background: #fff;
  display: flex;
  align-items: center;

  .logo {
    font-weight: bold;
    font-family: serif;
  }

  .menu {
    display: flex;
    margin-left: auto;
    justify-content: end;
  }
}
</style>
