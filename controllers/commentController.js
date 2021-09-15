const factory = require('./controllerHandlersFactory');
const Comment = require('../models/commentModel');

exports.getAllComments = factory.getAll(Comment);
exports.getAComment = factory.getOne(Comment);
exports.createAComment = factory.createOne(Comment);
