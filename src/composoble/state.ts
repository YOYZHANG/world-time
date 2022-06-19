import type { Timezone } from 'timezones.json'

export const zones = ref<Timezone[]>([])

export function addToTimezone(timezone: Timezone) {
  zones.value.push(timezone)
}
