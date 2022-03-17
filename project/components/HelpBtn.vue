<template>
  <div>
    <div
      class="helpbtn text-btn"
      @click="onToggleHelp()"
    >
      <TheIcon
        :path="mdiHelpCircleOutline"
        size="20px"
        class="mr-1"
      />
      <span class="no-sp">使い方</span>
    </div>
    <HelpArea
      v-if="isHelp"
      @close="onToggleHelp()"
    />
  </div>
</template>

<script setup lang="ts">
import { mdiHelpCircleOutline } from '@mdi/js'
import TheIcon from '@/components/TheIcon'

const createHelp = useHelp()
const isHelp = createHelp.isHelp
const onToggleHelp = () => createHelp.onToggleHelp()
</script>

<style lang="scss" scoped>
.helpbtn {
  display: flex;
  align-items: center;
}
</style>
