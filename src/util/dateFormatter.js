export function formatDate(date_input) {
  const date = new Date(date_input);

  // Check if date is a valid date object. If not valid, return input value
  if (date instanceof Date && isNaN(date)) return date_input;

  return Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(date);
}

export function formatDateTime(date_input) {
  const date = new Date(date_input);

  // Check if date is a valid date object. if not valid, return input value
  if (date instanceof Date && isNaN(date)) return date_input;

  const formattedDateTime = Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);

  const styledDateTime = formattedDateTime.replace(",", " @");

  return styledDateTime;
}

export const today = formatDate(new Date());
