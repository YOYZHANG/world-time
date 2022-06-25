<script setup lang="ts">
</script>

<template>
  <div p4>
    <div
      v-for="zone of zones.value"
      :key="zone.name"
      px4 py2 border="b base"
    >
      <timezone-item :timezone="zone" />
    </div>
  </div>
</template>

<style>

</style>
