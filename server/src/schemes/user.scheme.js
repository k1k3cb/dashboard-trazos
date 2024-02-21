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
			unique: true,
			trim: true
		},
		password: {
			type: String,
			
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
			default: true
		}
	},
	{
		timestamps: true,
		collection: 'users'
	}
);
// Define el gancho (hook) pre-save para establecer el valor predeterminado del username
UserScheme.pre('save', function (next) {
	if (!this.username) {
		// Si el username no está definido, establece su valor como el mismo que el email
		this.username = this.email;
	}
	next();
});

module.exports = UserScheme;
