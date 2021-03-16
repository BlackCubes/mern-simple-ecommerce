import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingPrimaryStyled = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  color: ${(props) =>
    props.textcolor ? props.theme.colors[props.textcolor] : 'inherit'};
`;

const HeadingPrimary = ({ children, textcolor }) => (
  <HeadingPrimaryStyled textcolor={textcolor}>{children}</HeadingPrimaryStyled>
);

HeadingPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  textcolor: PropTypes.string,
};

HeadingPrimary.defaultProps = {
  textcolor: null,
};

export default HeadingPrimary;
