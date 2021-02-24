import axios from 'axios';

import { fieldInputErrors, fieldInputProperties } from './fieldPropHandler';

import regex from './regex';

// API
const getProductsAPI = async () => {
  try {
    const apiUrl = 'https://fakestoreapi.com/products';
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getProductAPI = async (id) => {
  try {
    const apiUrl = `https://fakestoreapi.com/products/${id}`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getCategoriesAPI = async () => {
  try {
    const apiUrl = 'https://fakestoreapi.com/products/categories';
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getCategoryAPI = async (category) => {
  try {
    const apiUrl = `https://fakestoreapi.com/products/category/${category}`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err);
  }
};

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
