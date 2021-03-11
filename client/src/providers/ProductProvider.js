import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ProductContext } from '../context';

import {
  deleteReviewAPI,
  getCategoriesAPI,
  getCategoryAPI,
  getEveryReviewsAPI,
  getProductsAPI,
  getProductAPI,
  getReviewsAPI,
  headers,
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

  const postReview = async (productId, newData) => {
    try {
      const currentToken = localStorage.getItem('jwt') || null;
      const reviewData = {
        review: newData.review,
        rating: newData.rating,
        userfullname: `${newData.firstname} ${newData.lastname}`,
      };

      const { data } = await postReviewAPI(
        productId,
        reviewData,
        headers(currentToken)
      );

      if (data) setReviews(reviews.push(data));
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

  const deleteReview = async (reviewId, verifyPassword) => {
    try {
      const currentToken = localStorage.getItem('jwt') || null;
      const { status } = await deleteReviewAPI(
        reviewId,
        verifyPassword,
        headers(currentToken)
      );

      if (status === 'success')
        setReviews(reviews.filter((review) => review._id !== reviewId));
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
        deleteReview,
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
