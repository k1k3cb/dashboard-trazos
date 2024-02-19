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
			type: String,
			// defaultValue:'https://res.cloudinary.com/dssqr01no/image/upload/v1708349240/z3jyfjglwlahqsxdalp6.svg'
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
