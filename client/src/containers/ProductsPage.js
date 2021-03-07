import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

import { Button, Image, Link } from '../common';

import {
  ProductsStyled,
  ProductsContainerStyled,
  ProductsCardStyled,
  ProductsCardImageStyled,
  ProductsCardRightColumnStyled,
  ProductsCardInfoStyled,
  ProductsCardInfoTitleStyled,
  ProductsCardInfoShippingStyled,
  ProductsCardInfoShippingBuyStyled,
  ProductsCardInfoShippingOptionStyled,
  ProductsCardPriceCartStyled,
  ProductsCardPriceStyled,
  ProductsCardCartBtnStyled,
  ProductsCardRatingStyled,
} from '../common/Pages';

import {
  HeadingQuaternary,
  HeadingSecondary,
  Small,
} from '../common/Typography';

import { RatingsStatic, Sidebar } from '../Components';

import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductContext';

import { daysFromNow, dateTimeFormat } from '../utils';

const nonDuplicateProductsReviews = (products, reviews, state) => {
  const removedDuplicates = {};

  if (products.length && reviews.length) {
    products.forEach((product) => {
      const hasAProperty = Object.prototype.hasOwnProperty.call(
        removedDuplicates,
        product.id
      );

      if (!hasAProperty) removedDuplicates[product.id] = 0;
    });

    reviews.forEach((review) => {
      const hasAProperty = Object.prototype.hasOwnProperty.call(
        removedDuplicates,
        review.productId
      );

      if (hasAProperty && removedDuplicates[review.productId] === 0)
        removedDuplicates[review.productId] = review.ratingsAverage;
    });
  }

  state(removedDuplicates);
};

const ProductsPage = () => {
  const [productsReviews, setProductsReviews] = useState([]);
  const { addProduct } = useCartContext();
  const {
    products,
    everyReviews,
    getProducts,
    getCategory,
    getEveryReviews,
  } = useProductContext();

  const { category } = useParams();

  useEffect(() => {
    if (category) getCategory(category);
    else if (!category) getProducts();
    getEveryReviews();
  }, [category]);

  nonDuplicateProductsReviews(products, everyReviews, setProductsReviews);

  console.log('productsReviews: ', productsReviews);

  return (
    <ProductsContainerStyled>
      <Sidebar />

      <ProductsStyled>
        {!products ? (
          <HeadingSecondary>Hello!</HeadingSecondary>
        ) : (
          products.map((prop, key) => (
            <ProductsCardStyled key={prop.id}>
              <ProductsCardImageStyled>
                <RouterLink to={`/products/${prop.id}`}>
                  <Image rest={{ src: prop.image, alt: prop.title }} />
                </RouterLink>
              </ProductsCardImageStyled>

              <ProductsCardRightColumnStyled>
                <ProductsCardInfoStyled>
                  <ProductsCardInfoTitleStyled>
                    <HeadingQuaternary>
                      <Link href={`/products/${prop.id}`}>{prop.title}</Link>
                    </HeadingQuaternary>
                  </ProductsCardInfoTitleStyled>

                  <ProductsCardInfoShippingStyled>
                    <ProductsCardRatingStyled>
                      <RatingsStatic rating={1} uniqueOffset={prop.id} />
                    </ProductsCardRatingStyled>

                    <ProductsCardInfoShippingBuyStyled>
                      <Small tagType="strong" colorType="lime_green">
                        Buy it today
                      </Small>
                    </ProductsCardInfoShippingBuyStyled>

                    <ProductsCardInfoShippingOptionStyled>
                      <Small tagType="strong">
                        {prop.price >= 50
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
                    </ProductsCardInfoShippingOptionStyled>
                  </ProductsCardInfoShippingStyled>
                </ProductsCardInfoStyled>

                <ProductsCardPriceCartStyled>
                  <ProductsCardPriceStyled>
                    <HeadingQuaternary>{`$${prop.price}`}</HeadingQuaternary>
                  </ProductsCardPriceStyled>

                  <ProductsCardCartBtnStyled>
                    <Button
                      rest={{
                        type: 'button',
                        onClick: () => addProduct(products[key]),
                      }}
                    >
                      Add to Cart
                    </Button>
                  </ProductsCardCartBtnStyled>
                </ProductsCardPriceCartStyled>
              </ProductsCardRightColumnStyled>
            </ProductsCardStyled>
          ))
        )}
      </ProductsStyled>
    </ProductsContainerStyled>
  );
};

export default ProductsPage;
