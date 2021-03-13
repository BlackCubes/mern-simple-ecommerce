import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SnackbarStyled } from '../common';

const Snackbar = ({ children, color }) => {
  const [isActive, setIsActive] = useState(true);

  setTimeout(() => {
    setIsActive(false);
  }, 5000);

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
