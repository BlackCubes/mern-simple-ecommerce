import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { SnackbarStyled } from '../common';

const Snackbar = ({ children, color }) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SnackbarStyled className={isActive ? 'show' : ''} bgcolortype={color}>
      {children}
    </SnackbarStyled>
  );
};

Snackbar.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Snackbar;
