const factory = require('./controllerHandlersFactory');
const Post = require('../models/postModel');

exports.getAllPosts = factory.getAll(Post);
exports.getAPost = factory.getOne(Post);
exports.createAPost = factory.createOne(Post);
