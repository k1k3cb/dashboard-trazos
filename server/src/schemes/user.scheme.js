
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
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            default: false
        },
        color: {
            type: String
        }
    },
    {
        timestamps: true,
        collection: 'users'
    }
);

module.exports = UserScheme;
// como hago con los roles(superadmin, admin, user, socio, alumno, library - editor), una collection tb ?

// como hago con las caractristicas de los users, cada uhno tiene unas caracteristicas?