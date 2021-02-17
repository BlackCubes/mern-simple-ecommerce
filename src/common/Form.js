import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

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

  return (
    <form onSubmit={handleSubmit} noValidate>
      {formFields.map((prop) => (
        <InputComponent
          key={uuidv4()}
          inputprop={prop}
          values={values}
          errors={errors}
          onChange={handleChange}
        />
      ))}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
  InputComponent: PropTypes.elementType.isRequired,
};

export default Form;
