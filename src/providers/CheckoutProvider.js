import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CheckoutContext } from '../context';

const CheckoutProvider = ({ children }) => {
  const [subTotal, setSubTotal] = useState(0);
  const [salesTax, setSalesTax] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

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

  console.log(
    `subTotal: ${subTotal}. salesTax: ${salesTax}. finalTotal: ${finalTotal}`
  );

  return (
    <CheckoutContext.Provider
      value={{ subTotal, salesTax, finalTotal, calcOrder }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CheckoutProvider;
