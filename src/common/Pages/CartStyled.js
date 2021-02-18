import styled from 'styled-components';

export const CartStyled = styled.div`
  display: flex;
  width: 100%;
  padding-left: 4rem;
`;

export const CartLeftContainerStyled = styled.div`
  width: 75%;
`;

export const CartRightContainerStyled = styled.div`
  width: 25%;
`;

export const CartTitlePageStyled = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 1.6rem;
`;

export const CartCardStyled = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
  padding: 2.4rem;
`;

export const CartCardDetailsStyled = styled.div`
  display: flex;
  width: 42%;
`;

export const CartCardDetailsImageStyled = styled.div`
  width: 10rem;

  & > a {
    display: block;
  }
`;

export const CartCardDetailsTitleStyled = styled.div`
  width: calc(100% - 10rem);
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const CartCardShippingStyled = styled.div`
  width: 13%;
`;

export const CartCardShippingTypeStyled = styled.div`
  margin-bottom: 1rem;
`;

export const CartCardShippingInfoStyled = styled.div`
  margin-left: 0.5rem;
`;

export const CartCardActionStyled = styled.div`
  width: 20%;
`;

export const CartCardQuantityStyled = styled.div`
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  & p {
    display: flex;
    justify-content: space-between;
  }

  & span {
    font-weight: 600;
  }
`;

export const CartCardRaiseLowerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const CartCardRemoveStyled = styled.div`
  margin-top: 1rem;
`;

export const CartCardPriceStyled = styled.div`
  width: 17%;
  text-align: right;
`;
