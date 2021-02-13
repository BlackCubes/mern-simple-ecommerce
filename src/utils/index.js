import axios from 'axios';

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

export default {
  getProductsAPI,
  getProductAPI,
};
