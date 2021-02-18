import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, header }) => (
  <div className="modal">
    <div>{header}</div>

    <div>{children}</div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};

export default Modal;
