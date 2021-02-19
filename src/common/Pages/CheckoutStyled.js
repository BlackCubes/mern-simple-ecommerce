import styled from 'styled-components';

export const CheckoutStyled = styled.div`
  width: 100rem;
  margin: 0 auto;
  padding: 1.5rem;
`;

export const CheckoutPrimaryStyled = styled.div`
  float: left;
  width: 67%;
`;

export const CheckoutPageHeaderStyled = styled.div`
  padding-left: 1.5rem;

  & h2 {
    line-height: 3.3rem;
  }
`;

export const CheckoutShippingCardStyled = styled.div`
  margin: 3rem 1.5rem;
  padding: 3.2rem 2.4rem;
`;

export const CheckoutShippingCardHeaderStyled = styled.div`
  margin-bottom: 1rem;

  & h4 {
    font-weight: 600;
  }
`;

export const CheckoutShippingInfoStyled = styled.div`
  margin: 1.5rem 0;
`;

export const CheckoutShippingInfoSavedStyled = styled.div`
  margin-bottom: 1rem;

  & p {
    font-size: 1.4rem;
  }
`;

export const CheckoutShippingInfoAddStyled = styled.div`
  margin-top: 0.5rem;

  & span {
    font-size: 1.3rem !important;
  }
`;

export const CheckoutShippingOptionsStyled = styled.div`
  margin: 1rem 0 2rem;
`;

export const CheckoutShippingOptionsHeaderStyled = styled.div`
  margin-bottom: -0.9rem;
`;

export const CheckoutShippingOptionsListItemStyled = styled.div`
  position: relative;
  margin-top: 2rem;
  padding-right: 0.4rem;
`;

export const CheckoutShippingOptionsListPriceStyled = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
`;

export const CheckoutCardRowStyled = styled.div`
  margin-left: -1.5rem;
  margin-right: -1.5rem;
`;

export const CheckoutCardColStyled = styled.div`
  float: left;
  width: 50%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const CheckoutSecondaryStyled = styled.div`
  float: left;
  width: 33%;
  margin-top: 6.3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const CheckoutOrderStyled = styled.div`
  padding: 0.5rem 1.5rem 0;
`;

export const CheckoutOrderHeaderStyled = styled.div`
  padding-top: 1rem;
  margin-bottom: 1rem;
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
`;

export const CheckoutOrderSummaryItemListStyled = styled.div`
  display: table;
  width: 100%;
`;

export const CheckoutOrderSummaryItemListAvailableStyled = styled.div`
  padding-bottom: 0.5rem;
`;

export const CheckoutOrderSummaryItemListCellStyled = styled.div`
  display: table-cell;
  vertical-align: top;

  &:last-child {
    text-align: right;
  }
`;

export const CheckoutOrderSummaryItemListImgStyled = styled.div`
  width: 5rem;
  height: 5rem;
  padding-right: 0.8rem;
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
    max-width: 131px;
    display: block;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 3.9em;
    line-height: 1.3em;
    font-size: inherit;
    font-weight: 400;
  }
`;
