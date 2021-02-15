import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Button,
  HeadingQuaternary,
  HeadingSecondary,
  Image,
  Link,
  // Paragraph,
  ProductsStyled,
  Small,
} from '../common';

import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductContext';

import { daysFromNow, dateTimeFormat } from '../utils';

const ProductsPage = () => {
  const { addProduct } = useCartContext();
  const { products } = useProductContext();

  return (
    <ProductsStyled.Products>
      {!products ? (
        <HeadingSecondary>Hello!</HeadingSecondary>
      ) : (
        products.map((prop, key) => (
          <ProductsStyled.ProductsCard key={prop.id}>
            <ProductsStyled.ProductsCardImage>
              <RouterLink to={`/products/${prop.id}`}>
                <Image rest={{ src: prop.image, alt: prop.title }} />
              </RouterLink>
            </ProductsStyled.ProductsCardImage>

            <ProductsStyled.ProductsCardRightColumn>
              <ProductsStyled.ProductsCardInfo>
                <ProductsStyled.ProductsCardInfoTitle>
                  <HeadingQuaternary>
                    <Link href={`/products/${prop.id}`}>{prop.title}</Link>
                  </HeadingQuaternary>
                </ProductsStyled.ProductsCardInfoTitle>

                <ProductsStyled.ProductsCardInfoShipping>
                  <ProductsStyled.ProductsCardInfoShippingBuy>
                    <Small tagType="strong" colorType="lime_green">
                      Buy it today
                    </Small>
                  </ProductsStyled.ProductsCardInfoShippingBuy>

                  <ProductsStyled.ProductsCardInfoShippingOption>
                    <Small tagType="strong">
                      {prop.price >= 50 ? 'FREE Shipping:' : '3-DAY Shipping:'}
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
                  </ProductsStyled.ProductsCardInfoShippingOption>
                </ProductsStyled.ProductsCardInfoShipping>
              </ProductsStyled.ProductsCardInfo>

              <ProductsStyled.ProductsCardPriceCart
                className="product__price"
                onClick={() => addProduct(products[key])}
                onKeyDown={() => addProduct(products[key])}
                role="presentation"
              >
                <ProductsStyled.ProductsCardPrice>
                  <HeadingQuaternary>{`$${prop.price}`}</HeadingQuaternary>
                </ProductsStyled.ProductsCardPrice>

                <ProductsStyled.ProductsCardCartBtn>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: () => addProduct(products[key]),
                    }}
                  >
                    Add to Cart
                  </Button>
                </ProductsStyled.ProductsCardCartBtn>
              </ProductsStyled.ProductsCardPriceCart>
            </ProductsStyled.ProductsCardRightColumn>
          </ProductsStyled.ProductsCard>
        ))
      )}
    </ProductsStyled.Products>
  );
};

export default ProductsPage;
