const express = require('express');
const libraryRoutes = express.Router();
const libraryController = require('../controllers/library.controller');

// Obtener todos los items
libraryRoutes.get('/', libraryController.getAllItems);

// Obtener item por id
libraryRoutes.get('/:id', libraryController.getItemById);

// Crear un item
libraryRoutes.post('/', libraryController.createItem);

// Actualizar un item
libraryRoutes.patch('/:id', libraryController.updateItem);

// Eliminar un item
libraryRoutes.delete('/:id', libraryController.deleteItem);

// Subir imagen
libraryRoutes.post('/upload', libraryController.uploadImage);

module.exports = libraryRoutes;
