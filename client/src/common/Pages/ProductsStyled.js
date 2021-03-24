import styled from 'styled-components';

export const ProductsStyled = styled.div`
  width: 75%;
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${(props) => props.theme.responsive.below_899} {
    width: 100%;
  }
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

  @media ${(props) => props.theme.responsive.below_899} {
    padding-right: 1.5rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    width: 100%;
    padding-right: 0;
  }

  & a {
    display: block;
  }
`;

export const ProductsCardRightColumnStyled = styled.div`
  display: inline-block;
  width: 84%;
  vertical-align: top;

  @media ${(props) => props.theme.responsive.below_479} {
    width: 100%;
  }
`;

export const ProductsCardInfoStyled = styled.div`
  display: inline-block;
  width: 60%;
  padding-left: 2rem;
  padding-right: 2rem;
  vertical-align: top;

  @media ${(props) => props.theme.responsive.below_899} {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    width: 100%;
  }
`;

export const ProductsCardInfoTitleStyled = styled.div`
  margin-bottom: 1rem;

  @media ${(props) => props.theme.responsive.below_479} {
    text-align: center;
  }
`;

export const ProductsCardInfoShippingStyled = styled.div`
  margin-top: 1rem;
`;

export const ProductsCardInfoShippingBuyStyled = styled.div`
  margin-bottom: 1rem;

  @media ${(props) => props.theme.responsive.below_479} {
    text-align: center;
  }
`;

export const ProductsCardInfoShippingOptionStyled = styled.div`
  margin-top: 1rem;

  @media ${(props) => props.theme.responsive.below_479} {
    text-align: center;
  }
`;

export const ProductsCardPriceCartStyled = styled.div`
  display: inline-block;
  width: 40%;
  padding-left: 2rem;

  @media ${(props) => props.theme.responsive.below_599} {
    padding-left: 0.8rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    display: block;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
  }
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

    @media ${(props) => props.theme.responsive.below_899} {
      width: 1.9rem;
      height: 1.9rem;
    }

    @media ${(props) => props.theme.responsive.below_599} {
      width: 1.85rem;
      height: 1.85rem;
    }
  }
`;
