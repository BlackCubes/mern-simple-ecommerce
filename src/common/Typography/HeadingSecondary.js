import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingSecondaryStyled = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

const HeadingSecondary = ({ children }) => (
  <HeadingSecondaryStyled>{children}</HeadingSecondaryStyled>
);

HeadingSecondary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingSecondary;
