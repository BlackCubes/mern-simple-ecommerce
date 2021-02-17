import styled from 'styled-components';

export const Navbar = styled.header`
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

  & a {
    display: block;
  }
`;

export const NavbarMenuHolder = styled.div`
  float: right;
  max-width: 80%;
`;

export const NavbarMenu = styled.nav`
  display: inline-block;
`;

export const NavbarMenuList = styled.ul`
  display: block;
  padding: 1.5rem 0;
  list-style: none;
`;

export const NavbarMenuListItem = styled.li`
  float: left;
  margin-right: 1rem;
`;
