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
			type: Array,
			required: true
		},
		difficulty: {
			type: String
		},
		mainImage: {
			type: String,
			default: 'public/assets/images/no-image-available.svg'
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
