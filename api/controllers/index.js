const globalErrorHandler = require('./errorController');
const reviewController = require('./reviewController');
const productController = require('./productController');
const userController = require('./userController');

module.exports = {
  globalErrorHandler,
  reviewController,
  productController,
  userController,
};
