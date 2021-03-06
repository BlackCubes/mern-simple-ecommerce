const express = require('express');

const { authController, reviewController } = require('../controllers');

const { validationController } = require('../validation');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.checkLogin,
    reviewController.setProductId,
    validationController.createReview,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    reviewController.getReview
  )
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    validationController.updateReview,
    reviewController.updateReview
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    authController.verifyPassword,
    reviewController.deleteReview
  );

module.exports = router;
