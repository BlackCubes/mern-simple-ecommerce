import React from 'react';
import { useLocation } from 'react-router-dom';

import { AccountNavbar, Navbar } from '../Components/Navbar';

const NavbarContainer = () => {
  const location = useLocation();

  return location.pathname === '/login' ? (
    <AccountNavbar />
  ) : location.pathname === '/checkout' ? (
    <AccountNavbar />
  ) : (
    <Navbar />
  );
};

export default NavbarContainer;
