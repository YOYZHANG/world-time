<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const uppercase = computed(( ) => props.name.toLocaleUpperCase())
</script>

<template>
  <div text="red" font-sans>hello222, {{uppercase}}</div>
  <div i-carbon-bee text-yellow></div>
</template>
