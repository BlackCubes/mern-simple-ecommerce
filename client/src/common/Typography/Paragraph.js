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

  ${({ texttransformtype }) =>
    texttransformtype &&
    css`
      text-transform: ${texttransformtype};
    `}
  
  @media ${(props) => props.theme.responsive.below_899} {
    font-size: 1.55rem;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    font-size: 1.4rem;
  }
`;

const Paragraph = ({ children, tagtype, sizetype, texttransformtype }) => (
  <ParagraphStyled
    tagtype={tagtype}
    sizetype={sizetype}
    texttransformtype={texttransformtype}
  >
    {children}
  </ParagraphStyled>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  tagtype: PropTypes.string,
  sizetype: PropTypes.string,
  texttransformtype: PropTypes.string,
};

Paragraph.defaultProps = {
  tagtype: null,
  sizetype: null,
  texttransformtype: null,
};

export default Paragraph;
