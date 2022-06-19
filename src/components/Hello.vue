<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const uppercase = computed(( ) => props.name.toLocaleUpperCase())
</script>

<template>
  <div>hello222 {{uppercase}}</div>
</template>
