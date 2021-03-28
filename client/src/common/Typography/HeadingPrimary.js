import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingPrimaryStyled = styled.h1`
  font-size: 4rem;
  font-weight: ${(props) => props.fontweight || '400'};
  color: ${(props) =>
    props.textcolor ? props.theme.colors[props.textcolor] : 'inherit'};

  @media ${(props) => props.theme.responsive.below_899} {
    font-size: 3.5rem;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    font-size: 3.3rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    font-size: 3rem;
  }
`;

const HeadingPrimary = ({ children, fontweight, textcolor }) => (
  <HeadingPrimaryStyled fontweight={fontweight} textcolor={textcolor}>
    {children}
  </HeadingPrimaryStyled>
);

HeadingPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  fontweight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textcolor: PropTypes.string,
};

HeadingPrimary.defaultProps = {
  fontweight: null,
  textcolor: null,
};

export default HeadingPrimary;
