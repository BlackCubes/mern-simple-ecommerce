import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SmallStyled = styled.small`
  font-size: 1.3rem;
  color: #505cc1;

  ${({ tagType }) =>
    tagType &&
    css`
      font-weight: 600;
    `}
`;

const Small = ({ children, tagType }) => (
  <SmallStyled tagType={tagType}>{children}</SmallStyled>
);

Small.propTypes = {
  children: PropTypes.node.isRequired,
  tagType: PropTypes.string,
};

Small.defaultProps = {
  tagType: null,
};

export default Small;
