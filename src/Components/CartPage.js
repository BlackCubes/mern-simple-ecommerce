import React, { useEffect } from 'react';

import { useCartContext } from '../context/CartContext';
import { useCheckoutContext } from '../context/CheckoutContext';

const CartPage = () => {
  const { cart, removeProduct } = useCartContext();
  const { calcOrder } = useCheckoutContext();

  useEffect(() => {
    calcOrder(cart);
  }, [cart]);

  return (
    <div className="cart">
      {!cart.length ? (
        <div className="cart__empty">Empty</div>
      ) : (
        cart.map((prop) => (
          <div key={prop.id} className="cart__product">
            <div className="cart__product-title">{prop.title}</div>

            <div className="cart__product-price">{prop.price}</div>

            <div className="cart__product-description">{prop.description}</div>

            <div className="cart__product-image">{prop.image}</div>

            <div className="cart__product-category">{prop.category}</div>

            <div className="cart__product-quantity">
              Quantity:&nbsp;
              {prop.quantity}
            </div>

            <div className="cart__product-remove">
              <button
                type="button"
                className="btn"
                onClick={() => removeProduct(prop.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
