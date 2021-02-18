import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { v4 as uuidv4 } from 'uuid';

import { fieldInputErrors, fieldInputProperties } from '../utils';

const Form = ({ onSubmit, formFields, InputComponent }) => {
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
      errors: errors,
      values: prop.values,
      placeholder: prop.placeholder,
      onChange: handleChange,
      noValidate: prop.noValidate,
    })
  );

  const inputErrors = formFields.map((prop) =>
    fieldInputErrors(prop.name, errors)
  );

  console.log('inputProperties: ', inputProperties);
  console.log('inputErrors: ', inputErrors);
  console.log('InputComponent: ', InputComponent);

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* {formFields.map((prop) => (
        <InputComponent
          key={uuidv4()}
          inputprop={prop}
          values={values}
          errors={errors}
          onChange={handleChange}
        />
      ))} */}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
  InputComponent: PropTypes.elementType.isRequired,
};

export default Form;
