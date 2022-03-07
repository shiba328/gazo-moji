<template>
  <div class="flex nowrap">
    <div
      v-for="tool, i in tools"
      :key="tool.key"
      :class="[tool.key, { 'mr-1': tools.length - 1 != i }]"
    >
      <ToolBarItem
        :id="tool.key"
        :icon="tool.icon"
        :value="tool.value"
        :apply="tool.apply"
        :components="tool.components"
        :attr="tool.attr"
        :items="tool.items"
        :state="tool.state"
        :type="tool.type"
        :disabled="tool.disabled"
      />
    </div>
  </div>
</template>

<script setup lang="ts">import { IFTool, IFToolBar } from '@/composables/Tool'
import ToolBarItem from '@/components/ToolBarItem'

// TODO: 変更待ち
interface Props extends IFToolBar {
  tools: IFTool[]
  id: string
  label: string
}

defineProps<Props>()
</script>
