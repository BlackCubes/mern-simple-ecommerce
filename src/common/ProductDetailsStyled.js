import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const ProductDetails = styled.div`
  width: 75%;
`;

export const ProductDetailsHeader = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const ProductDetailsHeaderTitle = styled.div`
  margin-bottom: 1rem;
`;

export const ProductDetailsHeaderData = styled.div`
  padding-top: 1rem;

  & small:nth-child(2) {
    text-transform: capitalize;
  }
`;

export const ProductDetailsBottomContainer = styled.div`
  display: flex;
`;

export const ProductDetailsInfo = styled.div`
  width: 65%;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ProductDetailsInfoImage = styled.div`
  width: 40rem;
  margin-left: auto;
  margin-right: auto;
`;

export const ProductDetailsPriceShippingCart = styled.div`
  width: 35%;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ProductDetailsPriceShippingCartRow = styled.div`
  margin-top: 2.4rem;
  padding-top: 2.4rem;
`;

export const ProductDetailsPrice = styled.div`
  & h2 {
    font-weight: 600;
  }
`;

export const ProductDetailsShippingBuy = styled.div`
  margin-bottom: 1rem;
`;

export const ProductDetailsShippingOption = styled.div`
  margin-top: 1rem;
`;
