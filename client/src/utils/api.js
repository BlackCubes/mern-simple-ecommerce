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
export const loginAPI = async (data, headers) => {
  try {
    const url = `${process.env.REACT_APP_ERREZ_SERVER_URL}/users/login`;
    const res = await axios({
      method: 'POST',
      url,
      data,
      headers,
    });
    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const logoutAPI = async (headers) => {
  try {
    const url = `${process.env.REACT_APP_ERREZ_SERVER_URL}/users/logout`;
    const res = await axios({
      method: 'GET',
      url,
      headers,
    });
    if (res.status === 200) return { status: 'success' };
  } catch (err) {
    console.log(err.response.data);
  }
};

export const getReviewsAPI = async (productId) => {
  try {
    const apiUrl = `${process.env.REACT_APP_ERREZ_SERVER_URL}/products/${productId}/reviews`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data.data;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const postReviewAPI = async (productId, data, headers) => {
  try {
    const url = `${process.env.REACT_APP_ERREZ_SERVER_URL}/products/${productId}/reviews`;
    const res = await axios({
      method: 'POST',
      url,
      data,
      headers,
    });
    if (res.status === 201) return res.data.data;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const getEveryReviewsAPI = async () => {
  try {
    const apiUrl = `${process.env.REACT_APP_ERREZ_SERVER_URL}/reviews`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) {
      const { data } = res.data.data;
      const removeDuplicates = {};

      data.forEach((reviewData) => {
        const hasProperty = Object.prototype.hasOwnProperty.call(
          removeDuplicates,
          reviewData.productId
        );

        if (!hasProperty)
          removeDuplicates[reviewData.productId] = reviewData.ratingsAverage;
      });

      return removeDuplicates;
    }
  } catch (err) {
    console.log(err.response.data);
  }
};
