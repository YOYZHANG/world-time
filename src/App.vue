<script setup lang="ts">
import { zones } from './composoble/state'
</script>

<template>
  <div border="~ gray/20" m2>
    <action-bar />
    <pre>{{ zones }}</pre>
    <time-schedular />
  </div>
</template>

<style>
html {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
