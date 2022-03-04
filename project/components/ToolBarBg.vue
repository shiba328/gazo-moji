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
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToolBg } from '@/composables/Tool'
import ToolBarItem from '@/components/ToolBarItem'

const tools = useToolBg()
</script>
