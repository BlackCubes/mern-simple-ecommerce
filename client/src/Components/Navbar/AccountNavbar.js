import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Image } from '../../common';

import {
  AccountNavbarStyled,
  AccountNavbarLogoStyled,
  AccountNavbarLogoImgStyled,
} from '../../common/Navbar';

const AccountNavbar = () => (
  <AccountNavbarStyled>
    <AccountNavbarLogoStyled>
      <AccountNavbarLogoImgStyled>
        <RouterLink to="/">
          <Image
            rest={{ src: '/img/logo-large.png', alt: 'Company Big Logo' }}
          />
        </RouterLink>
      </AccountNavbarLogoImgStyled>
    </AccountNavbarLogoStyled>
  </AccountNavbarStyled>
);

export default AccountNavbar;
