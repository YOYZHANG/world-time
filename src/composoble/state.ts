import type { Timezone } from '../types'

export const zoneNames = useStorage<string[]>('world-time-zones', [])
console.log(zoneNames)
export const zones = computed(() => zoneNames.value.map(name => timezone.find(i => i.name === name)))

export function addToTimezone(timezone: Timezone) {
  zoneNames.value.push(timezone.name)
}

const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
if (!zones.value.length)
  zoneNames.value.push(userTimezone)

