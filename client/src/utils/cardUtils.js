import Payment from 'payment';

const clearNonDigits = (value = '') => value.replace(/\D+/g, '');

export const formatCreditCardNumber = (value) => {
  if (!value) return value;

  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNonDigits(value);
  let formatValue;

  switch (issuer) {
    case 'amex':
      formatValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case 'dinersclub':
      formatValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      formatValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }

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
  return clearValue.slice(0, 4);
};

export const formatCreditCardNumOutput = (value) => {
  const numArr = value.split(' ');
  const lastValue = numArr.pop();

  const paddedArr = numArr.map((val) => val.replaceAll(/\d/gi, '*'));
  const paddedValues = paddedArr.join(' ');

  return `${paddedValues} ${lastValue}`;
};
