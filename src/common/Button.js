import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: inline-block;
  width: ${({ duobtn }) => (duobtn ? '40%' : '90%')};
  font-size: 1.6rem;
  background-color: ${(props) =>
    props.colortype
      ? props.theme.colors[props.colortype]
      : props.theme.colors.vivid_pink};
  padding: 1.5rem 4rem;
  border: none;
  border-radius: 1rem;
  -webkit-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.vivid_pink_tone};
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
    duobtn: PropTypes.bool,
    colortype: PropTypes.string,
  }),
};

Button.defaultProps = {
  rest: { as: null, type: null, onClick: null, duobtn: false, colortype: null },
};

export default Button;
