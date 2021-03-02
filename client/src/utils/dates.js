export const daysFromNow = (days) => {
  const currentDay = new Date();
  return currentDay.setDate(currentDay.getDate() + days);
};

export const dateTimeFormat = (language, options, format) =>
  new Intl.DateTimeFormat(language, options).format(format);
