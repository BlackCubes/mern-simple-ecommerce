import { createContext, useContext } from 'react';

const CheckoutContext = createContext([]);

export const useCheckoutContext = () => useContext(CheckoutContext);

export default CheckoutContext;
