import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelStyled = styled.label`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const InputStyled = styled.input`
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  border: none;
  border-bottom: 0.3rem solid transparent;
  border-radius: 1rem;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-bottom: 0.3rem solid ${(props) => props.theme.colors.lime_green};
  }

  &:focus:invalid {
    border-bottom: 0.3rem solid ${(props) => props.theme.colors.red};
  }

  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.moderate_dark_blue};
  }

  &.error {
    border-bottom: 0.3rem solid ${(props) => props.theme.colors.red};
  }

  &:placeholder-shown + span {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-2rem);
  }

  &:focus:invalid + span {
    color: ${(props) => props.theme.colors.red};
  }

  &.error + span {
    color: ${(props) => props.theme.colors.red};
  }
`;

const InputMessageStyled = styled.span`
  display: block;
  margin-top: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: left;
  transition: all 0.3s;
`;

const Input = ({ inputprop, values, errors, onChange }) => (
  <>
    <LabelStyled htmlFor={inputprop.id}>
      <InputStyled
        type={inputprop.type || 'text'}
        name={inputprop.name}
        className={errors[inputprop.name] && 'error'}
        value={values[inputprop.name] || ''}
        placeholder={inputprop.placeholder}
        onChange={onChange}
        noValidate={inputprop.noValidate || true}
      />

      <InputMessageStyled>
        {errors[inputprop.name] ? errors[inputprop.name] : inputprop.message}
      </InputMessageStyled>
    </LabelStyled>
  </>
);

Input.propTypes = {
  inputprop: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    noValidate: PropTypes.bool,
    message: PropTypes.string.isRequired,
  }).isRequired,
  values: PropTypes.oneOfType([PropTypes.object]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
