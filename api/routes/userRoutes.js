const express = require('express');

const { userController } = require('../controllers');

const router = express.Router();

// ROUTES W/PURE AUTH
router.post('/signup');
router.post('/login');
router.get('/logout');
router.post('/forgot-password');
router.patch('/reset-password/:token');
router.patch('/updateMyPassword');

// ROUTES W/LESS AUTH
router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deactivateMe);
router.delete('/deleteMe/:id', userController.deleteMe);

// ROUTES ONLY FOR ADMIN
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
