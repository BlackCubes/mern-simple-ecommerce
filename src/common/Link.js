import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(RouterLink)`
  color: ${(props) =>
    props.colorType ? props.theme.colors[props.colorType] : '#5067c1'};
  text-decoration: none;
  background-color: transparent;

  &:hover {
    color: ${(props) =>
      props.hoverColorType
        ? props.theme.colors[props.hoverColorType]
        : '#425bbb'};
    text-decoration: underline;
    outline: 0;
  }
`;

const Link = ({ children, rest }) => (
  <LinkStyled {...rest}>{children}</LinkStyled>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  rest: PropTypes.shape({
    to: PropTypes.string.isRequired,
    colorType: PropTypes.string,
    hoverColorType: PropTypes.string,
  }),
};

Link.defaultProps = {
  rest: { to: '/#', colorType: null, hoverColorType: null },
};

export default Link;
