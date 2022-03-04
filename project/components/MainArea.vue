<template>
  <div
    class="main flex items-center justify-center"
    :class="{'dragover': dragover}"
    @dragover.prevent="onDrag(true)"
    @dragleave.prevent="onDrag(false)"
    @drop.prevent="onDrag(false), onDrop($event)"
  >
    <div class="bg" />
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

import { useDrag, useDrop } from '@/composables/Main'
import { useFiles } from '@/composables/State'

const dragover = ref(false)

const onDrag = useDrag(dragover)
const onDrop = useDrop()
const change = (e: Event) => useDrop()(e)
const files = useFiles()
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  padding: 5em 0em 8em;
}
.dragover::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(33 150 248 / 30%);
}
.bg {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(45deg, #eee 25%, transparent 25%), linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(-45deg, transparent 75%, #eee 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
#canvas {
  position: relative;
}
</style>
