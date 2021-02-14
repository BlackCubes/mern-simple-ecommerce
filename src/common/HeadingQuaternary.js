import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingQuaternaryStyled = styled.h4`
  font-size: 2rem;
  font-weight: 400;
`;

const HeadingQuaternary = ({ children }) => (
  <HeadingQuaternaryStyled>{children}</HeadingQuaternaryStyled>
);

HeadingQuaternary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingQuaternary;
