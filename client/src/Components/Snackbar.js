import React from 'react';
import PropTypes from 'prop-types';

import { SnackbarStyled } from '../common';

const Snackbar = ({ children, color }) => (
  <SnackbarStyled bgcolortype={color}>{children}</SnackbarStyled>
);

Snackbar.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Snackbar;
