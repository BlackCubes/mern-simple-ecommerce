const express = require('express');

const { authController, userController } = require('../controllers');

const router = express.Router();

// ROUTES W/PURE AUTH
router.post('/signup', authController.checkLogin, authController.signup);
router.post('/login', authController.checkLogin, authController.login);
router.get(
  '/logout',
  authController.protect,
  authController.restrictTo('user', 'admin'),
  authController.logout
);
router.post(
  '/forgot-password',
  authController.checkLogin,
  authController.forgotPassword
);
router.patch(
  '/reset-password/:token',
  authController.checkLogin,
  authController.resetPassword
);
router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.restrictTo('admin'),
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
  userController.deleteMe
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
    userController.updateUser
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    authController.verifyPassword,
    userController.deleteUser
  );

module.exports = router;
