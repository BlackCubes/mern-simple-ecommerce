import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useProductContext } from '../context/ProductContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { getProduct, product } = useProductContext();

  useEffect(() => {
    if (id) getProduct(id);
  }, [id]);

  return (
    <>
      {!product ? (
        <div>Loading...</div>
      ) : (
        <>
          <Link to="/products">Back</Link>
          <div className="product-details">
            <div className="product-details__title">{product.title}</div>

            <div className="product-details__price">{product.price}</div>

            <div className="product-details__description">
              {product.description}
            </div>

            <div className="product-details__category">{product.category}</div>

            <div className="product-details__image">{product.image}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
