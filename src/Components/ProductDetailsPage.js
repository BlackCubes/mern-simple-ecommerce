import React, { useEffect } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

import {
  Button,
  HeadingQuaternary,
  HeadingSecondary,
  Image,
  ProductDetailsStyled,
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

          <ProductDetailsStyled.ProductDetails>
            <ProductDetailsStyled.ProductDetailsHeader>
              <ProductDetailsStyled.ProductDetailsHeaderTitle>
                <HeadingSecondary>{product.title}</HeadingSecondary>
              </ProductDetailsStyled.ProductDetailsHeaderTitle>

              <ProductDetailsStyled.ProductDetailsHeaderData>
                <Small tagType="strong">Type:</Small>
                &nbsp;
                <Small>{product.category}</Small>
              </ProductDetailsStyled.ProductDetailsHeaderData>
            </ProductDetailsStyled.ProductDetailsHeader>

            <ProductDetailsStyled.ProductDetailsInfo>
              <ProductDetailsStyled.ProductDetailsInfoImage>
                <Image rest={{ src: product.image, alt: product.title }} />
              </ProductDetailsStyled.ProductDetailsInfoImage>
            </ProductDetailsStyled.ProductDetailsInfo>

            <ProductDetailsStyled.ProductDetailsPriceShippingCart>
              <ProductDetailsStyled.ProductDetailsPrice>
                <HeadingQuaternary>{`$${product.price}`}</HeadingQuaternary>
              </ProductDetailsStyled.ProductDetailsPrice>

              <ProductDetailsStyled.ProductDetailsPriceShippingCartRow>
                <ProductDetailsStyled.ProductDetailsShippingBuy>
                  <Small tagType="strong" colorType="lime_green">
                    Get it in 3 days
                  </Small>
                </ProductDetailsStyled.ProductDetailsShippingBuy>

                <ProductDetailsStyled.ProductDetailsShippingOption>
                  <Small tagType="strong">
                    {product.price >= 50 ? 'FREE Shipping:' : '3-DAY Shipping:'}
                  </Small>
                  &nbsp;
                  <Small>
                    Get it by&nbsp;
                    {dateTimeFormat(
                      'en-US',
                      { weekday: 'short' },
                      daysFromNow(3)
                    )}
                  </Small>
                </ProductDetailsStyled.ProductDetailsShippingOption>
              </ProductDetailsStyled.ProductDetailsPriceShippingCartRow>

              <ProductDetailsStyled.ProductDetailsPriceShippingCartRow>
                <div className="product-details__cart-add">
                  <Button
                    rest={{
                      type: 'button',
                      onClick: () => addProduct(product),
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </ProductDetailsStyled.ProductDetailsPriceShippingCartRow>
            </ProductDetailsStyled.ProductDetailsPriceShippingCart>
          </ProductDetailsStyled.ProductDetails>
          <div className="product-details__description">
            {product.description}
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
