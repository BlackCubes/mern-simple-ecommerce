import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, FormStyled, FormGroupStyled } from '../common';

import { Input } from '../Components';

import { fieldInputErrors, fieldInputProperties } from '../utils';

const FormContainer = ({ onSubmit, formFields }) => {
  const [values, setValues] = useState({});
  // const [errors, setErrors] = useState({});
  const errors = {};

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((val) => ({ ...val, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const inputProperties = formFields.map((prop) =>
    fieldInputProperties({
      type: prop.type,
      name: prop.name,
      id: prop.id,
      errors: errors,
      values: values,
      placeholder: prop.placeholder,
      onChange: handleChange,
      noValidate: prop.noValidate,
      message: prop.message,
      addlstyle: prop.addlstyle,
    })
  );

  const inputErrors = formFields.map((prop) =>
    fieldInputErrors(prop.name, errors)
  );

  return (
    <FormStyled onSubmit={handleSubmit} noValidate>
      {inputProperties.map((prop, key) => {
        const ind = key;
        return (
          <FormGroupStyled key={ind} addlstyle={prop.addlstyle}>
            <Input inputprop={prop} errors={inputErrors[key]} />
          </FormGroupStyled>
        );
      })}

      <FormGroupStyled>
        <Button
          rest={{
            type: 'button',
          }}
        >
          Save
        </Button>
      </FormGroupStyled>
    </FormStyled>
  );
};

FormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FormContainer;
