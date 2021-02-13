import React from 'react';

import useProductContext from '../context';

const ProductsPage = () => {
  const { products } = useProductContext();

  console.log(products);

  return (
    <div className="products-page--wrapper">
      <h1>Hello!!!</h1>
    </div>
  );
};

export default ProductsPage;
