import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../common';

import {
  CheckoutStyled,
  CheckoutPrimaryStyled,
  CheckoutPageHeaderStyled,
  CheckoutShippingCardStyled,
  CheckoutShippingCardHeaderStyled,
  CheckoutShippingInfoStyled,
  CheckoutShippingInfoSavedStyled,
  CheckoutShippingInfoAddStyled,
  CheckoutShippingOptionsStyled,
  CheckoutShippingOptionsHeaderStyled,
  CheckoutShippingOptionsListItemStyled,
  CheckoutShippingOptionsListPriceStyled,
  CheckoutCardRowStyled,
  CheckoutCardColStyled,
  // CheckoutSecondaryStyled,
} from '../common/Pages/CheckoutStyled';

import {
  HeadingSecondary,
  HeadingQuaternary,
  Paragraph,
  Small,
} from '../common/Typography';

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
  const {
    subTotal,
    salesTax,
    finalTotal,
    shippingAddress,
    billingAddress,
    getShippingAddress,
    getBillingAddress,
  } = useCheckoutContext();
  console.log(subTotal, salesTax, finalTotal);

  const handleModal = (e) => {
    e.preventDefault();
    setModalToggle((bool) => !bool);
  };

  const onSubmit = (newValues) => {
    setValues(newValues);
  };

  console.log(values);
  console.log(getBillingAddress, getShippingAddress);
  console.log(billingAddress);

  return (
    <CheckoutStyled>
      <CheckoutPrimaryStyled>
        <CheckoutPageHeaderStyled>
          <HeadingSecondary>Review & Place Your Order</HeadingSecondary>
        </CheckoutPageHeaderStyled>

        <CheckoutShippingCardStyled>
          <CheckoutCardRowStyled>
            <CheckoutCardColStyled>
              <CheckoutShippingCardHeaderStyled>
                <HeadingQuaternary>Shipping Information</HeadingQuaternary>
              </CheckoutShippingCardHeaderStyled>

              <CheckoutShippingInfoStyled>
                <CheckoutShippingInfoSavedStyled>
                  <Paragraph>
                    {shippingAddress.userName
                      ? shippingAddress.userName
                      : 'No Name'}
                  </Paragraph>
                  <Paragraph>
                    {shippingAddress.address
                      ? shippingAddress.address
                      : 'No Address'}
                  </Paragraph>
                  <Paragraph>
                    {shippingAddress.cityZip
                      ? shippingAddress.cityZip
                      : 'No City'}
                  </Paragraph>
                </CheckoutShippingInfoSavedStyled>

                <CheckoutShippingInfoAddStyled>
                  <Button
                    rest={{ type: 'button', onClick: (e) => handleModal(e) }}
                  >
                    <span>Add a new address</span>
                  </Button>
                </CheckoutShippingInfoAddStyled>
              </CheckoutShippingInfoStyled>
            </CheckoutCardColStyled>

            <CheckoutCardColStyled>
              <CheckoutShippingOptionsStyled>
                <CheckoutShippingOptionsHeaderStyled>
                  <Paragraph tagtype="strong">Get your order by:</Paragraph>
                </CheckoutShippingOptionsHeaderStyled>

                <CheckoutShippingOptionsListItemStyled>
                  <span>Shipping Options</span>

                  <CheckoutShippingOptionsListPriceStyled>
                    <Small>$20.00</Small>
                  </CheckoutShippingOptionsListPriceStyled>
                </CheckoutShippingOptionsListItemStyled>
              </CheckoutShippingOptionsStyled>
            </CheckoutCardColStyled>
          </CheckoutCardRowStyled>
        </CheckoutShippingCardStyled>
      </CheckoutPrimaryStyled>

      <Modal
        header="Enter Address"
        modalToggle={modalToggle}
        handleModal={handleModal}
      >
        <FormContainerComponent onSubmit={onSubmit} formFields={formFields} />
      </Modal>
    </CheckoutStyled>
  );
};

CheckoutPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default CheckoutPage;
