<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from '../types'
import { timezone } from '../composoble/data'

const fuse = new Fuse(timezone, {
  keys: ['name'],
})

let input = $ref('')
let index = $ref(0)
const searchResult = $computed(() => {
  return fuse.search(input)
})

function add(t: Timezone) {
  addToTimezone(t)
  input = ''
  index = 0
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown')
    index = (index + 1) % searchResult.length
  else if (e.key === 'ArrowUp')
    index = (index - 1 + searchResult.length) % searchResult.length
  else if (e.key === 'Enter')
    add(searchResult[index].item)
}
</script>

<template>
  <div relative>
    <input
      v-model="input"
      type="text"
      placeholder="search timezone...."
      px2 py1 border="~ base rounded" bg-transparent w-full shadow
      @keydown="onKeyDown"
    >
    <div
      absolute top-full z-10
      bg-base border="~ base"
      left-0 right-0 max-h-100 overflow-auto
    >
      <button
        v-for="i, idx of searchResult"
        :key="i.refIndex" block
        :class="idx === index ? 'bg-gray-5' : ''" w-full
        @click="add(i.item)"
      >
        <timezone-item :timezone="i.item" />
      </button>
    </div>
  </div>
</template>

