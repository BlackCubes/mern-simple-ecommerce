import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalStyled,
  ModalHeaderStyled,
  ModalBodyStyled,
  ModalButtonStyled,
} from '../common';

import { HeadingQuaternary } from '../common/Typography';

const Modal = ({ children, header }) => (
  <ModalStyled>
    <ModalHeaderStyled>
      <HeadingQuaternary>{header}</HeadingQuaternary>
    </ModalHeaderStyled>

    <ModalBodyStyled>{children}</ModalBodyStyled>

    <ModalButtonStyled>x</ModalButtonStyled>
  </ModalStyled>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};

export default Modal;
