<script setup lang="ts">
import type { Timezone } from '../types'

const { timezone } = defineProps<{
  timezone: Timezone
}>()
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: timezone.name,
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
})
const state = computed(() => timezone.name.split('/')[0].replace(/_/g, ' '))
const city = computed(() => timezone.name.split('/')[1].replace(/_/g, ' '))
const time = computed(() => formatter.format(now.value))
</script>

<template>
  <div flex flex-wrap gap4 py1>
    <div w-8 ma text-right font-bold>
      {{ timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset }}
    </div>
    <div text-left flex-auto>
      <div>
        {{ city }}
        <sup border="~ base rounded" px1>
          {{ timezone.abbr }}
        </sup>
      </div>
      <div text-sm op50 leading-1em>
        {{ state }}
      </div>
    </div>
    <div tabular-nums>
      {{ time }}
    </div>
    <slot />
  </div>
</template>
