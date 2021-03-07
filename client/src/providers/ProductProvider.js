import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ProductContext } from '../context';

import {
  getCategoriesAPI,
  getCategoryAPI,
  getEveryReviewsAPI,
  getProductsAPI,
  getProductAPI,
  getReviewsAPI,
  postReviewAPI,
} from '../utils';

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState(null);
  const [category, setCategory] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [everyReviews, setEveryReviews] = useState(null);

  const getProducts = async () => {
    try {
      const data = await getProductsAPI();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategories = async () => {
    try {
      const data = await getCategoriesAPI();
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getProduct = async (id) => {
    try {
      const data = await getProductAPI(id);
      setProduct(data);
      setCategory(data.category);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategory = async (selectedCategory) => {
    try {
      const data = await getCategoryAPI(selectedCategory);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getReviews = async (productId) => {
    try {
      const { data } = await getReviewsAPI(productId);
      if (data) setReviews(data);
    } catch (err) {
      console.log(err);
    }
  };

  const postReview = async (productId, data) => {
    try {
      const reviewData = {
        review: data.review,
        rating: data.rating,
        userfullname: `${data.firstname} ${data.lastname}`,
      };
      const { newData } = await postReviewAPI(productId, reviewData);
      if (newData) setReviews((oldReviews) => [...oldReviews, newData]);
    } catch (err) {
      console.log(err);
    }
  };

  const getEveryReviews = async () => {
    try {
      const data = await getEveryReviewsAPI();
      if (data) setEveryReviews(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        categories,
        category,
        reviews,
        everyReviews,
        getProduct,
        getProducts,
        getCategory,
        getCategories,
        getReviews,
        postReview,
        getEveryReviews,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
