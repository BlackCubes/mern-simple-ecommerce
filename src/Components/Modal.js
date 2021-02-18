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

const Modal = ({ children, header }) => (
  <ModalContainerStyled>
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
};

export default Modal;
