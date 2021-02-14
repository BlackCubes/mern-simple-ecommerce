import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ParagraphStyled = styled.p`
  font-size: 1.6rem;
`;

const Paragraph = ({ children }) => (
  <ParagraphStyled>{children}</ParagraphStyled>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
