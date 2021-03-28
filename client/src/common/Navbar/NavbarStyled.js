import styled from 'styled-components';

export const NavbarStyled = styled.header`
  position: relative;
  background-color: ${(props) => props.theme.colors.black_gray};
  width: 100%;
  height: 11rem;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1rem;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 90%
    );
    z-index: 1;
  }
`;

export const NavbarContainerStyled = styled.div`
  position: relative;
  width: 98%;
  max-width: 145rem;
  min-height: 11rem;
  margin-left: auto;
  margin-right: auto;
`;

export const NavbarLogoStyled = styled.div`
  float: left;
  width: 7rem;
  position: absolute;
  line-height: 0;
  transform: translateY(-50%);
  top: 50%;
  transition: color 0.3s ease, background-color 0.3s ease;

  & a {
    display: block;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    width: 6.5rem;
  }
`;

export const NavbarMenuHolderStyled = styled.div`
  float: right;
  height: 11rem;
  max-width: 80%;
`;

export const NavbarMenuStyled = styled.nav`
  display: inline-block;
  height: inherit;
`;

export const NavbarMenuListStyled = styled.ul`
  display: block;
  height: inherit;
  padding: 2rem 0;
  list-style: none;
`;

export const NavbarMenuListItemStyled = styled.li`
  display: flex;
  float: left;
  height: 100%;
  margin-right: 1rem;

  & a {
    display: inline-flex;
    font-size: 1.8rem;
    padding: 1.5rem;
    align-items: center;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
      text-decoration: none;
    }

    @media ${(props) => props.theme.responsive.below_899} {
      font-size: 1.7rem;
      padding: 1rem;
    }
  }
`;

export const NavbarCartStyled = styled.div`
  display: inline-flex;
  position: relative;
`;

export const NavbarCartImageStyled = styled.div`
  width: 3rem;
  height: 3rem;
`;

export const NavbarCartLabelStyled = styled.span`
  margin-left: 0.5rem;
`;

export const NavbarCartQuantityStyled = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.black_gray};
  background-color: ${(props) => props.theme.colors.lime_green};
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  align-items: center;
  top: -0.5rem;
  left: 1.9rem;

  @media ${(props) => props.theme.responsive.below_899} {
    width: 1.7rem;
    height: 1.7rem;
  }
`;
