import { createContext, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export default CartContext;
