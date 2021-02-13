import React from 'react';
import { Link } from 'react-router-dom';

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
            <div className="product__title">
              <Link to={`/products/${prop.id}`}>{prop.title}</Link>
            </div>

            <div className="product__price">{prop.price}</div>

            <div className="product__image">
              <Link to={`/products/${prop.id}`}>
                <img src={prop.image} alt={prop.title} />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductsPage;
