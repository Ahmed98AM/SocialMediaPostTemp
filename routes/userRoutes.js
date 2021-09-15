const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createAUser);
router.route('/:id').get(userController.getAUser);
module.exports = router;
