import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
`;

const Image = ({ rest }) => <ImageStyled {...rest} />;

Image.propTypes = {
  // children: PropTypes.node.isRequired,
  rest: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Image;
