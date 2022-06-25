<script setup lang="ts">
import type { Timezone } from '../types'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const state = computed(() => timezone.name.split('/')[0])
const city = computed(() => timezone.name.split('/')[1])
</script>

<template>
  <div flex gap4 py1>
    <div w-8 ma text-right font-bold>
      {{ timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset }}
    </div>
    <div text-left flex-auto>
      <div>
        {{ city }}
      </div>
      <div text-sm op50 leading-1em>
        {{ state }}
      </div>
    </div>
  </div>
</template>
