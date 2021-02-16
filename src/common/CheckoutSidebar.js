import styled from 'styled-components';

export const CheckoutSidebar = styled.div`
  position: sticky;
  top: 0;
  padding: 2.4rem 4rem;
`;

export const CheckoutSidebarHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const CheckoutSidebarSummary = styled.div`
  margin-bottom: 2rem;
`;

export const CheckoutSidebarSummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const CheckoutSidebarSummaryTotal = styled(CheckoutSidebarSummaryLine)`
  margin-bottom: 1rem;
`;

export const CheckoutSidebarButton = styled.div`
  margin-bottom: 2rem;
`;
