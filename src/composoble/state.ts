import type { Timezone } from '../types'

export const now = useNow({ interval: 30_000 })
export const zoneNames = useStorage<string[]>('world-time-zones', [])
export const zones = computed(() => zoneNames.value.map(name => timezone.find(i => i.name === name)))

export function addToTimezone(timezone: Timezone) {
  zoneNames.value.push(timezone.name)
}

const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
if (!zones.value.length)
  zoneNames.value.push(userTimezone)

export function removeZone(timezone: Timezone) {
  zoneNames.value = zoneNames.value.filter(name => name !== timezone.name)
}

export function moveZone(timezone: Timezone, delta: number) {
  const index = zoneNames.value.indexOf(timezone.name)
  if (index === -1)
    return
  const target = index + delta
  const other = zoneNames.value[target]
  zoneNames.value[target] = timezone.name
  zoneNames.value[index] = other
}

