import styled from 'styled-components';

export const Navbar = styled.header`
  width: 100%;
  height: 8rem;
`;

export const NavbarContainer = styled.div`
  width: 98%;
  max-width: 145rem;
  margin-left: auto;
  margin-right: auto;
`;

export const NavbarLogo = styled.div`
  float: left;
  width: 3rem;
  position: absolute;
  line-height: 0;
  transform: translateY(-50%);
  top: 50%;
`;

export const NavbarMenuHolder = styled.div`
  float: right;
  max-width: 80%;
`;

export const NavbarMenu = styled.nav`
  display: inline-block;
`;

export const NavbarMenuList = styled.ul`
  padding: 1.5rem 0;
`;

export const NavbarMenuListItem = styled.li`
  margin-right: 1rem;
`;
