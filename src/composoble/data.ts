import timezoneRaw from 'timezones.json'

export const timezone = timezoneRaw.flatMap((i) => {
  return i.utc.map((u) => {
    return {
      name: u,
      offset: i.offset,
      isdst: i.isdst,
    }
  })
})
