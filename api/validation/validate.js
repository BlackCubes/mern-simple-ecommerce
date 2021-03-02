const Validator = require('validatorjs');

const Models = require('../models');

const regex = require('./regex');

const { capitalize } = require('../utils');

// Validate name
Validator.register(
  'regexName',
  (val) => regex.name.test(val),
  'Please use at least 2 characters with no lonely empty spaces, no accents, and does not exceed 70 characters for the name.'
);

// Validate password
Validator.register(
  'regexPassword',
  (val) => regex.password.test(val),
  'Please use at least one number, one special character, and one capital letter between 8 to 60 characters for the password.'
);

// Validate review rating
Validator.register(
  'regexRating',
  (val) => regex.rating.test(val),
  'Please provide a valid rating between the numbers 1 and 5.'
);

// Validate if a specific field in DB exists
Validator.registerAsync('exist', (val, attribute, req, passes) => {
  if (!attribute)
    throw new Error('Specify requirements i.e. fieldName: exist:table, column');

  const attArr = attribute.split(',');
  if (attArr.length !== 2)
    throw new Error(`Invalid format for validation rule on ${attribute}`);

  const { 0: table, 1: column } = attArr;

  const msg = `${capitalize(column)} already in use.`;

  Models[table].valueExist({ [column]: val }).then((res) => {
    if (res) {
      passes(false, msg);
      return;
    }
    passes();
  });
});

module.exports = (body, rules, customeMessages, cb) => {
  const validation = new Validator(body, rules, customeMessages);

  validation.passes(() => cb(null, true));
  validation.fails(() => cb(validation.errors, false));
};
