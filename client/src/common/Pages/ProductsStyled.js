import styled from 'styled-components';

export const ProductsStyled = styled.div`
  width: 75%;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.responsive.below_899} {
    display: block;
    justify-content: normal;
  }
`;

export const ProductsCardStyled = styled.div`
  min-height: 23.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const ProductsCardImageStyled = styled.div`
  display: inline-block;
  width: 16%;
  padding-right: 2rem;
  vertical-align: top;

  & a {
    display: block;
  }
`;

export const ProductsCardRightColumnStyled = styled.div`
  display: inline-block;
  width: 84%;
  vertical-align: top;
`;

export const ProductsCardInfoStyled = styled.div`
  display: inline-block;
  width: 60%;
  padding-left: 2rem;
  padding-right: 2rem;
  vertical-align: top;
`;

export const ProductsCardInfoTitleStyled = styled.div`
  margin-bottom: 1rem;
`;

export const ProductsCardInfoShippingStyled = styled.div`
  margin-top: 1rem;
`;

export const ProductsCardInfoShippingBuyStyled = styled.div`
  margin-bottom: 1rem;
`;

export const ProductsCardInfoShippingOptionStyled = styled.div`
  margin-top: 1rem;
`;

export const ProductsCardPriceCartStyled = styled.div`
  display: inline-block;
  width: 40%;
  padding-left: 2rem;
`;

export const ProductsCardPriceStyled = styled.div`
  & h4 {
    font-weight: 600;
  }
`;

export const ProductsCardCartBtnStyled = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const ProductsCardRatingStyled = styled.div`
  margin-bottom: 1rem;

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;
