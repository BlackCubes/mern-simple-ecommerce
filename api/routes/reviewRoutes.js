const express = require('express');
const { authController, reviewController } = require('../controllers');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(authController.checkLogin, reviewController.createReview);

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
    reviewController.updateReview
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    authController.verifyPassword,
    reviewController.deleteReview
  );

module.exports = router;
