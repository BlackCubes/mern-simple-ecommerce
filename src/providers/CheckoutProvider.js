import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CheckoutContext } from '../context';

const CheckoutProvider = ({ children }) => {
  const [subTotal, setSubTotal] = useState(0);
  const [salesTax, setSalesTax] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);

  const calcOrder = (items) => {
    if (!items.length) {
      setSubTotal(0);
      setSalesTax(0);
      setFinalTotal(0);
      return;
    }

    let subTotalAmount = 0;

    items.forEach((item) => {
      subTotalAmount += item.price * item.quantity;
    });

    setSubTotal(subTotalAmount);
    setSalesTax(subTotalAmount * 0.0725);
    setFinalTotal(subTotalAmount * 1.0725);
  };

  const getShippingAddress = (address) => setShippingAddress(address);
  const getBillingAddress = (billingAddress) =>
    setBillingAddress(billingAddress);

  return (
    <CheckoutContext.Provider
      value={{
        subTotal,
        salesTax,
        finalTotal,
        shippingAddress,
        billingAddress,
        calcOrder,
        getShippingAddress,
        getBillingAddress,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CheckoutProvider;
