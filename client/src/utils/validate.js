import cardValidator from 'card-validator';

import regex from './regex';

export const validateStarRatings = (rating, setErrors) => {
  if (!rating)
    setErrors((err) => ({
      ...err,
      rating: 'Required',
    }));
  else if (rating < 1)
    setErrors((err) => ({
      ...err,
      rating: 'Must be a minimum rating of 1.',
    }));
  else if (rating > 5)
    setErrors((err) => ({
      ...err,
      rating: 'Must be a maximum rating of 5.',
    }));
  else if (!regex.rating.test(rating))
    setErrors((err) => ({
      ...err,
      rating: 'Please provide a valid rating between 1 and 5',
    }));
  else setErrors((err) => ({ ...err, rating: '' }));
};

export const validateForm = (inputName, inputValue, setErrors) => {
  switch (inputName) {
    case 'email':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (!regex.email.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please provide a valid email.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'password':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (inputValue.length < 8)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum of 8 characters.',
        }));
      else if (inputValue.length > 60)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be less than or equal to 60 characters.',
        }));
      else if (!regex.password.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]:
            'Please use at least one number, one special character, and one capital letter between 8 to 60 characters.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'firstname':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (inputValue.length < 2)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum of 2 characters.',
        }));
      else if (inputValue.length > 20)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be less than or equal to 20 characters.',
        }));
      else if (!regex.name.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please use a valid first name.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'lastname':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (inputValue.length < 2)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum of 2 characters.',
        }));
      else if (inputValue.length > 40)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be less than or equal to 40 characters.',
        }));
      else if (!regex.name.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please use a valid last name.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'fullname':
      if (!inputValue.split(' ')[0])
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required first name.',
        }));
      else if (!inputValue.split(' ')[1])
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required last name.',
        }));
      else if (inputValue.length < 2)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum of 2 characters',
        }));
      else if (inputValue.length > 70)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be less than or equal to 70 characters.',
        }));
      else if (!regex.name.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please use a valid fullname.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'address':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (inputValue.length < 3)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum of 3 characters.',
        }));
      else if (inputValue.length > 96)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be less than or equal to 96 characters.',
        }));
      else if (!regex.address.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please use a valid address.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'city':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (inputValue.length < 3)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum of 3 characters.',
        }));
      else if (inputValue.length > 50)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be less than or equal to 50 characters.',
        }));
      else if (!regex.city.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please use a valid city.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'state':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (inputValue.length !== 2)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be 2 characters long.',
        }));
      else if (!regex.state.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please provide a valid US state.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'zipcode':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (inputValue.length !== 5)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be 5 characters long.',
        }));
      else if (!regex.zipcode.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please provide a valid US ZIP code.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'review':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (inputValue.length < 20)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum of 20 characters.',
        }));
      else if (inputValue.length > 280)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be less than or equal to 280 characters.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'rating':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (parseInt(inputValue, 10) < 1)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum rating of 1.',
        }));
      else if (parseInt(inputValue, 10) > 5)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be a maximum rating of 5.',
        }));
      else if (!regex.rating.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please provide a valid rating between 1 and 5',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'number':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (!cardValidator.number(inputValue).isValid)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please provide a valid number.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'expiry':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (!cardValidator.expirationDate(inputValue).isValid)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please provide a valid exp. data.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'cvc':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (!cardValidator.cvv(inputValue).isValid)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please provide a valid cvv',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    default:
      break;
  }
};
