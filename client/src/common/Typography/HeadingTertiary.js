import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingTertiaryStyled = styled.h3`
  font-size: 2.5rem;
  font-weight: ${({ fontweighttype }) => fontweighttype || 400};

  @media ${(props) => props.theme.responsive.below_899} {
    font-size: 2.3rem;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    font-size: 2rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    font-size: 1.7rem;
  }
`;

const HeadingTertiary = ({ children, fontweighttype }) => (
  <HeadingTertiaryStyled fontweighttype={fontweighttype}>
    {children}
  </HeadingTertiaryStyled>
);

HeadingTertiary.propTypes = {
  children: PropTypes.node.isRequired,
  fontweighttype: PropTypes.number,
};

HeadingTertiary.defaultProps = { fontweighttype: 400 };

export default HeadingTertiary;
