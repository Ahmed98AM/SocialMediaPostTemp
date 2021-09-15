const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Like must have an owner!'],
  },
  post: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: [true, 'Like must have a parent post!'],
  },
});
likeSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name -_id',
  });
  next();
});

likeSchema.index({ user: 1, post: 1 }, { unique: true });

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
