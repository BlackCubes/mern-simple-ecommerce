import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Image } from '../common';

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
  CheckoutSecondaryStyled,
  CheckoutOrderStyled,
  CheckoutOrderHeaderStyled,
  CheckoutOrderSummaryStyled,
  CheckoutOrderSummaryListStyled,
  CheckoutOrderSummaryShippingStyled,
  CheckoutOrderSummaryItemListStyled,
  CheckoutOrderSummaryItemListAvailableStyled,
  CheckoutOrderSummaryItemListCellStyled,
  CheckoutOrderSummaryItemListImgStyled,
  CheckoutOrderSummaryItemListCellBigStyled,
} from '../common/Pages/CheckoutStyled';

import {
  HeadingSecondary,
  HeadingQuaternary,
  Paragraph,
  Small,
} from '../common/Typography';

import { Modal } from '../Components';

import { useCartContext } from '../context/CartContext';
import { useCheckoutContext } from '../context/CheckoutContext';

import { daysFromNow, dateTimeFormat } from '../utils';

const addressFormFields = [
  {
    type: 'text',
    name: 'firstname',
    id: 'firstname',
    placeholder: 'First Name',
    message: "Let's go!",
    addlstyle: {
      width: '50%',
      flex: '1 22rem',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'text',
    name: 'lastname',
    id: 'lastname',
    placeholder: 'Last Name',
    message: "Let's go!",
    addlstyle: {
      width: '50%',
      flex: '1 22rem',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'text',
    name: 'address',
    id: 'address',
    placeholder: 'Address',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'text',
    name: 'city',
    id: 'city',
    placeholder: 'City',
    message: "Let's go!",
    addlstyle: {
      width: 'calc(100% / 1.85)',
      flex: '1 22rem',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'text',
    name: 'state',
    id: 'state',
    placeholder: 'State',
    message: "Let's go!",
    addlstyle: {
      width: 'calc(100% / 5)',
      flex: '1 22rem',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'tel',
    name: 'zipcode',
    id: 'zipcode',
    placeholder: 'ZIP Code',
    message: "Let's go!",
    addlstyle: {
      width: 'calc(100% / 4)',
      flex: '1 22rem',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
];

const CheckoutPage = ({ FormContainerComponent }) => {
  const [addressModalToggle, setAddressModalToggle] = useState(false);
  const [billingAddressModalToggle, setBillingAddressModalToggle] = useState(
    false
  );
  const { cart, removeProduct } = useCartContext();
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

  const addressFormModal = (e) => {
    e.preventDefault();
    setAddressModalToggle((bool) => !bool);
  };

  const onAddressSubmit = (newValues) => {
    getShippingAddress(newValues);
    setAddressModalToggle(false);
  };

  const billingAddressFormModal = (e) => {
    e.preventDefault();
    setBillingAddressModalToggle((bool) => !bool);
  };

  const onBillingAddressSubmit = (newValues) => {
    getBillingAddress(newValues);
    setBillingAddressModalToggle(false);
  };

  console.log(cart);

  return (
    <CheckoutStyled className="clearfix">
      <CheckoutPrimaryStyled>
        <CheckoutPageHeaderStyled>
          <HeadingSecondary>Review & Place Your Order</HeadingSecondary>
        </CheckoutPageHeaderStyled>

        <CheckoutShippingCardStyled className="clearfix">
          <CheckoutShippingCardHeaderStyled>
            <HeadingQuaternary>Shipping Information</HeadingQuaternary>
          </CheckoutShippingCardHeaderStyled>

          <CheckoutCardRowStyled>
            <CheckoutCardColStyled>
              <CheckoutShippingInfoStyled>
                <CheckoutShippingInfoSavedStyled>
                  <Paragraph>
                    {shippingAddress.firstname && shippingAddress.lastname
                      ? `${shippingAddress.firstname} ${shippingAddress.lastname}`
                      : 'No Name'}
                  </Paragraph>
                  <Paragraph texttransformtype="uppercase">
                    {shippingAddress.address || 'No Address'}
                  </Paragraph>
                  <Paragraph texttransformtype="uppercase">
                    {shippingAddress.city &&
                    shippingAddress.state &&
                    shippingAddress.zipcode
                      ? `${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zipcode}`
                      : 'No City, State, or ZIP Code'}
                  </Paragraph>
                </CheckoutShippingInfoSavedStyled>

                <CheckoutShippingInfoAddStyled>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: (e) => addressFormModal(e),
                      colortype: 'transparent',
                      hovercolortype: 'moderate_blue_dark',
                      sizetype: 'small',
                      nonbtn: true,
                    }}
                  >
                    <span>Add a new shipping address</span>
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

        <CheckoutShippingCardStyled className="clearfix">
          <CheckoutShippingCardHeaderStyled>
            <HeadingQuaternary>Billing Information</HeadingQuaternary>
          </CheckoutShippingCardHeaderStyled>

          <CheckoutCardRowStyled>
            <CheckoutCardColStyled>
              <CheckoutShippingInfoStyled>
                <CheckoutShippingInfoSavedStyled>
                  <Paragraph>
                    {billingAddress.firstname && billingAddress.lastname
                      ? `${billingAddress.firstname} ${billingAddress.lastname}`
                      : 'No Name'}
                  </Paragraph>
                  <Paragraph texttransformtype="uppercase">
                    {billingAddress.address || 'No Address'}
                  </Paragraph>
                  <Paragraph texttransformtype="uppercase">
                    {billingAddress.city &&
                    billingAddress.state &&
                    billingAddress.zipcode
                      ? `${billingAddress.city}, ${billingAddress.state} ${billingAddress.zipcode}`
                      : 'No City, State, or ZIP Code'}
                  </Paragraph>
                </CheckoutShippingInfoSavedStyled>

                <CheckoutShippingInfoAddStyled>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: (e) => billingAddressFormModal(e),
                      colortype: 'transparent',
                      hovercolortype: 'moderate_blue_dark',
                      sizetype: 'small',
                      nonbtn: true,
                    }}
                  >
                    <span>Add a new billing address</span>
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

      <CheckoutSecondaryStyled>
        <CheckoutOrderStyled>
          <CheckoutOrderHeaderStyled>
            <HeadingQuaternary>Order Summary</HeadingQuaternary>
          </CheckoutOrderHeaderStyled>

          <CheckoutOrderSummaryStyled>
            <CheckoutOrderSummaryListStyled>
              <CheckoutOrderSummaryShippingStyled>
                <Paragraph tagtype="small" sizetype="small">
                  Shipping
                </Paragraph>

                <Paragraph sizetype="small">
                  {shippingAddress.address &&
                  shippingAddress.city &&
                  shippingAddress.state &&
                  shippingAddress.zipcode
                    ? 'Shipping'
                    : 'No Shipping Address'}
                </Paragraph>
              </CheckoutOrderSummaryShippingStyled>

              {cart.length &&
                cart.map((prop) => (
                  <CheckoutOrderSummaryItemListStyled key={prop.id}>
                    <CheckoutOrderSummaryItemListAvailableStyled>
                      <Small sizetype="xsmall">
                        Get it by&nbsp;
                        {dateTimeFormat(
                          'en-US',
                          { weekday: 'short' },
                          daysFromNow(3)
                        )}
                      </Small>
                    </CheckoutOrderSummaryItemListAvailableStyled>

                    <CheckoutOrderSummaryItemListCellStyled>
                      <CheckoutOrderSummaryItemListImgStyled>
                        <Image
                          rest={{
                            src: prop.image,
                            alt: prop.title,
                          }}
                        />
                      </CheckoutOrderSummaryItemListImgStyled>
                    </CheckoutOrderSummaryItemListCellStyled>

                    <CheckoutOrderSummaryItemListCellBigStyled>
                      <Small>{prop.title}</Small>
                    </CheckoutOrderSummaryItemListCellBigStyled>

                    <CheckoutOrderSummaryItemListCellStyled>
                      <Paragraph sizetype="small">{`$${prop.price}`}</Paragraph>

                      <Paragraph sizetype="small">
                        Qty&nbsp;
                        {prop.quantity}
                      </Paragraph>

                      <Button
                        rest={{
                          type: 'button',
                          onClick: () => removeProduct(prop.id),
                          colortype: 'transparent',
                          hovercolortype: 'moderate_blue_dark',
                          sizetype: 'small',
                          nonbtn: true,
                        }}
                      >
                        Remove
                      </Button>
                    </CheckoutOrderSummaryItemListCellStyled>
                  </CheckoutOrderSummaryItemListStyled>
                ))}
            </CheckoutOrderSummaryListStyled>
          </CheckoutOrderSummaryStyled>
        </CheckoutOrderStyled>
      </CheckoutSecondaryStyled>

      <Modal
        header="Enter Address"
        modalToggle={addressModalToggle}
        handleModal={addressFormModal}
      >
        <FormContainerComponent
          onSubmit={onAddressSubmit}
          formFields={addressFormFields}
        />
      </Modal>

      <Modal
        header="Enter Billing Address"
        modalToggle={billingAddressModalToggle}
        handleModal={billingAddressFormModal}
      >
        <FormContainerComponent
          onSubmit={onBillingAddressSubmit}
          formFields={addressFormFields}
        />
      </Modal>
    </CheckoutStyled>
  );
};

CheckoutPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default CheckoutPage;
