<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from 'timezones.json'
import { timezone } from '../composoble/data'
import { addToTimezone } from '../composoble/state'

const fuse = new Fuse(timezone, {
  keys: ['name'],
})

const input = ref('')
const index = ref(0)
const searchResult = computed(() => {
  return fuse.search(input.value)
})

function add(t: Timezone) {
  addToTimezone(t)
  input.value = ''
  index.value = 0
}
</script>

<template>
  <div relative>
    <input
      v-model="input"
      type="text"
      placeholder="search timezone...."
      px2 py1 border="~ gray/15 rounded" bg-transparent w-full
    >
    <div absolute top-full bg-gray-900 left-0 right-0>
      <button
        v-for="i of searchResult"
        :key="i.refIndex" flex gap2
        @click="add(i)"
      >
        <div font-mono w-10 text-right>
          {{ i.item.offset }}
        </div>
        <div>
          {{ i.item.name }}
        </div>
      </button>
    </div>
  </div>
</template>

