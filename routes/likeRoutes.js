const express = require('express');
const likeController = require('../controllers/likeController');
const router = express.Router();

router
  .route('/')
  .get(likeController.getAllLikes)
  .post(likeController.createALike);
router.route('/:id').get(likeController.getALike);
module.exports = router;
