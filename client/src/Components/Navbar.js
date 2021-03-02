import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Image, Link } from '../common';

import {
  NavbarStyled,
  NavbarContainerStyled,
  NavbarLogoStyled,
  NavbarMenuHolderStyled,
  NavbarMenuStyled,
  NavbarMenuListStyled,
  NavbarMenuListItemStyled,
  NavbarCartStyled,
  NavbarCartImageStyled,
  NavbarCartLabelStyled,
  NavbarCartQuantityStyled,
} from '../common/Navbar';

import { useCartContext } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCartContext();

  return (
    <NavbarStyled>
      <NavbarContainerStyled>
        <NavbarLogoStyled>
          <RouterLink to="/">
            <Image rest={{ src: '/img/icon.png', alt: 'Company Logo' }} />
          </RouterLink>
        </NavbarLogoStyled>

        <NavbarMenuHolderStyled>
          <NavbarMenuStyled>
            <NavbarMenuListStyled>
              <NavbarMenuListItemStyled>
                <Link
                  href="/products"
                  rest={{
                    colortype: 'white',
                    hovercolortype: 'vivid_pink',
                  }}
                >
                  Products
                </Link>
              </NavbarMenuListItemStyled>

              <NavbarMenuListItemStyled>
                <Link
                  href="/cart"
                  rest={{
                    colortype: 'white',
                    hovercolortype: 'vivid_pink',
                  }}
                >
                  <NavbarCartStyled>
                    <NavbarCartImageStyled>
                      <Image
                        rest={{
                          src: '/img/shopping-cart.svg',
                          alt: 'Shopping Cart',
                        }}
                      />
                    </NavbarCartImageStyled>

                    <NavbarCartLabelStyled>Cart</NavbarCartLabelStyled>

                    <NavbarCartQuantityStyled>
                      {cart.length}
                    </NavbarCartQuantityStyled>
                  </NavbarCartStyled>
                </Link>
              </NavbarMenuListItemStyled>
            </NavbarMenuListStyled>
          </NavbarMenuStyled>
        </NavbarMenuHolderStyled>
      </NavbarContainerStyled>
    </NavbarStyled>
  );
};

export default Navbar;
