import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  HeadingQuaternary,
  HeadingSecondary,
  Image,
  // Paragraph,
  ProductsStyled,
} from '../common';

import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductContext';

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
              <Link to={`/products/${prop.id}`}>
                <Image rest={{ src: prop.image, alt: prop.title }} />
              </Link>
            </ProductsStyled.ProductsCardImage>

            <ProductsStyled.ProductsCardRightColumn>
              <ProductsStyled.ProductsCardInfo>
                <HeadingQuaternary>
                  <Link to={`/products/${prop.id}`}>{prop.title}</Link>
                </HeadingQuaternary>
              </ProductsStyled.ProductsCardInfo>

              <ProductsStyled.ProductsCardPriceCart
                className="product__price"
                onClick={() => addProduct(products[key])}
                onKeyDown={() => addProduct(products[key])}
                role="presentation"
              >
                <HeadingQuaternary>{`$${prop.price}`}</HeadingQuaternary>

                <Button
                  rest={{
                    type: 'button',
                    onClick: () => addProduct(products[key]),
                  }}
                >
                  Add to Cart
                </Button>
              </ProductsStyled.ProductsCardPriceCart>
            </ProductsStyled.ProductsCardRightColumn>
          </ProductsStyled.ProductsCard>
        ))
      )}
    </ProductsStyled.Products>
  );
};

export default ProductsPage;
