import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalStyled,
  ModalContainerStyled,
  ModalHeaderStyled,
  ModalBodyStyled,
  ModalButtonStyled,
} from '../common';

import { HeadingQuaternary } from '../common/Typography';

const Modal = ({ children, header, modalToggle }) => (
  <ModalContainerStyled modaltoggle={modalToggle}>
    <ModalStyled>
      <ModalHeaderStyled>
        <HeadingQuaternary>{header}</HeadingQuaternary>
      </ModalHeaderStyled>

      <ModalBodyStyled>{children}</ModalBodyStyled>

      <ModalButtonStyled>x</ModalButtonStyled>
    </ModalStyled>
  </ModalContainerStyled>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  modalToggle: PropTypes.bool.isRequired,
};

export default Modal;
