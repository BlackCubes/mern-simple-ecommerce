const factory = require('./handlerFactory');
const { User } = require('../models');
const { AppError, catchAsync, filterObj, sanitize } = require('../utils');

exports.getMe = (req, res, next) => {
  req.params.id = [req.user.id];
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.password_confirmation)
    return next(
      new AppError(
        'This route is not for password update! Please use /updateMyPassword.',
        403
      )
    );

  const filteredBody = sanitize(filterObj(req.body, 'name', 'email'));

  const updateUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updateUser,
    },
  });
});

exports.deactivateMe = catchAsync(async (req, res, next) => {
  if (
    req.user.role === 'admin' &&
    req.params.id &&
    req.params.id === req.user.id
  )
    return next(
      new AppError('You cannot deactivate your account as an admin!', 403)
    );

  const query =
    req.user.role === 'admin' && req.params.id
      ? req.params.id
      : req.user.role === 'user'
      ? req.user.id
      : null;

  const deactivateUser = await User.findByIdAndUpdate(query, { active: false });

  if (!deactivateUser)
    return next(
      new AppError(
        'An error has occured. Please contact the system admin.',
        500
      )
    );

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getAllUsers = factory.getAll('User');
exports.getUser = factory.getOne('User');
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead.',
  });
};

// DO NOT UPDATE PASSWORDS WITH THIS!
exports.updateUser = factory.updateOne('User');
exports.deleteUser = factory.deleteOne('User');
