<template>
  <div class="droparea">
    <label for="select">
      <TheIcon
        :path="mdiCameraPlus"
        size="60px"
      />
    </label>
    <div class="h3 no-sp">
      ここに画像ファイルをドラッグ&amp;ドロップする
    </div>
    <div class="hr no-sp">
      または
    </div>
    <input
      id="select"
      type="file"
      multiple
      accept="image/*"
      @change="$emit('onChange', $event)"
    >
    <div class="no-sp">
      (Shiftキーを押しながらファイルを複数選択可能)
    </div>
    <ul class="text-left h6">
      <li>画像ファイル(png/jpg/jpeg/gif)以外は追加できません</li>
      <li>このアプリは画僧ファイルはサーバー等にアップロードしません。</li>
      <li>スマホでもPCでも利用できます。</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { mdiCameraPlus } from '@mdi/js'
import TheIcon from '@/components/TheIcon'
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.droparea {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  color: $textColor;
  filter: drop-shadow(0 0 20px $shadowColor);
  border-radius: $borderRadius;
  line-height: 2;
}
.hr {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80%;
  width: 100%;

  &:after,
  &::before {
    content: '';
    display: inline-block;
    width: 30%;
    border-top: 1px solid $borderColor;
    margin-right: 1em;
    margin-left: 1em;
  }
}
</style>
