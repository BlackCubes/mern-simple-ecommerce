const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { User } = require('../models');
const { AppError, catchAsync, filterObj, sanitize } = require('../utils');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  };

  res.cookie('jwt', token, cookieOptions);

  // REMOVE PASSWORD FROM OUTPUT
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = sanitize(
    filterObj(req.body, 'email', 'password')
  );

  if (!email || !password)
    return next(new AppError('Please provide an email and password!', 400));

  const user = await User.findOne({ email }).select('+password');
  const correctPassword = await user.correctPassword(password, user.password);

  if (!user || !correctPassword)
    return next(new AppError('Incorrect email or password!', 401));

  createSendToken(user, 200, req, res);
});

exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: 'success' });
};

exports.resetPassword = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user)
    return next(new AppError('Token is either invalid or expired!', 400));

  const { password, password_confirmation } = sanitize(
    filterObj(req.body, 'password', 'password_confirmation')
  );

  user.password = password;
  user.password_confirmation = password_confirmation;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  createSendToken(user, 200, req, res);
});

exports.updateMyPassword = catchAsync(async (req, res, next) => {
  const { password, password_confirmation, password_current } = sanitize(
    filterObj(req.body, 'password', 'password_confirmation', 'password_current')
  );

  const user = await User.findById(req.user.id).select('+password');
  const correctPassword = await user.correctPassword(
    password_current,
    user.password
  );

  if (!correctPassword)
    return next(new AppError('Your current password is wrong!', 401));

  user.password = password;
  user.password_confirmation = password_confirmation;
  await user.save();

  createSendToken(user, 200, req, res);
});

exports.verifyPassword = catchAsync(async (req, res, next) => {
  const { password } = sanitize(filterObj(req.body, 'password'));

  if (!password) return next(new AppError('Please provide a password!', 400));

  const user = await User.findById(req.user.id).select('+password');
  const correctPassword = await user.correctPassword(password, user.password);

  if (!user || !correctPassword)
    return next(new AppError('Incorrect password!', 401));

  next();
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token)
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );

  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);

  if (!currentUser)
    return next(
      new AppError('The user belonging to this token does not exist!', 401)
    );

  if (currentUser.changedPasswordAfter(decoded.iat))
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

exports.checkLogin = (req, res, next) => {
  if (req.cookies.jwt)
    return next(new AppError('You are still logged in!', 403));

  next();
};

exports.restrictTo = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role))
    return next(
      new AppError('You do not have permission to perform this action!', 403)
    );

  next();
};
