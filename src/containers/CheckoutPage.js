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
  const [modalToggle, setModalToggle] = useState(false);
  const { subTotal, salesTax, finalTotal } = useCheckoutContext();
  console.log(subTotal, salesTax, finalTotal);

  const handleModal = (e) => {
    e.preventDefault();
    setModalToggle(true);
  };

  const onSubmit = (newValues) => {
    setValues(newValues);
  };

  console.log(values);

  return (
    <>
      <div>Hello!</div>

      <Modal
        header="Enter Address"
        modalToggle={modalToggle}
        handleModal={handleModal}
      >
        <FormContainerComponent onSubmit={onSubmit} formFields={formFields} />
      </Modal>
    </>
  );
};

CheckoutPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default CheckoutPage;
