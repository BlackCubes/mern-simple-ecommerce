import {
  getProductsAPI,
  getProductAPI,
  getCategoriesAPI,
  getCategoryAPI,
} from './api';

import { fieldInputErrors, fieldInputProperties } from './fieldPropHandler';

import regex from './regex';

// DATETIME
const daysFromNow = (days) => {
  const currentDay = new Date();
  return currentDay.setDate(currentDay.getDate() + days);
};

const dateTimeFormat = (language, options, format) =>
  new Intl.DateTimeFormat(language, options).format(format);

export {
  dateTimeFormat,
  daysFromNow,
  fieldInputErrors,
  fieldInputProperties,
  getCategoryAPI,
  getCategoriesAPI,
  getProductAPI,
  getProductsAPI,
  regex,
};
