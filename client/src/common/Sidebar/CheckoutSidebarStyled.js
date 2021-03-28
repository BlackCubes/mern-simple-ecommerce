import styled from 'styled-components';

export const CheckoutSidebarStyled = styled.div`
  position: sticky;
  top: 0;
  padding: 2.4rem 4rem;

  @media ${(props) => props.theme.responsive.below_899} {
    padding: 2.4rem 2.4rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    padding: 2.4rem 2.2rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    padding: 2.4rem 0.5rem;
  }
`;

export const CheckoutSidebarHeaderStyled = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const CheckoutSidebarSummaryStyled = styled.div`
  margin-bottom: 2rem;
`;

export const CheckoutSidebarSummaryLineStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const CheckoutSidebarSummaryTotalStyled = styled.div`
  margin-bottom: 1rem;

  & p {
    display: flex;
    justify-content: space-between;
  }
`;

export const CheckoutSidebarButtonStyled = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;
