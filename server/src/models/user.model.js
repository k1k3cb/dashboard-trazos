const mongoose = require('mongoose');
const UserScheme = require('../schemes/user.scheme');

const UserModel = mongoose.model('users', UserScheme);

module.exports = UserModel;