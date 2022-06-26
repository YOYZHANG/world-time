<script setup lang="ts">
import type { Timezone } from '~/types'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const hours = $computed(() => {
  return Array.from({ length: 24 }, (_, i) => (i + timezone.offset + 24 + 1) % 24)
})
</script>

<template>
  <div flex="~ gap2" of-auto border="t b base">
    <div
      v-for="i in hours"
      :key="i"
      border-base
      w-7 h-7 flex="~ col none" justify-center items-center
      leading-1em
      :class="[
        i === 0 ? 'border-l' : '',
        i === 23 ? 'border-r' : '',
      ]"
    >
      {{ (i + timezone.offset + 24) % 24 }}
    </div>
  </div>
</template>
