import React from 'react';
import PropTypes from 'prop-types';

import { CreditCardStyled } from '../common';

const CreditCard = ({ children, transformscaletype }) => (
  <CreditCardStyled transformscaletype={transformscaletype}>
    {children}
  </CreditCardStyled>
);

CreditCard.propTypes = {
  children: PropTypes.node.isRequired,
  transformscaletype: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CreditCard.defaultProps = {
  transformscaletype: null,
};

export default CreditCard;
