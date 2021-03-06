import styled from 'styled-components';

export const SidebarStyled = styled.div`
  width: 20%;
  padding-left: 4rem;
  padding-right: 2rem;

  &.category-sidebar {
    @media ${(props) => props.theme.responsive.below_899} {
      display: none;
    }
  }

  &.checkout-sidebar {
    @media ${(props) => props.theme.responsive.below_1199} {
      width: 35%;
    }

    @media ${(props) => props.theme.responsive.below_899} {
      width: 45%;
    }

    @media ${(props) => props.theme.responsive.below_599} {
      width: 48%;
      padding-left: 0;
      padding-right: 0;
    }

    @media ${(props) => props.theme.responsive.below_479} {
      width: 50%;
    }

    @media ${(props) => props.theme.responsive.below_379} {
      padding-right: 0.5rem;
    }
  }

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
      color: rgba(80, 103, 193, 0.6);
      margin: 0.25rem;
      padding: 0.2rem 0.5rem;
      border-top: 0.1rem solid rgba(255, 30, 94, 0.47);
      border-bottom: 0.1rem solid rgba(255, 30, 94, 0.47);
      border-radius: 1rem;
      line-height: normal;
      transition: all 0.1s;

      &:hover {
        border-top: 0.1rem solid rgba(255, 30, 94, 0.17);
        border-bottom: 0.1rem solid rgba(255, 30, 94, 0.17);
        border-radius: 2rem;
      }
    }
  }
`;
