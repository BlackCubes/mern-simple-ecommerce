import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from '../context';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (items, newItem) => {
    const existingItem = items.find((item) => item.id === newItem.id);
    if (existingItem)
      return items.map((item) =>
        item.id === newItem.id
          ? { ...newItem, quantity: item.quantity + 1 }
          : item
      );

    return [...items, { ...newItem, quantity: 1 }];
  };

  const decreaseToCart = (items, selectedItem) => {
    const existingItem = items.find((item) => item.id === selectedItem.id);
    if (existingItem)
      return items.map((item) =>
        item.id === existingItem.id
          ? { ...existingItem, quantity: item.quantity - 1 }
          : item
      );
    return items;
  };

  const addProduct = (newProduct) =>
    setCart((items) => addToCart(items, newProduct));

  const decreaseProduct = (product) =>
    setCart((items) => decreaseToCart(items, product));

  const removeProduct = (removeId) =>
    setCart(cart.filter((obj) => obj.id !== removeId));

  const resetCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        decreaseProduct,
        removeProduct,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
