import styled from 'styled-components';

export const CategorySidebar = styled.div`
  padding-left: 1rem;
  padding-right: 2rem;
`;

export const CategorySidebarHeader = styled.div`
  padding: 1.5rem 0;
`;

export const CategorySidebarCard = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: minmax(1px, 40%) minmax(1px, 1fr);
  grid-template-areas: 'image info';
`;

export const CategorySidebarCardImage = styled.div`
  & a {
    display: flex;
    justify-content: center;
    grid-area: 'image';
  }
`;

export const CategorySidebarCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: 'info';
`;

export const CategorySidebarCardInfoTitle = styled.div`
  margin-bottom: 1rem;
`;

export const CategorySidebarCardInfoPrice = styled.div`
  margin-top: 1rem;
`;
