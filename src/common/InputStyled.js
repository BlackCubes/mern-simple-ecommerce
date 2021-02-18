// import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

export const LabelStyled = styled.label`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const InputStyled = styled.input`
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  border: none;
  border-bottom: 0.3rem solid transparent;
  border-radius: 0.2rem;
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

export const InputMessageStyled = styled.span`
  display: block;
  margin-top: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: left;
  transition: all 0.3s;
`;

// const Input = ({ inputprop, error }) => (
//   <LabelStyled htmlFor={inputprop.id}>
//     <InputStyled
//       type={inputprop.type}
//       name={inputprop.name}
//       className={inputprop.className}
//       id={inputprop.id}
//       value={inputprop.value}
//       placeholder={inputprop.placeholder}
//       onChange={inputprop.onChange}
//       noValidate={inputprop.noValidate}
//     />

//     <InputMessageStyled>{error || inputprop.message}</InputMessageStyled>
//   </LabelStyled>
// );

// Input.propTypes = {
//   inputprop: PropTypes.shape({
//     type: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     className: PropTypes.string,
//     id: PropTypes.string.isRequired,
//     value: PropTypes.string,
//     placeholder: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     noValidate: PropTypes.bool,
//     message: PropTypes.string.isRequired,
//   }).isRequired,
//   error: PropTypes.string,
// };

// Input.defaultProps = { error: null };

// export default Input;
