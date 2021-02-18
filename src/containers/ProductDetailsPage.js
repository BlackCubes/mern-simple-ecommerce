import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Image } from '../common';

import {
  ProductDetailsContainerStyled,
  ProductDetailsStyled,
  ProductDetailsHeaderStyled,
  ProductDetailsHeaderTitleStyled,
  ProductDetailsHeaderDataStyled,
  ProductDetailsBottomContainerStyled,
  ProductDetailsInfoStyled,
  ProductDetailsInfoImageStyled,
  ProductDetailsPriceShippingCartStyled,
  ProductDetailsPriceShippingCartRowStyled,
  ProductDetailsPriceStyled,
  ProductDetailsShippingBuyStyled,
  ProductDetailsShippingOptionStyled,
  ProductDetailsDescriptionStyled,
  ProductDetailsDescriptionHeaderStyled,
  ProductDetailsDescriptionBodyStyled,
} from '../common/Pages';

import {
  HeadingQuaternary,
  HeadingSecondary,
  Paragraph,
  Small,
} from '../common/Typography';

import { CategorySidebar } from '../Components';

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
    <ProductDetailsContainerStyled>
      <ProductDetailsStyled>
        {!product ? (
          <HeadingQuaternary>Loading...</HeadingQuaternary>
        ) : (
          <>
            <ProductDetailsHeaderStyled>
              <ProductDetailsHeaderTitleStyled>
                <HeadingQuaternary>{product.title}</HeadingQuaternary>
              </ProductDetailsHeaderTitleStyled>

              <ProductDetailsHeaderDataStyled>
                <Small tagType="strong">Type:</Small>
                &nbsp;
                <Small>{product.category}</Small>
              </ProductDetailsHeaderDataStyled>
            </ProductDetailsHeaderStyled>

            <ProductDetailsBottomContainerStyled>
              <ProductDetailsInfoStyled>
                <ProductDetailsInfoImageStyled>
                  <Image rest={{ src: product.image, alt: product.title }} />
                </ProductDetailsInfoImageStyled>
              </ProductDetailsInfoStyled>

              <ProductDetailsPriceShippingCartStyled>
                <ProductDetailsPriceStyled>
                  <HeadingSecondary>{`$${product.price}`}</HeadingSecondary>
                </ProductDetailsPriceStyled>

                <ProductDetailsPriceShippingCartRowStyled>
                  <ProductDetailsShippingBuyStyled>
                    <Small tagType="strong" colorType="lime_green">
                      Get it in 3 days
                    </Small>
                  </ProductDetailsShippingBuyStyled>

                  <ProductDetailsShippingOptionStyled>
                    <Small tagType="strong">
                      {product.price >= 50
                        ? 'FREE Shipping:'
                        : '3-DAY Shipping:'}
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
                  </ProductDetailsShippingOptionStyled>
                </ProductDetailsPriceShippingCartRowStyled>

                <ProductDetailsPriceShippingCartRowStyled>
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
                </ProductDetailsPriceShippingCartRowStyled>
              </ProductDetailsPriceShippingCartStyled>
            </ProductDetailsBottomContainerStyled>

            <ProductDetailsDescriptionStyled>
              <ProductDetailsDescriptionHeaderStyled>
                <HeadingQuaternary>Overview</HeadingQuaternary>
              </ProductDetailsDescriptionHeaderStyled>

              <ProductDetailsDescriptionBodyStyled>
                <Paragraph>{product.description}</Paragraph>
              </ProductDetailsDescriptionBodyStyled>
            </ProductDetailsDescriptionStyled>
          </>
        )}
      </ProductDetailsStyled>

      <CategorySidebar />
    </ProductDetailsContainerStyled>
  );
};

export default ProductDetailsPage;
