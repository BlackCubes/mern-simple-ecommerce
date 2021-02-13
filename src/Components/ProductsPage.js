import React from 'react';

import { useProductContext } from '../context/ProductContext';

const ProductsPage = () => {
  const { products, selectProduct } = useProductContext();

  return (
    <div className="product--wrapper">
      {!products ? (
        <div>Hello!</div>
      ) : (
        products.map((prop) => (
          <div
            key={prop.id}
            className="product"
            onClick={() => selectProduct(prop.id)}
            onKeyDown={() => selectProduct(prop.id)}
            role="presentation"
          >
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
