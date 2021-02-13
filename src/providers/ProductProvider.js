import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ProductContext } from '../context';

import { getProductsAPI, getProductAPI } from '../utils';

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  // const [productId, setProductId] = useState(null);
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    try {
      const data = await getProductsAPI();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // const selectProduct = (id) => setProductId(id);

  const getProduct = async (id) => {
    try {
      const data = await getProductAPI(id);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   if (productId) getProduct(productId);
  // }, [productId]);

  // console.log('productId: ', productId);
  console.log('product: ', product);

  return (
    <ProductContext.Provider value={{ products, getProduct, product }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
