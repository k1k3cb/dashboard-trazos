const { mongoose } = require('mongoose');

const UserScheme = mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      // crearla por defecto y cambiarla el primer inicio sesion
    },
    active: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
    role: {
      type: String,
    },
    firstLogin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: 'users',
  }
);

module.exports = UserScheme;
// como hago con los roles(superadmin, admin,  alumno, library - editor), una collection tb ?

// como hago con las caractristicas de los users, cada uhno tiene unas caracteristicas?
