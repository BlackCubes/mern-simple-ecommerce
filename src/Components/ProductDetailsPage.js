import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addProduct } = useCartContext();
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

            <div className="product-details__cart-add">
              <button
                type="button"
                className="btn"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
