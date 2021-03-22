import styled from 'styled-components';

export const SidebarStyled = styled.div`
  width: 20%;
  padding-left: 4rem;
  padding-right: 2rem;

  @media ${(props) => props.theme.responsive.below_1199} {
    padding-left: 1rem;
  }
`;

export const SidebarContainerStyled = styled.div`
  height: 100%;
`;

export const SidebarContentStyled = styled.div`
  position: sticky;
  top: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${(props) => props.theme.responsive.below_1199} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const SidebarFacetStyled = styled.div`
  padding: 2rem 0 2rem 2rem;
  border-bottom: 1px solid #000;

  @media ${(props) => props.theme.responsive.below_1199} {
    padding: 2rem 0 2rem 1rem;
  }
`;

export const SidebarFacetLegendStyled = styled.div`
  padding-bottom: 1rem;
`;

export const SidebarFacetListStyled = styled.ul`
  margin-top: 1rem;
  list-style-type: none;
`;

export const SidebarFacetListItemStyled = styled.li`
  margin-bottom: 1rem;
  text-transform: capitalize;
`;
