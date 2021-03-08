import {
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

import { daysFromNow, dateTimeFormat } from './dates';

import { fieldInputErrors, fieldInputProperties } from './fieldPropHandler';

import regex from './regex';

export {
  breadcrumbsRoutes,
  dateTimeFormat,
  daysFromNow,
  fieldInputErrors,
  fieldInputProperties,
  getCategoryAPI,
  getCategoriesAPI,
  getEveryReviewsAPI,
  getProductAPI,
  getProductsAPI,
  getReviewsAPI,
  loginAPI,
  logoutAPI,
  postReviewAPI,
  regex,
};
