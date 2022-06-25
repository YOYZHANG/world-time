import { time } from 'console'
import type { Timezone } from '../types'

export const zoneNames = useStorage<string[]>('world-time-zones', [])
export const zones = computed(() => zoneNames.value.map(name => timezone.find(i => i.name === name)))

export function addToTimezone(timezone: Timezone) {
  console.log(timezone, 'timezone')
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
  console.log(index)
  if (index === -1)
    return
  const target = index + delta
  console.log(target)
  const other = zoneNames.value[target]
  console.log(other)
  zoneNames.value[target] = timezone.name
  zoneNames.value[index] = other
}

