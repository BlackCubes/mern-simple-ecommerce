import React from 'react';
import PropTypes from 'prop-types';

import { SnackbarStyled } from '../common';

const Snackbar = ({ message, color }) => (
  <SnackbarStyled bgcolortype={color}>{message}</SnackbarStyled>
);

Snackbar.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Snackbar;
