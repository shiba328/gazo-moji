<template>
  <div
    class="main"
    :class="{'dragover': dragover}"
    @dragover.prevent="onDrag(true)"
    @dragleave.prevent="onDrag(false)"
    @drop.prevent="onDrag(false), onDrop($event)"
  >
    <DropArea
      v-if="files.length === 0"
      @onChange="change"
    />
    <CanvasArea
      v-if="files.length > 0"
      id="canvas"
    />
    <ToolBar
      @upload="change"
    />
  </div>
</template>

<script setup lang="ts">
import DropArea from '@/components/DropArea'
import CanvasArea from '@/components/CanvasArea'
import ToolBar from '@/components/ToolBar'
import {
  useCanvasCrop,
  useCanvasSize
} from '@/composables/state/Tool'

import { useDrag, useUpload } from '@/composables/Main'
import { useFiles } from '@/composables/state/Default'

const dragover = ref(false)

const onDrag = useDrag(dragover)
const onDrop = useUpload()
const change = (e: Event) => useUpload()(e)
const files = useFiles()

const canvasCrop = useCanvasCrop()
const canvasSize = useCanvasSize()
const canvasWidht = computed(() => canvasCrop.value ? canvasSize.value + 'px' : 'auto')
</script>
<style scoped>
.main {
  width: v-bind(canvasWidht);
}
</style>
<style lang="scss" scoped>
@import "@/assets/main.scss";
.main {
  width: 100%;
  height: 98%;
  overflow: auto;
  flex: 1 1 0%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px 0 100px 0;

  background-image: linear-gradient(45deg, #eee 25%, transparent 25%), linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(-45deg, transparent 75%, #eee 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
.dragover .bg::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(33 150 248 / 30%);
}
#canvas {
  position: relative;
}
</style>
