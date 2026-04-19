const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatClockTime(value: Date) {
  return timeFormatter.format(value);
}

export function formatClockDate(value: Date) {
  return dateFormatter.format(value);
}
