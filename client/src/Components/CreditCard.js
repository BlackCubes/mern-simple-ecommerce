import React from 'react';
import PropTypes from 'prop-types';

import { CreditCardStyled } from '../common';

const CreditCard = ({ children, transformscaletype, className }) => (
  <CreditCardStyled
    className={className}
    transformscaletype={transformscaletype}
  >
    {children}
  </CreditCardStyled>
);

CreditCard.propTypes = {
  children: PropTypes.node.isRequired,
  transformscaletype: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

CreditCard.defaultProps = {
  transformscaletype: null,
  className: '',
};

export default CreditCard;
