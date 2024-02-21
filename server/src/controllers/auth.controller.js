const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const createAccessToken = require('../utils/jwt');
const TOKEN_SECRET = require('../config/token.config');

const authController = {};

authController.login = async (req, res) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let redirect = '/dashboard';

	try {
		const { credential, password } = req.body;

		const userCredentialEmail = emailRegex.test(credential);
		let userFound;

		if (userCredentialEmail) {
			userFound = await UserModel.findOne({ email: credential });
		} else {
			userFound = await UserModel.findOne({ username: credential });
		}

		if (password === '123') {
			redirect = '/login-first-use';
		}

		if (!userFound)
			return res.status(400).send({
				error: 'The email does not exist'
			});

		const isMatch = await bcrypt.compare(password, userFound.password);

		if (!isMatch) {
			return res.status(400).send({
				error: 'The password is incorrect'
			});
		}

		const token = await createAccessToken({
			_id: userFound._id,
			username: userFound.username
		});

		res.cookie('token', token);
		return res.send({
			id: userFound._id,
			name: userFound.name,
			username: userFound.username,
			email: userFound.email,
			active: userFound.active,
			roles: userFound.roles,
			redirect
		});
	} catch (error) {
		return res.status(500).send({ error: error.message });
	}
};

authController.register = async (req, res) => {
	const { name, email, password, roles } = req.body;

	try {
		// Generar un hash de la contraseña
		const saltRounds = 10; // Número de rondas de sal para la encriptación
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		const newUser = new UserModel({
			name,
			email,
			roles,
			active: true,
			password: hashedPassword // Guarda la contraseña encriptada en la base de datos
		});

		await newUser.save();
		res.status(201).send({ message: 'User registered' });
	} catch (error) {
		console.error('Error al registrar al usuario:', error);
		res.status(500).send({ error: 'Error al registrar al usuario' });
	}
};

authController.verifyToken = async (req, res) => {
	const { token } = req.cookies;
	if (!token) return res.status(401).send({ message: 'Not Token' });

	try {
		const user = jwt.verify(token, TOKEN_SECRET);
		const userFound = await UserModel.findById(user._id);

		if (!userFound) {
			return res.status(404).json({ message: 'User not found' });
		}

		return res.status(200).json({
			id: userFound._id,
			name: userFound.name,
			username: userFound.username,
			email: userFound.email,
			active: userFound.active,
			roles: userFound.roles
		});
	} catch (err) {
		return res.status(500).json({ error: err });
	}
};

module.exports = authController;
