import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  display: inline-block;
  width: ${({ duobtn, fullbtn, nonbtn }) =>
    duobtn ? '40%' : fullbtn ? '100%' : nonbtn ? 'auto' : '90%'};
  font-size: ${(props) =>
    props.sizetype ? props.theme.fontsizes[props.sizetype] : '1.6rem'};
  background-color: ${(props) =>
    props.colortype
      ? props.theme.colors[props.colortype]
      : props.theme.colors.vivid_pink};
  padding: ${({ duobtn, fullbtn, nonbtn }) =>
    duobtn || fullbtn ? '1rem' : nonbtn ? '0' : '1.5rem'};
  border: none;
  border-radius: ${({ nonbtn }) => (nonbtn ? '0' : '0.2rem')};
  -webkit-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.nonbtn &&
    css`
      color: ${props.theme.colors.moderate_blue_2};
    `};

  &:hover {
    background-color: ${(props) =>
      props.nonbtn ? 'transparent' : props.theme.colors.vivid_pink_tone};

    ${(props) =>
      props.hovercolortype &&
      css`
        color: ${props.theme.colors[props.hovercolortype]};
      `};

    ${({ nonbtn }) =>
      nonbtn &&
      css`
        text-decoration: underline;
      `};
  }

  @media ${(props) => props.theme.responsive.below_899} {
    font-size: 1.45rem;
    padding: 1.4rem;
  }
`;

const Button = ({ children, rest }) => (
  <ButtonStyled {...rest}>{children}</ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  rest: PropTypes.shape({
    as: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    duobtn: PropTypes.bool,
    fullbtn: PropTypes.bool,
    colortype: PropTypes.string,
    hovercolortype: PropTypes.string,
    nonbtn: PropTypes.bool,
    sizetype: PropTypes.string,
  }),
};

Button.defaultProps = {
  rest: {
    as: null,
    type: null,
    onClick: null,
    disabled: false,
    duobtn: false,
    fullbtn: false,
    colortype: null,
    hovercolortype: null,
    nonbtn: false,
    sizetype: null,
  },
};

export default Button;
