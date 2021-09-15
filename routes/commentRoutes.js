const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router
  .route('/')
  .get(commentController.getAllComments)
  .post(commentController.createAComment);
router.route('/:id').get(commentController.getAComment);
module.exports = router;
