export function getForMattedDate(date) {
  return date.toISOString().slice(0, 10)
}

export function getDateMinusDays(date, days) {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() - days)
  return newDate
}
