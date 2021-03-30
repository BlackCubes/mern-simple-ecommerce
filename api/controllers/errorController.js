const { AppError } = require('../utils');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}! 🙅‍♀️`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value. 🙅‍♀️`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data! ${errors.join('! ')} 🙅‍♀️`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, req, res) => {
  // API
  if (req.originalUrl.startsWith('/api'))
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: `${err.message} 🙅‍♀️`,
      stack: err.stack,
    });
};

const sendErrorProd = (err, req, res) => {
  // API
  if (req.originalUrl.startsWith('/api')) {
    // OPERATIONAL, TRUSTED ERROR: SEND MESSAGE TO CLIENT
    if (err.isOperational)
      return res.status(err.statusCode).json({
        status: err.status,
        message: `${err.message} 🙅‍♀️`,
      });

    // PROGRAMMING OR OTHER UNKNOWN ERROR: DON'T LEAK ERROR DETAILS
    console.log('ERROR!', err);
    return res.status(500).json({
      status: 'error',
      message: 'Something went very wrong! 🙅‍♀️',
    });
  }

  console.log('ERROR!', err);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error - handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);

    sendErrorProd(error, req, res);
  }
};
