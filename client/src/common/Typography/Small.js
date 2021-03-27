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

  @media ${(props) => props.theme.responsive.below_899} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    font-size: 1.15rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    font-size: 1.1rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    font-size: 1rem;
  }
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
