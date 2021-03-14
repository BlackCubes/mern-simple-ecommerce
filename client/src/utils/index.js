import {
  deleteReviewAPI,
  getProductsAPI,
  getProductAPI,
  getCategoriesAPI,
  getCategoryAPI,
  getEveryReviewsAPI,
  getReviewsAPI,
  loginAPI,
  logoutAPI,
  postReviewAPI,
} from './api';

import breadcrumbsRoutes from './breadcrumbsRoutes';

import {
  formatCreditCardNumber,
  formatCreditCardNumOutput,
  formatCvc,
  formatExpDate,
} from './cardUtils';

import { daysFromNow, dateTimeFormat } from './dates';

import { fieldInputErrors, fieldInputProperties } from './fieldPropHandler';

import headers from './headers';

import regex from './regex';

export {
  breadcrumbsRoutes,
  dateTimeFormat,
  daysFromNow,
  deleteReviewAPI,
  fieldInputErrors,
  fieldInputProperties,
  formatCreditCardNumber,
  formatCreditCardNumOutput,
  formatCvc,
  formatExpDate,
  getCategoryAPI,
  getCategoriesAPI,
  getEveryReviewsAPI,
  getProductAPI,
  getProductsAPI,
  getReviewsAPI,
  headers,
  loginAPI,
  logoutAPI,
  postReviewAPI,
  regex,
};
