import React, { useEffect } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

import {
  Button,
  HeadingQuaternary,
  HeadingSecondary,
  Image,
  Small,
} from '../common';

import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductContext';

import { daysFromNow, dateTimeFormat } from '../utils';

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
        <HeadingQuaternary>Loading...</HeadingQuaternary>
      ) : (
        <>
          <RouterLink to="/products">Back</RouterLink>
          <div className="product-details">
            <div className="product-details__title">
              <HeadingSecondary>{product.title}</HeadingSecondary>
            </div>
            <div className="product-details__category">
              <Small tagType="strong">Type:</Small>
              &nbsp;
              <Small>{product.category}</Small>
            </div>
            <div className="product-details__image">
              <Image rest={{ src: product.image, alt: product.title }} />
            </div>
            <div className="product-details__price">
              <HeadingQuaternary>{product.price}</HeadingQuaternary>
            </div>
            <Small tagType="strong" colorType="lime_green">
              Get it in 3 days
            </Small>
            <Small tagType="strong">
              {product.price >= 50 ? 'FREE Shipping' : '3-DAY Shipping:'}
            </Small>
            &nbsp;
            <Small>
              Get it by&nbsp;
              {dateTimeFormat('en-US', { weekday: 'short' }, daysFromNow(3))}
            </Small>
            <div className="product-details__cart-add">
              <Button
                rest={{
                  type: 'button',
                  onClick: () => addProduct(product),
                }}
              >
                Add to Cart
              </Button>
              {/* <button
                type="button"
                className="btn"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button> */}
            </div>
            <div className="product-details__description">
              {product.description}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
