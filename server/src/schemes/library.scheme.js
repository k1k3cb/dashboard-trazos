const mongoose = require('mongoose');

const LibraryScheme = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true
		},
		author: {
			type: String,
			required: true,
			trim: true
		},
		arrangement: {
			type: String,
			trim: true
		},
		editorial: {
			type: String,
			trim: true
		},

		format: {
			type: String,
			required: true,
			formats: Array
		},
		difficulty: {
			type: String,
			levels: Array
		},
		mainImage: {
			type: String
		},
		galleryImages: {
			type: Array
		}
	},
	{
		timestamps: true,
		collection: 'libraryItems'
	}
);

module.exports = LibraryScheme;
