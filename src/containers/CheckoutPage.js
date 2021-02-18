import React, { useState } from 'react';

import { FormContainer } from '.';

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

      <FormContainer onSubmit={onSubmit} formFields={formFields} />
    </>
  );
};

export default CheckoutPage;
