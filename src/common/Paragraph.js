import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ParagraphStyled = styled.p`
  font-size: 1.6rem;

  ${({ tagtype }) =>
    tagtype &&
    css`
      font-weight: 600;
    `}
`;

const Paragraph = ({ children, tagtype }) => (
  <ParagraphStyled tagtype={tagtype}>{children}</ParagraphStyled>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  tagtype: PropTypes.string,
};

Paragraph.defaultProps = { tagtype: null };

export default Paragraph;
