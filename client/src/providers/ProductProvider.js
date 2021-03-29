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
  const [apiReviewErr, setApiReviewErr] = useState(null);
  const [homeCategories, setHomeCategories] = useState(null);

  const getHomeCategories = async () => {
    try {
      const data = await getProductsAPI();
      const selectedHomeCategories = {
        electronics: [],
        womenClothing: [],
        jeweleries: [],
      };

      if (data) {
        selectedHomeCategories.electronics = data
          .filter((val) => val.category === 'electronics')
          .slice(0, 4);
        selectedHomeCategories.womenClothing = data
          .filter((val) => val.category === 'women clothing')
          .slice(0, 4);
        selectedHomeCategories.jeweleries = data
          .filter((val) => val.category === 'jewelery')
          .slice(0, 4);
      }

      setHomeCategories(selectedHomeCategories);
    } catch (err) {
      console.log(err);
    }
  };

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
      const apiData = await getReviewsAPI(productId);
      if (apiData.status === 'success') setReviews(apiData.data);
      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiReviewErr(err.message);
    }
  };

  const postReview = async (productId, newData) => {
    try {
      const currentToken = localStorage.getItem('jwt') || null;
      const reviewData = {
        review: newData.review,
        rating: newData.rating,
        userfullname: newData.fullname,
      };

      const apiData = await postReviewAPI(
        productId,
        reviewData,
        headers(currentToken)
      );

      if (apiData.status === 'success') setReviews([...reviews, apiData.data]);
      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiReviewErr(err.message);
    }
  };

  const getEveryReviews = async () => {
    try {
      const apiData = await getEveryReviewsAPI();
      if (apiData.status === 'success') setEveryReviews(apiData.data);
      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiReviewErr(err.message);
    }
  };

  const deleteReview = async (reviewId, verifyPassword) => {
    try {
      const currentToken = localStorage.getItem('jwt') || null;
      const apiData = await deleteReviewAPI(
        reviewId,
        verifyPassword,
        headers(currentToken)
      );

      if (apiData.status === 'success')
        setReviews(reviews.filter((review) => review._id !== reviewId));
      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiReviewErr(err.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setApiReviewErr(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [apiReviewErr]);

  return (
    <ProductContext.Provider
      value={{
        homeCategories,
        products,
        product,
        categories,
        category,
        reviews,
        deleteReview,
        everyReviews,
        getHomeCategories,
        getProduct,
        getProducts,
        getCategory,
        getCategories,
        getReviews,
        postReview,
        getEveryReviews,
        apiReviewErr,
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
