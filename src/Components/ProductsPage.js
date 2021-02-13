import React from 'react';

import { useProductContext } from '../context/ProductContext';

const ProductsPage = () => {
  const { products } = useProductContext();

  console.log(products);

  return (
    <div className="product--wrapper">
      {!products ? (
        <div>Hello!</div>
      ) : (
        products.map((prop) => (
          <div key={prop.id} className="product">
            <div className="product__title">{prop.title}</div>

            <div className="product__price">{prop.price}</div>

            <div className="product__image">{prop.image}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductsPage;
