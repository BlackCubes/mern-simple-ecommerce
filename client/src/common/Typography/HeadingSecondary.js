import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingSecondaryStyled = styled.h2`
  font-size: 3rem;
  font-weight: 600;

  @media ${(props) => props.theme.responsive.below_899} {
    font-size: 2.7rem;
  }
`;

const HeadingSecondary = ({ children }) => (
  <HeadingSecondaryStyled>{children}</HeadingSecondaryStyled>
);

HeadingSecondary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingSecondary;
