import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from '../context';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log('cart: ', cart);

  const addProduct = (newProduct) => setCart((items) => [...items, newProduct]);

  const removeProduct = (removeId) =>
    setCart(cart.filter((obj) => obj.id !== removeId));

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
