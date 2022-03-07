<template>
  <div class="flex items-center">
    Updated: {{ lastupdate }}
    <a href="https://github.com/shiba328/gazo-moji" target="_blink" SameSite="None">
      <TheIcon
        :path="mdiGithub"
        size="24px"
        class="ml-1"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { mdiGithub } from '@mdi/js'
import data from '@/release-date.json'
import TheIcon from '@/components/TheIcon'
const lastupdate = new Date(data.lastUpdate * 1000).toLocaleDateString()
</script>
