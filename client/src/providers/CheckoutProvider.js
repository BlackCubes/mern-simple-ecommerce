import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CheckoutContext } from '../context';

const CheckoutProvider = ({ children }) => {
  const [subTotal, setSubTotal] = useState(0);
  const [salesTax, setSalesTax] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const history = useHistory();

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

    setSubTotal(subTotalAmount.toFixed(2));
    setSalesTax((subTotalAmount * 0.0725).toFixed(2));
    setFinalTotal((subTotalAmount * 1.0725).toFixed(2));
  };

  const getShippingAddress = (address) => setShippingAddress(address);
  const getBillingAddress = (billAddress) => setBillingAddress(billAddress);

  const checkoutSubmit = (e) => {
    e.preventDefault();
    history.push('/products');
  };

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
        checkoutSubmit,
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
