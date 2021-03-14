const clearNonDigits = (value = '') => value.replace(/\D+/g, '');

export const formatCreditCardNumber = (value) => {
  if (!value) return value;
  const clearValue = clearNonDigits(value);
  const formatValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
    4,
    8
  )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
  return formatValue.trim();
};

export const formatExpDate = (value) => {
  const clearValue = clearNonDigits(value);
  if (clearValue.length >= 3)
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  return clearValue;
};

export const formatCvc = (value) => {
  const clearValue = clearNonDigits(value);
  return clearValue.slice(0, 3);
};
