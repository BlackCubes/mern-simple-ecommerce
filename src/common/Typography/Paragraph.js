import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ParagraphStyled = styled.p`
  font-size: ${(props) =>
    props.sizetype ? props.theme.fontsizes[props.sizetype] : '1.6rem'};

  ${({ tagtype }) =>
    tagtype &&
    css`
      font-weight: 600;
    `}
`;

const Paragraph = ({ children, tagtype, sizetype }) => (
  <ParagraphStyled tagtype={tagtype} sizetype={sizetype}>
    {children}
  </ParagraphStyled>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  tagtype: PropTypes.string,
  sizetype: PropTypes.string,
};

Paragraph.defaultProps = { tagtype: null, sizetype: null };

export default Paragraph;
