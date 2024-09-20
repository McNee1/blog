export const formatDate = (
  date: string | Date | number | undefined,
  options: Intl.DateTimeFormatOptions
) => {
  const dateTimeFormat = new Intl.DateTimeFormat('ru-RU', options);
  if (typeof date === 'string') {
    return dateTimeFormat.format(+date);
  }
  return dateTimeFormat.format(date);
};
