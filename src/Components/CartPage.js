import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Button,
  CartStyled,
  HeadingPrimary,
  HeadingSecondary,
  Image,
  Link,
  Paragraph,
  Small,
} from '../common';

import { useCartContext } from '../context/CartContext';
import { useCheckoutContext } from '../context/CheckoutContext';

import { daysFromNow, dateTimeFormat } from '../utils';

const CartPage = () => {
  const { cart, addProduct, removeProduct } = useCartContext();
  const { calcOrder } = useCheckoutContext();

  useEffect(() => {
    calcOrder(cart);
  }, [cart]);

  return (
    <CartStyled.Cart>
      <CartStyled.CartLeftContainer>
        <CartStyled.CartTitlePage>
          <HeadingPrimary>Your Cart</HeadingPrimary>
        </CartStyled.CartTitlePage>
        {!cart.length ? (
          <HeadingSecondary>Empty</HeadingSecondary>
        ) : (
          cart.map((prop) => (
            <CartStyled.CartCard key={prop.id}>
              <CartStyled.CartCardDetails>
                <CartStyled.CartCardDetailsImage>
                  <RouterLink to={`/products/${prop.id}`}>
                    <Image rest={{ src: prop.image, alt: prop.title }} />
                  </RouterLink>
                </CartStyled.CartCardDetailsImage>

                <CartStyled.CartCardDetailsTitle>
                  <Small>
                    <Link href={`/products/${prop.id}`}>{prop.title}</Link>
                  </Small>
                </CartStyled.CartCardDetailsTitle>
              </CartStyled.CartCardDetails>

              <CartStyled.CartCardShipping>
                <CartStyled.CartCardShippingType>
                  <Small tagType="strong">
                    {prop.price >= 50 ? 'FREE Shipping' : '3-DAY Shipping'}
                  </Small>
                </CartStyled.CartCardShippingType>

                <CartStyled.CartCardShippingInfo>
                  <Small sizetype="xsmall">Get it by</Small>
                  &nbsp;
                  <Small tagType="strong" sizetype="xsmall">
                    {dateTimeFormat(
                      'en-US',
                      { weekday: 'short' },
                      daysFromNow(3)
                    )}
                  </Small>
                </CartStyled.CartCardShippingInfo>
              </CartStyled.CartCardShipping>

              <CartStyled.CartCardAction>
                <CartStyled.CartCardQuantity>
                  <Paragraph>
                    Quantity:&nbsp;
                    <span>{prop.quantity}</span>
                  </Paragraph>
                </CartStyled.CartCardQuantity>

                <CartStyled.CartCardRaiseLower>
                  <Button
                    rest={{
                      type: 'button',
                    }}
                  >
                    -
                  </Button>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: () => addProduct(prop),
                    }}
                  >
                    +
                  </Button>
                </CartStyled.CartCardRaiseLower>

                <CartStyled.CartCardRemove>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: () => removeProduct(prop.id),
                    }}
                  >
                    Remove
                  </Button>
                </CartStyled.CartCardRemove>
              </CartStyled.CartCardAction>

              <CartStyled.CartCardPrice>
                <Paragraph tagtype="strong">{`$${prop.price}`}</Paragraph>
              </CartStyled.CartCardPrice>
              {/* <div className="cart__product-quantity">
                Quantity:&nbsp;
                {prop.quantity}
              </div> */}

              {/* <div className="cart__product-remove">
                <button
                  type="button"
                  className="btn"
                  onClick={() => removeProduct(prop.id)}
                >
                  Remove
                </button>
              </div> */}
            </CartStyled.CartCard>
          ))
        )}
      </CartStyled.CartLeftContainer>
    </CartStyled.Cart>
  );
};

export default CartPage;
