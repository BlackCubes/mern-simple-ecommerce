import styled from 'styled-components';

export const Products = styled.div`
  width: 75%;
`;

export const ProductsCard = styled.div`
  min-height: 23.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const ProductsCardImage = styled.div`
  display: inline-block;
  width: 16%;
  padding-right: 2rem;
  vertical-align: top;

  & a {
    display: block;
  }
`;

export const ProductsCardRightColumn = styled.div`
  display: inline-block;
  width: 84%;
  vertical-align: top;
`;

export const ProductsCardInfo = styled.div`
  display: inline-block;
  width: 60%;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ProductsCardPriceCart = styled.div`
  display: inline-block;
  width: 40%;
  padding-left: 2rem;
`;

export const ProductsCardPrice = styled.div`
  font-weight: 600;
`;

export const ProductsCardCartBtn = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;
