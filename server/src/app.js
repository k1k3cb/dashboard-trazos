const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Rutas
const { corsOptions } = require('./config/cors.config');
const libraryRoutes = require('./routes/library.routes');
const { databaseConnect } = require('./database/database');

// Middlewares para cliente

// Opciones avanzadas de configuración de CORS
app.use(cors(corsOptions));
app.use(express.json());

// Uso de rutas
app.use('/api/library', libraryRoutes);

const startServer = async () => {
  databaseConnect();
  app.listen(3000, () =>
    console.log('Servidor en ejecución en el puerto 3000')
  );
};

startServer();
