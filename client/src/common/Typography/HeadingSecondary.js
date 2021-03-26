import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingSecondaryStyled = styled.h2`
  font-size: 3rem;
  font-weight: 600;

  @media ${(props) => props.theme.responsive.below_899} {
    font-size: 2.7rem;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    font-size: 2.5rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    font-size: 2.3rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    font-size: 2rem;
  }
`;

const HeadingSecondary = ({ children }) => (
  <HeadingSecondaryStyled>{children}</HeadingSecondaryStyled>
);

HeadingSecondary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingSecondary;
