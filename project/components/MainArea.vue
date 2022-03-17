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
      @onChange="onChange"
    />
    <CanvasArea
      v-if="files.length > 0"
      id="canvas"
    />
    <ToolBar
      @upload="onChange"
      @preview="onTogglePreview"
    />
    <PreviewArea
      v-if="isPreview"
      @close="onTogglePreview"
    />
  </div>
</template>

<script setup lang="ts">
import DropArea from '@/components/DropArea.vue'
import CanvasArea from '@/components/CanvasArea.vue'
import ToolBar from '@/components/ToolBar.vue'
import PreviewArea from '@/components/PreviewArea.vue'

import { useFiles } from '@/composables/state/Default'

const files = useFiles()

const createMain = useMain()
const onDrag = createMain.onDrag()
const onDrop = createMain.onDrop()
const onChange = (e: Event) => createMain.onChange(e)
const onTogglePreview = () => createMain.onTogglePreview()
const canvasWidht = computed(() => createMain.getCanvasWidth())
const isPreview = createMain.isPreview
const dragover = createMain.dragover
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
.dragover  {
  background-image: linear-gradient(45deg, rgb(33 150 248 / 30%) 25%, transparent 25%), linear-gradient(-45deg,rgb(33 150 248 / 30%) 25%, transparent 25%), linear-gradient(45deg, transparent 75%,rgb(33 150 248 / 30%) 75%), linear-gradient(-45deg, transparent 75%,rgb(33 150 248 / 30%) 75%);
  background-color: rgb(33 150 248 / 30%);
}
#canvas {
  position: relative;
}
</style>
