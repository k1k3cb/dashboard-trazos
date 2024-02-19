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

		formats: {
			type: Array,
			required: true
		},
		
		difficulty: {
			type: String
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
