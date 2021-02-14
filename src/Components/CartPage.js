import React from 'react';

import { useCartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart } = useCartContext();

  return (
    <div className="cart">
      {!cart.length ? (
        <div className="cart__empty">Empty</div>
      ) : (
        cart.map((prop) => <pre>{JSON.stringify(prop, null, 2)}</pre>)
      )}
    </div>
  );
};

export default CartPage;
