import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
`;

const Image = ({ children }) => <ImageStyled>{children}</ImageStyled>;

Image.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Image;
