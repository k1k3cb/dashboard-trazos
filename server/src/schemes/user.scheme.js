const { mongoose } = require('mongoose');

const UserScheme = mongoose.Schema(
	{
		image: {
			type: String
		},
		name: {
			type: String,
			required: true,
			trim: true
		},

		email: {
			type: String,
			required: true,
			unique: true
		},
		username: {
			type: String,
			// required: true,
			unique: true,
			trim: true
		},
		password: {
			type: String,
			// required: true,
			default: '123'
			// crearla por defecto y cambiarla el primer inicio sesion
		},
		active: {
			type: Boolean
		},

		roles: {
			type: Array,
			required: true
		},
		firstLogin: {
			type: Boolean,
			default: false
		}
	},
	{
		timestamps: true,
		collection: 'users'
	}
);

module.exports = UserScheme;
