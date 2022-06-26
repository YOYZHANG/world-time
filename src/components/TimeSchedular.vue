<script setup lang="ts">
</script>

<template>
  <div>
    <div
      v-for="zone, idx of zones.value"
      :key="zone.name"
      px4 py2 border="b base" relative
    >
      <timezone-item :timezone="zone">
        <time-dial :timezone="zone" />
      </timezone-item>
      <div absolute left="-20px" top-0 text-xl flex="~ col" justify-center>
        <button
          icon-btn i-carbon-close m--1px mt2
          title="Remove"
          @click="removeZone(zone)"
        />
        <button
          v-if="idx !== 0"
          icon-btn i-carbon-caret-up m--1px
          title="move up"
          @click="moveZone(zone, -1)"
        />
        <button
          v-if="idx !== zones.value.length - 1"
          icon-btn i-carbon-caret-down m--1px
          title="move down"
          @click="moveZone(zone, 1)"
        />
      </div>
    </div>
  </div>
</template>

<style>

</style>
