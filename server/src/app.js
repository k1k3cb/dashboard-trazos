const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const fileUpload = require('express-fileupload');
const app = express();

// Rutas
const { corsOptions } = require('./config/cors.config');
const libraryRoutes = require('./routes/library.routes');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const { databaseConnect } = require('./database/database');

// Middlewares para cliente
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(
	fileUpload({
		limits: { fileSize: 5 * 1024 * 1024 } // Establecer límite de 5 MB
	})
);

// Uso de rutas
app.use('/api/users', userRoutes);
app.use('/api/library', libraryRoutes);
app.use('/auth', authRoutes);

const startServer = async () => {
	databaseConnect();
	app.listen(3000, () =>
		console.log('Servidor en ejecución en el puerto 3000')
	);
};

startServer();
