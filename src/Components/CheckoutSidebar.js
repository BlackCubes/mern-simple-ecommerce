import React from 'react';
import { Redirect } from 'react-router-dom';

import {
  Button,
  CheckoutSidebarStyled,
  HeadingSecondary,
  Paragraph,
  SidebarStyled,
  Small,
} from '../common';

import { useCheckoutContext } from '../context/CheckoutContext';

const CheckoutSidebar = () => {
  const { subTotal, salesTax, finalTotal } = useCheckoutContext();

  const handleClick = () => <Redirect to="/checkout" />;

  return (
    <SidebarStyled.Sidebar>
      <SidebarStyled.SidebarContainer>
        <CheckoutSidebarStyled.CheckoutSidebar>
          <CheckoutSidebarStyled.CheckoutSidebarHeader>
            <HeadingSecondary>Checkout Summary</HeadingSecondary>
          </CheckoutSidebarStyled.CheckoutSidebarHeader>

          <CheckoutSidebarStyled.CheckoutSidebarSummary>
            <CheckoutSidebarStyled.CheckoutSidebarSummaryLine>
              <Small>Subtotal Price:</Small>

              <Small>{`$${subTotal}`}</Small>
            </CheckoutSidebarStyled.CheckoutSidebarSummaryLine>

            <CheckoutSidebarStyled.CheckoutSidebarSummaryLine>
              <Small>Sales Tax:</Small>

              <Small>{`${salesTax}%`}</Small>
            </CheckoutSidebarStyled.CheckoutSidebarSummaryLine>

            <CheckoutSidebarStyled.CheckoutSidebarSummaryTotal>
              <Paragraph tagtype="strong">
                Final:
                <span>{`$${finalTotal}`}</span>
              </Paragraph>
            </CheckoutSidebarStyled.CheckoutSidebarSummaryTotal>
          </CheckoutSidebarStyled.CheckoutSidebarSummary>

          <CheckoutSidebarStyled.CheckoutSidebarButton>
            <Button
              rest={{
                type: 'button',
                onClick: handleClick,
                disabled: subTotal === 0,
              }}
            >
              Checkout
            </Button>
          </CheckoutSidebarStyled.CheckoutSidebarButton>
        </CheckoutSidebarStyled.CheckoutSidebar>
      </SidebarStyled.SidebarContainer>
    </SidebarStyled.Sidebar>
  );
};

export default CheckoutSidebar;
