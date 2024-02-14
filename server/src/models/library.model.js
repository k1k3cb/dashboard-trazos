const mongoose = require('mongoose');
const LibraryScheme = require('../schemes/library.scheme');

const LibraryModel = mongoose.model('libraryItems', LibraryScheme);

module.exports = LibraryModel;
