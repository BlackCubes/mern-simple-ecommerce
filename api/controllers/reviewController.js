const factory = require('./handlerFactory');

exports.setProductId = (req, res, next) => {
  if (!req.body.productId) req.body.productId = req.params.productId;
  next();
};

exports.getAllReviews = factory.getAll('Review');
exports.getReview = factory.getOne('Review');
exports.createReview = factory.createOne('Review');
exports.updateReview = factory.updateOne('Review');
exports.deleteReview = factory.deleteOne('Review');
