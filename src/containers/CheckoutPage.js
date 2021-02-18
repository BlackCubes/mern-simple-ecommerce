import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../Components';

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

const CheckoutPage = ({ FormContainerComponent }) => {
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

      <Modal header="Enter Address">
        <FormContainerComponent onSubmit={onSubmit} formFields={formFields} />
      </Modal>
    </>
  );
};

CheckoutPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default CheckoutPage;
