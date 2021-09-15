const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A user must have a name'],
      unique: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
userSchema.virtual('posts', {
  ref: 'Post',
  foreignField: 'user',
  localField: '_id',
});
userSchema.pre(/^findOne/, function (next) {
  this.populate({
    path: 'posts',
  });
  next();
});
const User = mongoose.model('User', userSchema);
module.exports = User;
