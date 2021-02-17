import styled from 'styled-components';

export const Navbar = styled.header`
  background-color: ${(props) => props.theme.colors.black_gray};
  width: 100%;
  height: 11rem;
`;

export const NavbarContainer = styled.div`
  position: relative;
  width: 98%;
  max-width: 145rem;
  min-height: 11rem;
  margin-left: auto;
  margin-right: auto;
`;

export const NavbarLogo = styled.div`
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
`;

export const NavbarMenuHolder = styled.div`
  float: right;
  height: 11rem;
  max-width: 80%;
`;

export const NavbarMenu = styled.nav`
  display: inline-block;
  height: inherit;
`;

export const NavbarMenuList = styled.ul`
  display: block;
  height: inherit;
  padding: 2rem 0;
  list-style: none;
`;

export const NavbarMenuListItem = styled.li`
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
  }
`;
