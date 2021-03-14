import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-credit-cards';

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
  CheckoutHRStyled,
  CheckoutOrderSummarySubtotalStyled,
  CheckoutOrderSummaryTotalStyled,
} from '../common/Pages/CheckoutStyled';

import {
  HeadingSecondary,
  HeadingQuaternary,
  Paragraph,
  Small,
} from '../common/Typography';

import { CreditCard, Modal } from '../Components';

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

const creditCardFormFields = [
  {
    type: 'tel',
    name: 'number',
    id: 'number',
    placeholder: 'Card Number',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'text',
    name: 'fullname',
    id: 'fullname',
    placeholder: 'Name',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'tel',
    name: 'expiry',
    id: 'expiry',
    placeholder: 'Valid Thru',
    message: "Let's go!",
    addlstyle: {
      width: '50%',
      flex: '1 22rem',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'tel',
    name: 'cvc',
    id: 'cvc',
    placeholder: 'Security Code',
    message: "Let's go!",
    addlstyle: {
      width: '50%',
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
  const [creditCardModalToggle, setCreditCardModalToggle] = useState(false);
  const [creditCard, setCreditCard] = useState({});

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

  const onFormModal = (setToggle) => (e) => {
    e.preventDefault();
    setToggle((bool) => !bool);
  };

  const onSubmission = (getFunction, setToggle) => (newValues) => {
    getFunction(newValues);
    setToggle(false);
  };

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
                  {Object.keys(shippingAddress).length !== 6 ? (
                    <Paragraph>No Shipping Address</Paragraph>
                  ) : (
                    <>
                      <Paragraph>{`${shippingAddress.firstname} ${shippingAddress.lastname}`}</Paragraph>

                      <Paragraph texttransformtype="uppercase">
                        {shippingAddress.address}
                      </Paragraph>

                      <Paragraph texttransformtype="uppercase">{`${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zipcode}`}</Paragraph>
                    </>
                  )}
                </CheckoutShippingInfoSavedStyled>

                <CheckoutShippingInfoAddStyled>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: (e) => onFormModal(setAddressModalToggle)(e),
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
                    <Small>
                      {dateTimeFormat(
                        'en-US',
                        { weekday: 'short' },
                        daysFromNow(3)
                      )}
                    </Small>

                    <Small colorType="lime_green">
                      {subTotal >= 50 ? 'FREE Shipping' : '3-DAY Shipping'}
                    </Small>
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
                  {Object.keys(billingAddress).length !== 6 ? (
                    <Paragraph>No Billing Address</Paragraph>
                  ) : (
                    <>
                      <Paragraph>{`${billingAddress.firstname} ${billingAddress.lastname}`}</Paragraph>

                      <Paragraph texttransformtype="uppercase">
                        {billingAddress.address}
                      </Paragraph>

                      <Paragraph texttransformtype="uppercase">{`${billingAddress.city}, ${billingAddress.state} ${billingAddress.zipcode}`}</Paragraph>
                    </>
                  )}
                </CheckoutShippingInfoSavedStyled>

                <CheckoutShippingInfoAddStyled>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: (e) =>
                        onFormModal(setBillingAddressModalToggle)(e),
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
              <CheckoutShippingInfoStyled>
                <CheckoutShippingInfoSavedStyled>
                  {Object.keys(creditCard).length !== 4 ? (
                    <Paragraph>No Credit Card</Paragraph>
                  ) : (
                    <CreditCard transformscaletype="0.6">
                      <Card
                        number={creditCard.number}
                        name={creditCard.fullname}
                        expiry={creditCard.expiry}
                        cvc={creditCard.cvc}
                      />
                    </CreditCard>
                  )}
                </CheckoutShippingInfoSavedStyled>

                <CheckoutShippingInfoAddStyled>
                  <Button
                    rest={{
                      type: 'button',
                      onClick: (e) => onFormModal(setCreditCardModalToggle)(e),
                      colortype: 'transparent',
                      hovercolortype: 'moderate_blue_dark',
                      sizetype: 'small',
                      nonbtn: true,
                    }}
                  >
                    <span>Add a new credit card</span>
                  </Button>
                </CheckoutShippingInfoAddStyled>
              </CheckoutShippingInfoStyled>
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

                {Object.keys(shippingAddress).length !== 6 ? (
                  <Paragraph sizetype="xsmall">No Shipping Address</Paragraph>
                ) : (
                  <>
                    <Paragraph sizetype="xsmall">
                      {shippingAddress.address}
                    </Paragraph>

                    <Paragraph sizetype="xsmall">
                      {`${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zipcode}`}
                    </Paragraph>
                  </>
                )}
              </CheckoutOrderSummaryShippingStyled>

              {cart.length > 0 &&
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

              {cart.length > 0 && (
                <>
                  <CheckoutHRStyled />

                  <CheckoutOrderSummarySubtotalStyled>
                    <Small>Item Subtotal</Small>

                    <Small>{`$${subTotal}`}</Small>
                  </CheckoutOrderSummarySubtotalStyled>

                  <CheckoutOrderSummarySubtotalStyled>
                    <Small>Shipping</Small>

                    <Small colorType="lime_green">
                      {subTotal >= 50 ? 'FREE' : '3-DAYS'}
                    </Small>
                  </CheckoutOrderSummarySubtotalStyled>

                  <CheckoutOrderSummarySubtotalStyled>
                    <Small>Estimated Sales Tax</Small>

                    <Small>{`${salesTax}%`}</Small>
                  </CheckoutOrderSummarySubtotalStyled>

                  <CheckoutHRStyled />

                  <CheckoutOrderSummaryTotalStyled>
                    <Paragraph tagtype="strong">
                      <span>Total</span>

                      <span>{`$${finalTotal}`}</span>
                    </Paragraph>
                  </CheckoutOrderSummaryTotalStyled>
                </>
              )}
            </CheckoutOrderSummaryListStyled>
          </CheckoutOrderSummaryStyled>
        </CheckoutOrderStyled>
      </CheckoutSecondaryStyled>

      <Modal
        header="Enter Address"
        modalToggle={addressModalToggle}
        handleModal={onFormModal(setAddressModalToggle)}
      >
        <FormContainerComponent
          onSubmit={onSubmission(getShippingAddress, setAddressModalToggle)}
          formFields={addressFormFields}
        />
      </Modal>

      <Modal
        header="Enter Billing Address"
        modalToggle={billingAddressModalToggle}
        handleModal={onFormModal(setBillingAddressModalToggle)}
      >
        <FormContainerComponent
          onSubmit={onSubmission(
            getBillingAddress,
            setBillingAddressModalToggle
          )}
          formFields={addressFormFields}
        />
      </Modal>

      <Modal
        header="Enter Credit Card"
        modalToggle={creditCardModalToggle}
        handleModal={onFormModal(setCreditCardModalToggle)}
      >
        <FormContainerComponent
          onSubmit={onSubmission(setCreditCard, setCreditCardModalToggle)}
          formFields={creditCardFormFields}
          hasCreditCard
        />
      </Modal>
    </CheckoutStyled>
  );
};

CheckoutPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default CheckoutPage;
