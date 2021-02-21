import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingTertiaryStyled = styled.h3`
  font-size: 2.5rem;
  font-weight: ${({ fontweighttype }) => fontweighttype || 400};
`;

const HeadingTertiary = ({ children, fontweighttype }) => (
  <HeadingTertiaryStyled fontweighttype={fontweighttype}>
    {children}
  </HeadingTertiaryStyled>
);

HeadingTertiary.propTypes = {
  children: PropTypes.node.isRequired,
  fontweighttype: PropTypes.string,
};

HeadingTertiary.defaultProps = { fontweighttype: 400 };

export default HeadingTertiary;
