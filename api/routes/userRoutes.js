const express = require('express');

const { authController, userController } = require('../controllers');

const { validationController } = require('../validation');

const router = express.Router();

// ROUTES W/PURE AUTH
router.post(
  '/signup',
  authController.checkLogin,
  validationController.signup,
  authController.signup
);
router.post(
  '/login',
  authController.checkLogin,
  validationController.login,
  authController.login
);
router.get(
  '/logout',
  authController.protect,
  authController.restrictTo('user', 'admin'),
  authController.logout
);
router.post(
  '/forgot-password',
  authController.checkLogin,
  validationController.forgotPassword,
  authController.forgotPassword
);
router.patch(
  '/reset-password/:token',
  authController.checkLogin,
  validationController.resetPassword,
  authController.resetPassword
);
router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.restrictTo('admin'),
  validationController.updatePassword,
  authController.updateMyPassword
);

// ROUTES W/LESS AUTH
router.get(
  '/me',
  authController.protect,
  authController.restrictTo('admin'),
  userController.getMe,
  userController.getUser
);
router.patch(
  '/updateMe',
  authController.protect,
  authController.restrictTo('admin'),
  validationController.updateUser,
  userController.updateMe
);
router.delete(
  '/deleteMe',
  authController.protect,
  authController.restrictTo('user'),
  authController.verifyPassword,
  userController.deactivateMe
);
router.delete(
  '/deleteMe/:id',
  authController.protect,
  authController.restrictTo('admin'),
  authController.verifyPassword,
  userController.deactivateMe
);

// ROUTES ONLY FOR ADMIN
router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    userController.getAllUsers
  )
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    userController.createUser
  );

router
  .route('/:id')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    userController.getUser
  )
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    validationController.updateUser,
    userController.updateUser
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    authController.verifyPassword,
    userController.deleteUser
  );

module.exports = router;
