import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SmallStyled = styled.small`
  font-size: 1.3rem;
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.black};

  ${({ tagType }) =>
    tagType &&
    css`
      font-weight: 600;
    `}
`;

const Small = ({ children, tagType, colorType }) => (
  <SmallStyled tagType={tagType} colorType={colorType}>
    {children}
  </SmallStyled>
);

Small.propTypes = {
  children: PropTypes.node.isRequired,
  tagType: PropTypes.string,
  colorType: PropTypes.string,
};

Small.defaultProps = {
  tagType: null,
  colorType: 'black',
};

export default Small;
