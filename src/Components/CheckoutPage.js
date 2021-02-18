import React, { useState } from 'react';

import { Form } from '../common';

import { useCheckoutContext } from '../context/CheckoutContext';

const formFields = [
  {
    type: 'text',
    name: 'name',
    id: 'nameInput',
    placeholder: 'Name',
    message: 'Add in a name',
  },
];

const CheckoutPage = () => {
  const [values, setValues] = useState();
  const { subTotal, salesTax, finalTotal } = useCheckoutContext();
  console.log(subTotal, salesTax, finalTotal);

  const onSubmit = (newValues) => {
    setValues(newValues);
  };

  console.log(values);

  return (
    <>
      <div>Hello!</div>

      <Form onSubmit={onSubmit} formFields={formFields} />
    </>
  );
};

export default CheckoutPage;
