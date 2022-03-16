<template>
  <div class="canvas">
    <ImgItem
      v-for="file, i in files"
      :key="i"
      :src="file"
      :index="i"
      :total="files.length"
      @sort="onSort"
      @remove="onRemove"
    />
  </div>
</template>

<script setup lang="ts">
import { useCanvas } from '@/composables/Canvas'

const createCanvas = useCanvas()
const files = createCanvas.files
const onSort = ({ direc, index }) => createCanvas.useSort({ direc, index })
const onRemove = (index: number) => createCanvas.useRemove(index)

// CanvasStyle
const canvasStyle = createCanvas.canvasStyle()
const bgColor = canvasStyle.useBgColor()
const bgTrans = canvasStyle.useBgTrans()
const canvasCrop = canvasStyle.useCanvasCrop()
const canvasSize = canvasStyle.useCanvasSize()
const fontBold = canvasStyle.useFontBold()
const fontColor = canvasStyle.useFontColor()
const fontPos = canvasStyle.useFontPos()
const fontSize = canvasStyle.useFontSize()
const gridCount = canvasStyle.useGridCount()
const gridGap = canvasStyle.useGridGap()
const gridPos = canvasStyle.useGridPos()

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
