import React from 'react';
import { useLocation } from 'react-router-dom';

import { AccountFooter, Footer } from '../Components/Footer';

const FooterContainer = () => {
  const location = useLocation();

  return location.pathname === '/login' ? (
    <AccountFooter />
  ) : location.pathname === '/checkout' ? (
    <AccountFooter />
  ) : (
    <Footer />
  );
};

export default FooterContainer;
