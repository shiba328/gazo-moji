<template>
  <div class="canvas">
    <ImgItem
      v-for="file, i in files"
      :key="i"
      :src="file"
      :index="i"
      :total="files.length"
      @sort="sort"
      @remove="remove"
    />
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import ImgItem from '@/components/ImgItem'
import {
  useBgColor,
  useBgTrans,
  useCanvasCrop,
  useCanvasSize,
  useFontBold,
  useFontColor,
  useFontPos,
  useFontSize,
  useGridCount,
  useGridGap,
  useGridPos
} from '@/composables/state/Tool'

import { useFiles } from '@/composables/state/Default'
import { useSort, useRemove } from '@/composables/Canvas'

const files: Ref<string[]> = useFiles()
const sort = ({ direc, index }) => { useSort({ files, direc, index }) }
const remove = (index) => { useRemove({ files, index }) }

// CanvasStyle
const bgColor = useBgColor()
const bgTrans = useBgTrans()
const canvasCrop = useCanvasCrop()
const canvasSize = useCanvasSize()
const fontBold = useFontBold()
const fontColor = useFontColor()
const fontPos = useFontPos()
const fontSize = useFontSize()
const gridCount = useGridCount()
const gridGap = useGridGap()
const gridPos = useGridPos()

const backgGound = computed(() => bgTrans.value ? bgColor.value : 'transparent')
const canvasWidth = computed(() => canvasCrop.value ? canvasSize.value + 'px' : 'auto')
const fontWeight = computed(() => fontBold.value ? 'bold' : 'normal')
const gridTemplateColumns = computed(() => 'repeat(' + gridCount.value + ', 1fr)')
const canvasMax = computed(() => canvasCrop.value ? '100%' : 'none')
</script>

<style scoped>
.canvas {
  background: v-bind(backgGound);
  box-sizing: border-box;
  color: v-bind(fontColor);
  display: grid;
  font-size: v-bind(fontSize + 'px');
  font-weight: v-bind(fontWeight);
  gap: v-bind(gridGap + 'px');
  grid-gap: v-bind(gridGap + 'px');
  grid-template-columns: v-bind(gridTemplateColumns);
  padding: v-bind(gridGap + 'px');
  place-items: v-bind(gridPos);
  text-align: v-bind(fontPos);
  width: v-bind(canvasWidth);
}
:deep(img) {
  max-width: v-bind(canvasMax);
  max-height: v-bind(canvasMax);
}
</style>
