import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Image, Link } from '../common';

import {
  CartStyled,
  CartLeftContainerStyled,
  CartTitlePageStyled,
  CartCardStyled,
  CartCardDetailsStyled,
  CartCardDetailsImageStyled,
  CartCardDetailsTitleStyled,
  CartCardShippingStyled,
  CartCardShippingTypeStyled,
  CartCardShippingInfoStyled,
  CartCardActionStyled,
  CartCardQuantityStyled,
  CartCardRaiseLowerStyled,
  CartCardRemoveStyled,
  CartCardPriceStyled,
} from '../common/Pages';

import { CheckoutSidebar } from '../Components';

import {
  HeadingPrimary,
  HeadingSecondary,
  Paragraph,
  Small,
} from '../common/Typography';

import { useCartContext } from '../context/CartContext';
import { useCheckoutContext } from '../context/CheckoutContext';

import { daysFromNow, dateTimeFormat } from '../utils';

const CartPage = () => {
  const { cart, addProduct, decreaseProduct, removeProduct } = useCartContext();
  const { calcOrder } = useCheckoutContext();

  useEffect(() => {
    calcOrder(cart);
  }, [cart]);

  return (
    <CartStyled>
      <CartLeftContainerStyled>
        <CartTitlePageStyled>
          <HeadingPrimary>Your Cart</HeadingPrimary>
        </CartTitlePageStyled>
        {!cart.length ? (
          <HeadingSecondary>Empty</HeadingSecondary>
        ) : (
          cart.map((prop) => (
            <CartCardStyled key={prop.id}>
              <CartCardDetailsStyled>
                <CartCardDetailsImageStyled>
                  <RouterLink to={`/products/${prop.id}`}>
                    <Image rest={{ src: prop.image, alt: prop.title }} />
                  </RouterLink>
                </CartCardDetailsImageStyled>

                <CartCardDetailsTitleStyled>
                  <Small>
                    <Link href={`/products/${prop.id}`}>{prop.title}</Link>
                  </Small>
                </CartCardDetailsTitleStyled>
              </CartCardDetailsStyled>

              <CartCardShippingStyled>
                <CartCardShippingTypeStyled>
                  <Small tagType="strong">
                    {prop.price >= 50 ? 'FREE Shipping' : '3-DAY Shipping'}
                  </Small>
                </CartCardShippingTypeStyled>

                <CartCardShippingInfoStyled>
                  <Small sizetype="xsmall">Get it by</Small>
                  &nbsp;
                  <Small tagType="strong" sizetype="xsmall">
                    {dateTimeFormat(
                      'en-US',
                      { weekday: 'short' },
                      daysFromNow(3)
                    )}
                  </Small>
                </CartCardShippingInfoStyled>
              </CartCardShippingStyled>

              <CartCardActionStyled>
                <CartCardQuantityStyled>
                  <Paragraph>
                    Quantity:&nbsp;
                    <span>{prop.quantity}</span>
                  </Paragraph>
                </CartCardQuantityStyled>

                <CartCardRaiseLowerStyled>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: () => decreaseProduct(prop),
                      disabled: prop.quantity <= 1,
                      duobtn: true,
                    }}
                  >
                    -
                  </Button>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: () => addProduct(prop),
                      duobtn: true,
                    }}
                  >
                    +
                  </Button>
                </CartCardRaiseLowerStyled>

                <CartCardRemoveStyled>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: () => removeProduct(prop.id),
                      fullbtn: true,
                    }}
                  >
                    Remove
                  </Button>
                </CartCardRemoveStyled>
              </CartCardActionStyled>

              <CartCardPriceStyled>
                <Paragraph tagtype="strong">{`$${prop.price}`}</Paragraph>
              </CartCardPriceStyled>
            </CartCardStyled>
          ))
        )}
      </CartLeftContainerStyled>

      <CheckoutSidebar />
    </CartStyled>
  );
};

export default CartPage;
