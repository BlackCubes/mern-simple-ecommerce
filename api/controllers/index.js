const authController = require('./authController');
const globalErrorHandler = require('./errorController');
const reviewController = require('./reviewController');
const productController = require('./productController');
const userController = require('./userController');

module.exports = {
  authController,
  globalErrorHandler,
  reviewController,
  productController,
  userController,
};
