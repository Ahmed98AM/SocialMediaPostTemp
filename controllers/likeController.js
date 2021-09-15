const factory = require('./controllerHandlersFactory');
const Like = require('../models/likeModel');

exports.getAllLikes = factory.getAll(Like);
exports.getALike = factory.getOne(Like);
exports.createALike = factory.createOne(Like);
