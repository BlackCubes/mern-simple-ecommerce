import React from 'react';

import { useCartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart } = useCartContext();

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
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
