<template>
  <div class="toolbar">
    <div class="update bar">
      <label class="cell btn text-center">
        <TheIcon
          :path="mdiCameraPlus"
          size="24px"
        />
        <span class="label">Upload</span>
        <input type="file" style="display:none" multiple @change="$emit('upload', $event)">
      </label>
    </div>
    <div class="tools bar">
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
    <div class="preview bar">
      <div
        class="cell btn text-center"
        @click="$emit('preview')"
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

import TheIcon from '@/components/TheIcon'
import ToolBarComp from '@/components/ToolBarComp'
import TheDivider from '@/components/TheDivider'

const tools = useTools()
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.toolbar {
  position: fixed;
  display: flex;
  bottom: 12px;
  width: 100%;
  filter: drop-shadow(0 0 20px $barShadowColor);
  color: $barTextColor;
  z-index: 1;
  justify-content: center;
  flex-wrap: nowrap;

  @include mq-down(lg) {
    justify-content: space-between;
    bottom: 0;
  }
}
.tools {
  margin: 0 1em;
  @include mq-down(lg) {
    overflow: auto;
  }
}
.bar {
  border-radius: $borderRadius;
  background: $barBgColor;
  margin-bottom: 1em;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
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
