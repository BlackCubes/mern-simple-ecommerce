import React from 'react';
import { Link } from 'react-router-dom';

import { HeadingSecondary } from '../common';

import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductContext';

const ProductsPage = () => {
  const { addProduct } = useCartContext();
  const { products } = useProductContext();

  return (
    <div className="product--wrapper">
      {!products ? (
        <HeadingSecondary>Hello!</HeadingSecondary>
      ) : (
        products.map((prop, key) => (
          <div key={prop.id} className="product">
            <HeadingSecondary>
              <Link to={`/products/${prop.id}`}>{prop.title}</Link>
            </HeadingSecondary>

            <div
              className="product__price"
              onClick={() => addProduct(products[key])}
              onKeyDown={() => addProduct(products[key])}
              role="presentation"
            >
              {prop.price}
            </div>

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
