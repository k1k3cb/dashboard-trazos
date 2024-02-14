const mongoose = require('mongoose');

const LibraryScheme = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    arrangement: {
      type: String,
      trim: true,
    },
    editorial: {
      type: String,
      trim: true,
    },

    format: {
      type: [String],
      required: true,
      enum: ['audio', 'digital', 'papel', ' video'],
    },
    difficulty: {
      type: [String],
      enum: [
        'muy fácil',
        'fácil',
        'medio',
        'difícil media',
        'difícil',
        'muy difícil',
      ],
    },
    mainImage: {
      type: String,
    },
    galleryImages: {
      type: [String],
    },
  },
  {
    timestamps: true,
    collection: 'libraryItems',
  }
);

module.exports = LibraryScheme;
