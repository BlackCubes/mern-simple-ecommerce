import styled from 'styled-components';

export const CartStyled = styled.div`
  display: flex;
  width: 100%;
  padding-left: 4rem;

  @media ${(props) => props.theme.responsive.below_899} {
    padding-left: 2rem;
  }
`;

export const CartLeftContainerStyled = styled.div`
  width: 75%;

  @media ${(props) => props.theme.responsive.below_1199} {
    width: 65%;
  }

  @media ${(props) => props.theme.responsive.belo_899} {
    width: 55%;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    width: 52%;
  }
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

  @media ${(props) => props.theme.responsive.belo_899} {
    flex-direction: column;
  }
`;

export const CartCardDetailsStyled = styled.div`
  display: flex;
  width: 42%;

  @media ${(props) => props.theme.responsive.below_1199} {
    width: 37%;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    width: 100%;
  }
`;

export const CartCardDetailsImageStyled = styled.div`
  width: 10rem;

  & > a {
    display: block;
  }

  @media ${(props) => props.theme.responsive.below_1199} {
    width: 3rem;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    width: 7rem;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    width: 5rem;
  }
`;

export const CartCardDetailsTitleStyled = styled.div`
  width: calc(100% - 10rem);
  padding-left: 3rem;
  padding-right: 3rem;

  @media ${(props) => props.theme.responsive.below_1199} {
    width: calc(100% - 3rem);
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    width: calc(100% - 7rem);
  }

  @media ${(props) => props.theme.responsive.below_599} {
    width: calc(100% - 5rem);
  }
`;

export const CartCardShippingStyled = styled.div`
  width: 13%;

  @media ${(props) => props.theme.responsive.below_1199} {
    width: 20%;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const CartCardShippingTypeStyled = styled.div`
  margin-bottom: 1rem;

  @media ${(props) => props.theme.responsive.below_899} {
    margin-bottom: 0;
  }
`;

export const CartCardShippingInfoStyled = styled.div`
  margin-left: 0.5rem;

  @media ${(props) => props.theme.responsive.below_899} {
    margin-left: 0;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    text-align: right;
  }
`;

export const CartCardActionStyled = styled.div`
  width: 20%;

  @media ${(props) => props.theme.responsive.below_1199} {
    width: 30%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    width: 100%;
    margin-top: 1.5rem;
  }
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

  @media ${(props) => props.theme.responsive.below_599} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const CartCardRaiseLowerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  & button {
    @media ${(props) => props.theme.responsive.below_899} {
      width: 30%;
      padding: 1.3rem;
    }
  }
`;

export const CartCardRemoveStyled = styled.div`
  margin-top: 1rem;

  & button {
    padding: 1.3rem;
  }
`;

export const CartCardPriceStyled = styled.div`
  width: 17%;
  text-align: right;

  @media ${(props) => props.theme.responsive.below_1199} {
    width: 14%;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    width: 100%;
    margin-top: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
