import styled from 'styled-components';

export const SidebarStyled = styled.div`
  width: 20%;
  padding-left: 4rem;
  padding-right: 2rem;

  @media ${(props) => props.theme.responsive.below_1199} {
    padding-left: 1rem;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    width: 100%;
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

  @media ${(props) => props.theme.responsive.below_899} {
    position: initial;
    top: initial;
  }
`;

export const SidebarFacetStyled = styled.div`
  padding: 2rem 0 2rem 2rem;
  border-bottom: 1px solid #000;

  @media ${(props) => props.theme.responsive.below_1199} {
    padding: 2rem 0 2rem 1rem;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    border-bottom: none;
  }
`;

export const SidebarFacetLegendStyled = styled.div`
  padding-bottom: 1rem;

  @media ${(props) => props.theme.responsive.below_899} {
    display: none;
  }
`;

export const SidebarFacetListStyled = styled.ul`
  margin-top: 1rem;
  list-style-type: none;

  @media ${(props) => props.theme.responsive.below_899} {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

export const SidebarFacetListItemStyled = styled.li`
  margin-bottom: 1rem;
  text-transform: capitalize;

  @media ${(props) => props.theme.responsive.below_899} {
    display: inline-block;
  }

  & a {
    @media ${(props) => props.theme.responsive.below_899} {
      margin: 0.25rem;
      padding: 0.2rem 0.5rem;
      border-radius: 1rem;
      line-height: normal;
      transition: all 0.1s;
    }
  }
`;
