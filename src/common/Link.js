import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(RouterLink)`
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.moderate_blue_2};
  text-decoration: none;
  background-color: transparent;

  &:hover {
    color: ${(props) =>
      props.hoverColorType
        ? props.theme.colors[props.hoverColorType]
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
  href: PropTypes.string.isRequired,
  rest: PropTypes.shape({
    colorType: PropTypes.string,
    hoverColorType: PropTypes.string,
  }),
};

Link.defaultProps = {
  rest: { colorType: null, hoverColorType: null },
};

export default Link;
