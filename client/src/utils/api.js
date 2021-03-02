import axios from 'axios';

// Fake Store API
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

// This Current Website's API (Errez Shop)
export const getReviewsAPI = async (productId) => {
  try {
    const apiUrl = `${process.env.REACT_APP_ERREZ_SERVER_URL}/products/${productId}/reviews`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
