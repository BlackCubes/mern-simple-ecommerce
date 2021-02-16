import axios from 'axios';

// API
export const getProductsAPI = async () => {
  try {
    const apiUrl = 'https://fakestoreapi.com/products';
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProductAPI = async (id) => {
  try {
    const apiUrl = `https://fakestoreapi.com/products/${id}`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCategoriesAPI = async () => {
  try {
    const apiUrl = 'https://fakestoreapi.com/products/categories';
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCategoryAPI = async (category) => {
  try {
    const apiUrl = `https://fakestoreapi.com/products/category/${category}`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err);
  }
};

// DATETIME
export const daysFromNow = (days) => {
  const currentDay = new Date();
  return currentDay.setDate(currentDay.getDate() + days);
};

export const dateTimeFormat = (language, options, format) =>
  new Intl.DateTimeFormat(language, options).format(format);
