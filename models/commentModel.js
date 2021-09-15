const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Comment must have content!'],
  },
  post: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: [true, 'Comment must have a parent post!'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Comment must have an owner!'],
  },
});
commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name -_id',
  });
  next();
});
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
