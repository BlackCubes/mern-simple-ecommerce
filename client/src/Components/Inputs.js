import React from 'react';
import PropTypes from 'prop-types';

import { InputMessageStyled, InputStyled, LabelStyled } from '../common';

const Input = ({ inputprop, error }) => (
  <LabelStyled htmlFor={inputprop.id}>
    {inputprop.type !== 'textarea' ? (
      <InputStyled
        type={inputprop.type}
        name={inputprop.name}
        className={inputprop.className}
        id={inputprop.id}
        value={inputprop.value}
        placeholder={inputprop.placeholder}
        onChange={inputprop.onChange}
        noValidate={inputprop.noValidate}
      />
    ) : (
      <textarea
        name={inputprop.name}
        className={inputprop.className}
        id={inputprop.id}
        value={inputprop.value}
        placeholder={inputprop.placeholder}
        minLength={inputprop.minlength}
        maxLength={inputprop.maxlength}
        onChange={inputprop.onChange}
        noValidate={inputprop.noValidate}
      />
    )}

    <InputMessageStyled>{error || inputprop.message}</InputMessageStyled>
  </LabelStyled>
);

Input.propTypes = {
  inputprop: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    minlength: PropTypes.string,
    maxlength: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    noValidate: PropTypes.bool,
    message: PropTypes.string.isRequired,
  }).isRequired,
  error: PropTypes.string,
};

Input.defaultProps = { error: null };

export default Input;
