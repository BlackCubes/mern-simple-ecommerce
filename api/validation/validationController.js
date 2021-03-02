const validator = require('./validate');

const { AppError, catchAsync } = require('../utils');

const errMsg = (errObj) => {
  let message = '';
  Object.values(errObj).forEach((err) => (message += `${err[0]} `));
  return message.slice(0, -1);
};

const givenValidation = (req, next, validationRule) =>
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) return next(new AppError(`${errMsg(err.errors)}`, 400));
    next();
  });

exports.signup = catchAsync(async (req, res, next) => {
  const validationRule = {
    name: 'required|string|min:2|max:70|regexName',
    email: 'required|email|exist:User,email',
    password: 'required|string|min:8|max:60|confirmed|regexPassword',
    password_confirmation: 'required|string',
  };

  givenValidation(req, next, validationRule);
});

exports.login = catchAsync(async (req, res, next) => {
  const validationRule = {
    email: 'required|email',
    password: 'required|string|min:8|max:60|regexPassword',
  };

  givenValidation(req, next, validationRule);
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const validationRule = {
    email: 'required|email',
  };

  givenValidation(req, next, validationRule);
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const validationRule = {
    password: 'required|string|min:8|max:60|confirmed|regexPassword',
    password_confirmation: 'required|string',
  };

  givenValidation(req, next, validationRule);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const validationRule = {
    password_current: 'required|string|min:8|max:60|regexPassword',
    password: 'required|string|min:8|max:60|confirmed|regexPassword',
    password_confirmation: 'required|string',
  };

  givenValidation(req, next, validationRule);
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const validationRule = {
    name: 'string|max:70|regexName',
    email: 'email',
  };

  givenValidation(req, next, validationRule);
});

exports.createReview = catchAsync(async (req, res, next) => {
  const validationRule = {
    review: 'required|string|min:20|max:280',
    rating: 'required|numeric|min:1|max:5|regexRating',
    userfullname: 'required|string|min:2|max:70|regexName',
    productId: 'required|numeric|min:1',
  };

  givenValidation(req, next, validationRule);
});

exports.updateReview = catchAsync(async (req, res, next) => {
  const validationRule = {
    review: 'string|min:20|max:280',
    rating: 'numeric|min:1|max:5|regexRating',
    userfullname: 'string|min:2|max:70|regexName',
    productId: 'required|numeric|min:1',
  };

  givenValidation(req, next, validationRule);
});
