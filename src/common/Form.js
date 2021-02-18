import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { fieldInputErrors, fieldInputProperties } from '../utils';

const Form = ({ onSubmit, formFields }) => {
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
    })
  );

  const inputErrors = formFields.map((prop) =>
    fieldInputErrors(prop.name, errors)
  );

  console.log('inputProperties: ', inputProperties);
  console.log('inputErrors: ', inputErrors);

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* {inputProperties.map((prop, key) => (
        <InputComponent
          key={uuidv4()}
          inputprop={prop}
          errors={inputErrors[key]}
        />
      ))} */}
      Hello!
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
