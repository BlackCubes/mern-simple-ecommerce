import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from '../context';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log('cart: ', cart);

  const cartQuantity = (items, newItem) => {
    if (!items.length) return [{ ...newItem, quantity: 1 }];

    // let quantity = 0;
    let itemsObj = {};

    items.forEach((item) => {
      if (item.id !== newItem.id) {
        // quantity = 1;
        itemsObj = { ...newItem, quantity: 1 };
        items.push(itemsObj);
      } else if (item.id === newItem.id) {
        // quantity += 1;
        itemsObj = { ...item, quantity: item.quantity + 1 };
        Object.assign(item, itemsObj);
      }
    });

    return items;
  };

  const addProduct = (newProduct) =>
    setCart((items) => cartQuantity(items, newProduct));

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
