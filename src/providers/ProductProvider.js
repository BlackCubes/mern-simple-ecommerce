import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ProductContext } from '../context';

import {
  getCategoriesAPI,
  getCategoryAPI,
  getProductsAPI,
  getProductAPI,
} from '../utils';

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState(null);
  console.log('categories: ', categories);

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
    getProducts();
    getCategories();
  }, []);

  const getProduct = async (id) => {
    try {
      const data = await getProductAPI(id);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategory = async (category) => {
    try {
      const data = await getCategoryAPI(category);
      setProducts(data);
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
        getProduct,
        getCategory,
        getCategories,
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
