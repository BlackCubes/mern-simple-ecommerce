import styled from 'styled-components';

export const CheckoutStyled = styled.div`
  width: 100rem;
  margin: 0 auto;
  padding: 1.5rem;

  @media ${(props) => props.theme.responsive.below_1199} {
    width: 100%;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    padding: 1rem;
  }
`;

export const CheckoutPrimaryStyled = styled.div`
  float: left;
  width: 67%;

  @media ${(props) => props.theme.responsive.below_899} {
    width: 57%;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    width: 50%;
  }
`;

export const CheckoutPageHeaderStyled = styled.div`
  padding-left: 1.5rem;

  & h2 {
    line-height: 3.3rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    padding-left: 1rem;
  }
`;

export const CheckoutShippingCardStyled = styled.div`
  /* height: 30rem; */
  margin: 3rem 1.5rem;
  padding: 3.2rem 2.4rem;

  @media ${(props) => props.theme.responsive.below_899} {
    padding: 0;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    margin: 3rem 0.5rem;
  }
`;

export const CheckoutShippingCardHeaderStyled = styled.div`
  margin-bottom: 1rem;

  & h4 {
    font-weight: 600;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    text-align: center;
  }
`;

export const CheckoutShippingInfoStyled = styled.div`
  margin: 1.5rem 0;
`;

export const CheckoutShippingInfoSavedStyled = styled.div`
  margin-bottom: 1rem;

  & p {
    font-size: 1.4rem;

    @media ${(props) => props.theme.responsive.below_479} {
      font-size: 1.2rem;
    }
  }

  @media ${(props) => props.theme.responsive.below_479} {
    text-align: center;
  }
`;

export const CheckoutCreditCardStyled = styled.div`
  transform: translateX(-4rem);
`;

export const CheckoutShippingInfoAddStyled = styled.div`
  margin-bottom: 0.5rem;

  & span {
    font-size: 1.3rem !important;
  }

  & button {
    @media ${(props) => props.theme.responsive.below_599} {
      padding: 0;
    }
  }

  @media ${(props) => props.theme.responsive.below_599} {
    margin-bottom: 1rem;
  }
`;

export const CheckoutShippingOptionsStyled = styled.div`
  margin: 1rem 0 2rem;

  @media ${(props) => props.theme.responsive.below_479} {
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
  }
`;

export const CheckoutShippingOptionsHeaderStyled = styled.div`
  margin-bottom: -0.9rem;
`;

export const CheckoutShippingOptionsListItemStyled = styled.div`
  position: relative;
  margin-top: 2rem;
  padding-right: 0.4rem;

  @media ${(props) => props.theme.responsive.below_899} {
    padding-right: 4rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    padding-right: 0;
  }
`;

export const CheckoutShippingOptionsListPriceStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const CheckoutCardRowStyled = styled.div`
  margin-left: -1.5rem;
  margin-right: -1.5rem;

  @media ${(props) => props.theme.responsive.below_899} {
    display: flex;
    flex-direction: column;
  }
`;

export const CheckoutCardColStyled = styled.div`
  float: left;
  width: 50%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  &.final-checkout-submit-btn button {
    @media ${(props) => props.theme.responsive.below_479} {
      font-size: 1.2rem;
    }
  }

  @media ${(props) => props.theme.responsive.below_899} {
    width: 100%;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
  }
`;

export const CheckoutSecondaryStyled = styled.div`
  float: left;
  width: 33%;
  margin-top: 6.3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media ${(props) => props.theme.responsive.below_899} {
    width: 43%;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    padding-left: 0;
    padding-right: 0;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    width: 50%;
  }
`;

export const CheckoutOrderStyled = styled.div`
  padding: 0.5rem 1.5rem 0;

  @media ${(props) => props.theme.responsive.below_599} {
    padding: 1.5rem 1.5rem 0;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    padding: 5rem 1.5rem 0;
  }
`;

export const CheckoutOrderHeaderStyled = styled.div`
  padding-top: 1rem;
  margin-bottom: 1rem;

  @media ${(props) => props.theme.responsive.below_899} {
    text-align: center;
  }
`;

export const CheckoutOrderSummaryStyled = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const CheckoutOrderSummaryListStyled = styled.div`
  padding: 0;
`;

export const CheckoutOrderSummaryShippingStyled = styled.div`
  float: left;
  margin: 1rem 0;

  & p:not(:first-child) {
    @media ${(props) => props.theme.responsive.below_599} {
      font-size: 1.3rem;
    }

    @media ${(props) => props.theme.responsive.below_479} {
      font-size: 1.2rem;
    }
  }

  @media ${(props) => props.theme.responsive.below_899} {
    float: none;
    text-align: center;
  }
`;

export const CheckoutOrderSummaryItemListStyled = styled.div`
  display: table;
  width: 100%;

  @media ${(props) => props.theme.responsive.below_899} {
    display: flex;
    flex-direction: column;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    margin-top: 1rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    margin-top: 1.5rem;
  }
`;

export const CheckoutOrderSummaryItemListAvailableStyled = styled.div`
  display: table-caption;
  padding-bottom: 0.5rem;

  @media ${(props) => props.theme.responsive.below_899} {
    text-align: center;
  }
`;

export const CheckoutOrderSummaryItemListCellStyled = styled.div`
  display: table-cell;
  vertical-align: top;

  &:last-child {
    text-align: right;

    @media ${(props) => props.theme.responsive.below_899} {
      text-align: center;
    }
  }

  @media ${(props) => props.theme.responsive.below_899} {
    text-align: center;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    margin-top: 0.5rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    margin-top: 0.7rem;
  }
`;

export const CheckoutOrderSummaryItemListImgStyled = styled.div`
  width: 5rem;
  height: 5rem;
  padding-right: 0.8rem;

  @media ${(props) => props.theme.responsive.below_899} {
    height: 5.8rem;
    margin-left: auto;
    margin-right: auto;
    padding-right: 0;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    width: 4rem;
    height: 4.8rem;
  }
`;

export const CheckoutOrderSummaryItemListCellBigStyled = styled(
  CheckoutOrderSummaryItemListCellStyled
)`
  width: 100%;
  max-width: 13.1rem;
  max-height: 3.9rem;
  padding-right: 0.8rem;
  text-align: left;

  & small {
    max-width: 13.1rem;
    display: block;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 3.9rem;
    line-height: 1.3rem;
    font-size: inherit;
    font-weight: 400;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    margin-left: auto;
    margin-right: auto;
    padding-right: 0;
    text-align: center;
  }
`;

export const CheckoutHRStyled = styled.hr`
  margin: 2rem 0;
  border: 0;
  border-top: 0.1rem solid #c5cbd5;

  @media ${(props) => props.theme.responsive.below_899} {
    margin: 1rem 0;
  }
`;

export const CheckoutOrderSummarySubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;

  & small {
    @media ${(props) => props.theme.responsive.below_899} {
      font-size: 1.1rem;
    }

    @media ${(props) => props.theme.responsive.below_599} {
      font-size: 1rem;
    }
  }
`;

export const CheckoutOrderSummaryTotalStyled = styled.div`
  & p {
    display: flex;
    justify-content: space-between;
  }
`;
