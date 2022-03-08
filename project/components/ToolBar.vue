<template>
  <div class="toolbar flex nowrap justify-center">
    <div class="Upload bar flex items-center">
      <label
        class="cell btn text-center"
      >
        <TheIcon
          :path="mdiCameraPlus"
          size="24px"
        />
        <span class="label">Upload</span>
        <input type="file" style="display:none" multiple @change="$emit('upload', $event)">
      </label>
    </div>
    <div class="Main bar flex nowrap">
      <template
        v-for="tool, i in tools"
        :key="tool.key"
      >
        <div
          :class="tool.key"
          class="cell"
        >
          <div class="label" v-text="tool.label" />
          <ToolBarComp
            :id="tool.key"
            :label="tool.label"
            :tools="tool.tools"
          />
        </div>
        <TheDivider
          v-if="tools.length - 1 != i"
        />
      </template>
    </div>
    <div class="Preview bar flex items-center">
      <div
        class="cell btn text-center"
        @click="preview"
      >
        <TheIcon
          :path="mdiDownload"
          size="24px"
        />
        <span class="label">Preview</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiCameraPlus, mdiDownload } from '@mdi/js'
import { getPreviewImg } from '@/composables/Main'
import { useIsDialog } from '@/composables/state/Default'
import { useTools } from '@/composables/Tool'

import TheIcon from '@/components/TheIcon'
import ToolBarComp from '@/components/ToolBarComp'
import TheDivider from '@/components/TheDivider'

const tools = useTools()
const isDialog = useIsDialog()
const preview = () => {
  getPreviewImg()
  isDialog.value = true
}
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.toolbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  filter: drop-shadow(0 0 20px $barShadowColor);
  margin-bottom: 1em;
  color: $barTextColor;
  z-index: 1;
  overflow: auto;

  @include mq-down(lg) {
    justify-content: flex-start;
  }
}
.Main {
  margin: 0 1em;
}
.bar {
  border-radius: $borderRadius;
  background: $barBgColor;
}
.label {
  display: inline-block;
  font-size: 10px;
  line-height: 1;
  font-weight: bold;
  margin-bottom: 4px;
}
.cell {
  padding: 4px;
  margin: 4px;
  border-radius: 4px;
  line-height: 1;
}
.cell:hover {
  background: $barHoverColor;
}
.cell.btn:hover {
  background: $barTextColor;
  color: #fff;
}
</style>
