export function formatDate(time: string) {
  return new Date(time).toISOString().slice(0, 10)
}
