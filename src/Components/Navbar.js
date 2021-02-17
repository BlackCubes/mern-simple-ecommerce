import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Image, Link, NavbarStyled } from '../common';

const Navbar = () => (
  <NavbarStyled.Navbar>
    <NavbarStyled.NavbarContainer>
      <NavbarStyled.NavbarLogo>
        <RouterLink to="/">
          <Image rest={{ src: '/img/icon.png', alt: 'Company Logo' }} />
        </RouterLink>
      </NavbarStyled.NavbarLogo>

      <NavbarStyled.NavbarMenuHolder>
        <NavbarStyled.NavbarMenu>
          <NavbarStyled.NavbarMenuList>
            <NavbarStyled.NavbarMenuListItem>
              <Link
                href="/products"
                rest={{
                  colortype: 'white',
                  hovercolortype: 'vivid_pink',
                }}
              >
                Products
              </Link>
            </NavbarStyled.NavbarMenuListItem>

            <NavbarStyled.NavbarMenuListItem>
              <Link
                href="/cart"
                rest={{
                  colortype: 'white',
                  hovercolortype: 'vivid_pink',
                }}
              >
                Cart
              </Link>
            </NavbarStyled.NavbarMenuListItem>
          </NavbarStyled.NavbarMenuList>
        </NavbarStyled.NavbarMenu>
      </NavbarStyled.NavbarMenuHolder>
    </NavbarStyled.NavbarContainer>
  </NavbarStyled.Navbar>
  // <nav>
  //   <Link to="/products">Products</Link>
  //   <Link to="/cart">Cart</Link>
  // </nav>
);

export default Navbar;
