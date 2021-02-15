import styled from 'styled-components';

export const Cart = styled.div`
  width: 100%;
  padding-left: 4rem;
`;

export const CartLeftContainer = styled.div`
  width: 75%;
`;

export const CartRightContainer = styled.div`
  width: 25%;
`;

export const CartTitlePage = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 1.6rem;
`;

export const CartCard = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
  padding: 2.4rem;
`;

export const CartCardDetails = styled.div`
  display: flex;
  width: 42%;
`;

export const CartCardDetailsImage = styled.div`
  width: 8rem;

  & > a {
    display: block;
  }
`;

export const CartCardDetailsTitle = styled.div`
  width: calc(100% - 8rem);
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const CartCardShipping = styled.div`
  width: 13%;
`;

export const CartCardShippingType = styled.div`
  margin-bottom: 1rem;
`;

export const CartCardShippingInfo = styled.div`
  margin-left: 0.5rem;
`;

export const CartCardAction = styled.div`
  width: 25%;
`;

export const CartCardPrice = styled.div`
  width: 13%;
`;
