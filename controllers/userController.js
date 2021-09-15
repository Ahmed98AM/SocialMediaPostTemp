const factory = require('./controllerHandlersFactory');
const User = require('../models/userModel');

exports.getAllUsers = factory.getAll(User);
exports.getAUser = factory.getOne(User);
exports.createAUser = factory.createOne(User);
