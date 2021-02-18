import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../common';

import {
  CheckoutSidebarStyled,
  CheckoutSidebarHeaderStyled,
  CheckoutSidebarSummaryStyled,
  CheckoutSidebarSummaryLineStyled,
  CheckoutSidebarSummaryTotalStyled,
  CheckoutSidebarButtonStyled,
  SidebarStyled,
  SidebarContainerStyled,
} from '../common/Sidebar';

import { HeadingSecondary, Paragraph, Small } from '../common/Typography';

import { useCheckoutContext } from '../context/CheckoutContext';

const CheckoutSidebar = () => {
  const { subTotal, salesTax, finalTotal } = useCheckoutContext();
  const history = useHistory();

  const handleClick = () => history.push('/checkout');

  return (
    <SidebarStyled>
      <SidebarContainerStyled>
        <CheckoutSidebarStyled>
          <CheckoutSidebarHeaderStyled>
            <HeadingSecondary>Checkout Summary</HeadingSecondary>
          </CheckoutSidebarHeaderStyled>

          <CheckoutSidebarSummaryStyled>
            <CheckoutSidebarSummaryLineStyled>
              <Small>Subtotal Price:</Small>

              <Small>{`$${subTotal}`}</Small>
            </CheckoutSidebarSummaryLineStyled>

            <CheckoutSidebarSummaryLineStyled>
              <Small>Sales Tax:</Small>

              <Small>{`${salesTax}%`}</Small>
            </CheckoutSidebarSummaryLineStyled>

            <CheckoutSidebarSummaryTotalStyled>
              <Paragraph tagtype="strong">
                Final:
                <span>{`$${finalTotal}`}</span>
              </Paragraph>
            </CheckoutSidebarSummaryTotalStyled>
          </CheckoutSidebarSummaryStyled>

          <CheckoutSidebarButtonStyled>
            <Button
              rest={{
                type: 'button',
                onClick: handleClick,
                disabled: subTotal === 0,
              }}
            >
              Checkout
            </Button>
          </CheckoutSidebarButtonStyled>
        </CheckoutSidebarStyled>
      </SidebarContainerStyled>
    </SidebarStyled>
  );
};

export default CheckoutSidebar;
