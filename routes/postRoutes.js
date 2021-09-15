const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router
  .route('/')
  .get(postController.getAllPosts)
  .post(postController.createAPost);
router.route('/:id').get(postController.getAPost);
module.exports = router;
