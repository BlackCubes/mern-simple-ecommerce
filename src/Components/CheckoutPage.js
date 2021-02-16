import React from 'react';

import { useCheckoutContext } from '../context/CheckoutContext';

const CheckoutPage = () => {
  const { subTotal, salesTax, finalTotal } = useCheckoutContext();

  console.log(subTotal, salesTax, finalTotal);

  return <div>Hello!</div>;
};

export default CheckoutPage;
