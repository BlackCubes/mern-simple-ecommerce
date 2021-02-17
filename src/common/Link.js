import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(RouterLink)`
  color: ${(props) =>
    props.colortype
      ? props.theme.colors[props.colortype]
      : props.theme.colors.moderate_blue_2};
  text-decoration: none;
  background-color: transparent;

  &:hover {
    color: ${(props) =>
      props.hovercolortype
        ? props.theme.colors[props.hovercolortype]
        : props.theme.colors.moderate_blue_dark};
    text-decoration: underline;
    outline: 0;
  }
`;

const Link = ({ children, href, rest }) => (
  <LinkStyled to={href} {...rest}>
    {children}
  </LinkStyled>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  rest: PropTypes.shape({
    title: PropTypes.string,
    onClick: PropTypes.func,
    colortype: PropTypes.string,
    hovercolortype: PropTypes.string,
  }),
};

Link.defaultProps = {
  rest: { title: null, onClick: null, colortype: null, hovercolortype: null },
};

export default Link;
