import styled from 'styled-components';

export const ProductDetailsContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const ProductDetailsStyled = styled.div`
  width: 75%;

  @media ${(props) => props.theme.responsive.below_899} {
    width: 100%;
  }
`;

export const ProductDetailsHeaderStyled = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const ProductDetailsHeaderTitleStyled = styled.div`
  margin-bottom: 1rem;
`;

export const ProductDetailsHeaderDataStyled = styled.div`
  padding-top: 1rem;

  & small:nth-child(2) {
    text-transform: capitalize;
  }
`;

export const ProductDetailsBottomContainerStyled = styled.div`
  display: flex;
  margin-bottom: 6.5rem;
`;

export const ProductDetailsInfoStyled = styled.div`
  width: 65%;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ProductDetailsInfoImageStyled = styled.div`
  width: 40rem;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.responsive.below_1199} {
    width: 100%;
  }
`;

export const ProductDetailsPriceShippingCartStyled = styled.div`
  width: 35%;
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${(props) => props.theme.responsive.below_899} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ProductDetailsPriceShippingCartRowStyled = styled.div`
  margin-top: 2.4rem;
  padding-top: 2.4rem;
`;

export const ProductDetailsPriceStyled = styled.div`
  & h2 {
    font-weight: 600;
  }
`;

export const ProductDetailsShippingBuyStyled = styled.div`
  margin-bottom: 1rem;
`;

export const ProductDetailsShippingOptionStyled = styled.div`
  margin-top: 1rem;
`;

export const ProductDetailsDescriptionStyled = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${(props) => props.theme.responsive.below_899} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const ProductDetailsDescriptionHeaderStyled = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  text-align: left;

  & h4 {
    font-weight: 400;
  }
`;

export const ProductDetailsDescriptionBodyStyled = styled.div`
  width: 75%;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.responsive.below_899} {
    width: 90%;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    width: 95%;
  }
`;

export const ProductDetailsReviewsStyled = styled.div`
  margin-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${(props) => props.theme.responsive.below_899} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const ProductDetailsReviewsHeaderStyled = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  text-align: left;

  & h4 {
    font-weight: 400;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    padding-bottom: 1rem;
  }
`;

export const ProductDetailsReviewsBodyStyled = styled.div`
  width: 75%;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.responsive.below_899} {
    width: 90%;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    width: 95%;
  }
`;

export const ProductDetailsReviewsAddStyled = styled.div`
  margin-bottom: 2rem;
  text-align: right;
`;

export const ProductDetailsReviewContentStyled = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const ProductDetailsReviewListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media ${(props) => props.theme.responsive.below_599} {
    flex-direction: column;
    justify-content: normal;
  }
`;

export const ProductDetailsReviewLeftColStyled = styled.div`
  float: left;

  @media ${(props) => props.theme.responsive.below_599} {
    float: none;
  }
`;

export const ProductDetailsReviewRightColStyled = styled.div`
  float: right;

  & .product-details__review-delete-btn {
    @media ${(props) => props.theme.responsive.below_899} {
      padding: 0;
    }
  }

  @media ${(props) => props.theme.responsive.below_599} {
    float: none;
    margin-top: 1.5rem;
  }
`;

export const ProductDetailsReviewRatingStyled = styled.div`
  margin-bottom: 1.5rem;

  & svg {
    @media ${(props) => props.theme.responsive.below_899} {
      width: 1.9rem;
      height: 1.9rem;
    }
  }
`;

export const ProductDetailsReviewUserStyled = styled.div`
  & span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.lime_green};
    opacity: 0.8;

    @media ${(props) => props.theme.responsive.below_899} {
      font-size: 1.4rem;
    }

    @media ${(props) => props.theme.responsive.below_599} {
      font-size: 1.3rem;
    }
  }
`;

export const ProductDetailsReviewDescriptionStyled = styled.div`
  margin-top: 2rem;
`;
