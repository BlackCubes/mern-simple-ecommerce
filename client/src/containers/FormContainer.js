import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-credit-cards';

import { Button, FormStyled, FormGroupStyled } from '../common';
import { LabelStyled, InputMessageStyled } from '../common/Inputs';

import { CreditCard, Inputs, RatingsInput } from '../Components';

import {
  formatCreditCardNumber,
  formatCvc,
  formatExpDate,
  fieldInputErrors,
  fieldInputProperties,
  validateForm,
  validateStarRatings,
} from '../utils';

const FormContainer = ({
  onSubmit,
  formFields,
  hasCreditCard,
  hasReviewRating,
}) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState('');
  const [hasRatingsSubmit, setHasRatingsSubmit] = useState(false);

  const handleFocus = (e) => {
    const { name } = e.target;
    setFocus(name);
  };

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    switch (name) {
      case 'number':
        value = formatCreditCardNumber(value);
        break;
      case 'expiry':
        value = formatExpDate(value);
        break;
      case 'cvc':
        value = formatCvc(value);
        break;
      default:
        break;
    }

    validateForm(name, value, setErrors);

    setValues((val) => ({ ...val, [name]: value }));
  };

  const handleRatingsChange = (rating) => {
    validateStarRatings(rating, setErrors);
    setValues((val) => ({ ...val, rating }));
  };

  const checkErrors = (errorList) => {
    let valid = true;
    Object.values(errorList).forEach((err) => {
      if (err.length) valid = false;
    });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkErrors(errors)) {
      setHasRatingsSubmit(true);
      onSubmit(values);
      setValues({});
    }
  };

  useEffect(() => {
    if (hasRatingsSubmit) setHasRatingsSubmit(false);
  }, [hasRatingsSubmit]);

  const inputProperties = formFields.map((prop) =>
    fieldInputProperties({
      type: prop.type,
      name: prop.name,
      groupClassName: prop.groupClassName,
      id: prop.id,
      errors: errors,
      values: values,
      placeholder: prop.placeholder,
      onChange: handleChange,
      onFocus: handleFocus,
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
      {!hasCreditCard ? null : (
        <CreditCard transformscaletype="0.7">
          <Card
            number={values.number || ''}
            name={values.fullname || ''}
            expiry={values.expiry || ''}
            cvc={values.cvc || ''}
            focused={focus}
          />
        </CreditCard>
      )}

      {!hasReviewRating ? null : (
        <FormGroupStyled
          addlstyle={{
            width: '100%',
            float: 'left',
            margin: 0,
            padding: '0 0.75rem',
          }}
        >
          <LabelStyled htmlFor="rating">
            <RatingsInput
              id="rating"
              onRatingsChange={handleRatingsChange}
              cursortype="pointer"
              hasSubmitted={hasRatingsSubmit}
            />

            <InputMessageStyled>{errors.rating || ''}</InputMessageStyled>
          </LabelStyled>
        </FormGroupStyled>
      )}

      {inputProperties.map((prop, key) => {
        const ind = key;
        return (
          <FormGroupStyled
            key={ind}
            className={prop.groupClassName}
            addlstyle={prop.addlstyle}
          >
            <Inputs inputprop={prop} error={inputErrors[key]} />
          </FormGroupStyled>
        );
      })}

      <FormGroupStyled
        addlstyle={{ padding: '0 0.75rem', '> button': { width: '100%' } }}
      >
        <Button
          rest={{
            type: 'submit',
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
  hasCreditCard: PropTypes.bool,
  hasReviewRating: PropTypes.bool,
};

FormContainer.defaultProps = {
  hasCreditCard: false,
  hasReviewRating: false,
};

export default FormContainer;
