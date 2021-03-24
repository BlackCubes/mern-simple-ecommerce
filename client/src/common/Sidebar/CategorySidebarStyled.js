import styled from 'styled-components';

export const CategorySidebarStyled = styled.div`
  padding-left: 1rem;
  padding-right: 2rem;

  @media ${(props) => props.theme.responsive.below_1199} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const CategorySidebarHeaderStyled = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem 0;
`;

export const CategorySidebarCardStyled = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: minmax(1px, 40%) minmax(1px, 1fr);
  grid-template-areas: 'image info';
  margin-bottom: 6rem;
`;

export const CategorySidebarCardImageStyled = styled.div`
  & a {
    display: flex;
    justify-content: center;
    grid-area: 'image';
  }
`;

export const CategorySidebarCardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: 'info';
`;

export const CategorySidebarCardInfoTitleStyled = styled.div`
  margin-bottom: 0.2rem;
`;

export const CategorySidebarCardInfoPriceStyled = styled.div`
  margin-top: 0.2rem;
`;
