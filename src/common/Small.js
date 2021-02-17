import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SmallStyled = styled.small`
  font-size: ${(props) =>
    props.sizetype
      ? props.theme.fontsizes[props.sizetype]
      : props.theme.fontsizes.small};
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

const Small = ({ children, tagType, colorType, sizetype }) => (
  <SmallStyled tagType={tagType} colorType={colorType} sizetype={sizetype}>
    {children}
  </SmallStyled>
);

Small.propTypes = {
  children: PropTypes.node.isRequired,
  tagType: PropTypes.string,
  colorType: PropTypes.string,
  sizetype: PropTypes.string,
};

Small.defaultProps = {
  tagType: null,
  colorType: 'black',
  sizetype: null,
};

export default Small;
