import axios from 'axios';

// This function is used when the Fake Store API server is down
// and the other server needs to be used for the img path
const newImgPath = (data) => {
  const splitString = data.image.split('/');
  const endingImgPath = splitString[splitString.length - 1];
  return `https://fakestoreapi.herokuapp.com/img/${endingImgPath}`;
};

// Fake Store API
export const getProductsAPI = async () => {
  try {
    const apiUrl = 'https://fakestoreapi.herokuapp.com/products';
    const res = await axios.get(apiUrl);
    if (res.status === 200) {
      res.data.forEach((val) => {
        val.image = newImgPath(val);
      });
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getProductAPI = async (id) => {
  try {
    const apiUrl = `https://fakestoreapi.herokuapp.com/products/${id}`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) {
      res.data.image = newImgPath(res.data);
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getCategoriesAPI = async () => {
  try {
    const apiUrl = 'https://fakestoreapi.herokuapp.com/products/categories';
    const res = await axios.get(apiUrl);
    if (res.status === 200) return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCategoryAPI = async (category) => {
  try {
    const apiUrl = `https://fakestoreapi.herokuapp.com/products/category/${category}`;
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
    return err.response.data;
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
    return err.response.data;
  }
};

export const getReviewsAPI = async (productId) => {
  try {
    const apiUrl = `${process.env.REACT_APP_ERREZ_SERVER_URL}/products/${productId}/reviews`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) {
      const { status, data } = res.data;
      return { status, data: data.data };
    }
  } catch (err) {
    return err.response.data;
  }
};

export const postReviewAPI = async (productId, inputData, headers) => {
  try {
    const url = `${process.env.REACT_APP_ERREZ_SERVER_URL}/products/${productId}/reviews`;
    const res = await axios({
      method: 'POST',
      url,
      data: inputData,
      headers,
    });
    if (res.status === 201) {
      const { status, data } = res.data;
      return { status, data: data.data };
    }
  } catch (err) {
    return err.response.data;
  }
};

export const getEveryReviewsAPI = async () => {
  try {
    const apiUrl = `${process.env.REACT_APP_ERREZ_SERVER_URL}/reviews`;
    const res = await axios.get(apiUrl);
    if (res.status === 200) {
      const { status } = res.data;
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

      return { status, data: removeDuplicates };
    }
  } catch (err) {
    return err.response.data;
  }
};

export const deleteReviewAPI = async (reviewId, verifyPassword, headers) => {
  try {
    const url = `${process.env.REACT_APP_ERREZ_SERVER_URL}/reviews/${reviewId}`;
    const res = await axios({
      method: 'DELETE',
      url,
      data: verifyPassword,
      headers,
    });

    if (res.status === 204) return { status: 'success' };
  } catch (err) {
    return err.response.data;
  }
};
