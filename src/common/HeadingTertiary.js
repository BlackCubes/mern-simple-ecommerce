import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingTertiaryStyled = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
`;

const HeadingTertiary = ({ children }) => (
  <HeadingTertiaryStyled>{children}</HeadingTertiaryStyled>
);

HeadingTertiary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingTertiary;
