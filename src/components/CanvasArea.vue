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
import ImgItem from '@/components/ImgItem'
import {
  useCanvasSize,
  useGridCount,
  useGridGap,
  useGridPos,
  useFontSize,
  useFontBold,
  useFontPos,
  useBgColor,
  useFiles,
  useFontColor,
  useBgTrans
} from '@/composables/State'

const files = useFiles()
const canvasSize = useCanvasSize()
const gridCount = useGridCount()
const gridGap = useGridGap()
const gridPos = useGridPos()
const fontSize = useFontSize()
const fontBold = useFontBold()
const fontPos = useFontPos()
const bgColor = useBgColor()
const fontColor = useFontColor()
const bgTrans = useBgTrans()

const gridTemplateColumns = computed(() => 'repeat(' + gridCount.value + ', 1fr)')
const fontWeight = computed(() => fontBold.value ? 'bold' : 'normal')
const backgGound = computed(() => bgTrans.value ? 'transparent' : bgColor.value)

const sort = ({ direc, index }) => {
  const file = files.value
  console.log('sort', direc)
  if (direc === 'prev') {
    file.splice(index - 1, 2, file[index], file[index - 1])
  }
  if (direc === 'next') {
    file.splice(index, 2, file[index + 1], file[index])
  }
}

const remove = (index) => {
  console.log(index)
  const file = files.value
  file.splice(index, 1)
}
</script>

<style scoped>
.canvas {
  display: grid;
  width: v-bind(canvasSize + 'px');
  grid-template-columns: v-bind(gridTemplateColumns);
  gap: v-bind(gridGap + 'px');
  grid-gap: v-bind(gridGap + 'px');
  padding: v-bind(gridGap + 'px');
  place-items: v-bind(gridPos);
  font-size: v-bind(fontSize + 'px');
  text-align: v-bind(fontPos);
  background: v-bind(backgGound);
  color: v-bind(fontColor);
  font-weight: v-bind(fontWeight);
}
</style>
