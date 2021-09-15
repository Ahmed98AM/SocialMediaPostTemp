const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    photo: String,
    content: {
      type: String,
      required: [true, 'Post must have content!'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Post must have an owner!'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'post',
  localField: '_id',
});
postSchema.virtual('likes', {
  ref: 'Like',
  foreignField: 'post',
  localField: '_id',
});
postSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'comments',
    select: '-_id -__v',
  }).populate({
    path: 'likes',
    select: 'user -post -_id ',
  });
  next();
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
