import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from '../context';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log('cart: ', cart);

  // const cartQuantity = (items, newItem) => {
  //   if (!items.length) return [{ ...newItem, quantity: 1 }];

  //   let itemsObj = {};

  //   items.forEach((item) => {
  //     if (item.id !== newItem.id) {
  //       itemsObj = { ...newItem, quantity: 1 };
  //       items.push(itemsObj);
  //     }
  //   });

  //   return items;
  // };
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

  const addProduct = (newProduct) =>
    setCart((items) => addToCart(items, newProduct));

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
