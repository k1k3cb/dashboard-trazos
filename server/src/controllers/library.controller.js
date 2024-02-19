const path = require('path');
const LibraryModel = require('../models/library.model');

const fsPromises = require('fs/promises');
const libraryController = {};

require('dotenv').config();
const { v2: cloudinary } = require('cloudinary');
cloudinary.config(process.env.CLOUDINARY_URL);

// Obtener todos los items
libraryController.getAllItems = async (req, res) => {
	try {
		const allItems = await LibraryModel.find();
		return res.status(200).send(allItems);
	} catch (err) {
		return res.status(500).send({ error: 'Error reading database.' + err });
	}
};

// Obtener item por id
libraryController.getItemById = async (req, res) => {
	const { id } = req.params;
	try {
		const item = await LibraryModel.findById(id);
		if (!item) return res.status(409).send({ error: 'Item not Exists' });
		return res.status(200).send(item);
	} catch (err) {
		return res.status(500).send({ error: 'Error reading database.' + err });
	}
};

// Crear un item nuevo
libraryController.createItem = async (req, res) => {
	// subir imágenes
	console.log(req.files);
	try {
		if (!req.files || Object.keys(req.files).length === 0) {
			return res.status(400).send({ error: 'No files were uploaded.' });
		}

		const photo = req.files.mainImage;

		const uploadPath = path.join(__dirname, '../uploads', photo.name);

		await photo.mv(uploadPath);

		const nameForCloudinary = path.parse(photo.name).name;

		const restultUpload = await cloudinary.uploader.upload(uploadPath, {
			public_id: nameForCloudinary
		});

		console.log('restultUpload',restultUpload)

		fsPromises.unlink(uploadPath);

		res.status(201).send({ url: restultUpload.secure_url });
	} catch (error) {
		console.error('Error uploading file:', error);
		res.status(500).send(error.message || 'Internal Server Error');
	}

	//crear item
	const {
		title,
		author,
		arrangement,
		editorial,
		formats,
		difficulty,
		mainImage,
		galleryImages
	} = req.body;
	if (!title || !author || !formats) {
		return res.status(400).send({ error: 'Bad request.' });
	}

	try {
		const newItem = new LibraryModel({
			title,
			author,
			arrangement,
			editorial,
			formats,
			difficulty,
			mainImage:restultUpload,
			galleryImages
		});

		await newItem.save();

		const allItems = await LibraryModel.find();
		return res.status(200).send(allItems);
	} catch (err) {
		return res.status(500).send({ error: 'Error reading database.' + err });
	}
};

libraryController.updateItem = async (req, res) => {
	const { id } = req.params;
	try {
		const item = await LibraryModel.findById(id);

		if (!item) {
			return res.status(409).send({ error: 'Item not Exists' });
		}

		await LibraryModel.updateOne({ _id: id }, { $set: { ...req.body } });

		const allItems = await LibraryModel.find();
		return res.status(200).send(allItems);
	} catch (err) {
		return res.status(500).send({ error: 'Error reading database.' + err });
	}
};

libraryController.deleteItem = async (req, res) => {
	const { id } = req.params;

	try {
		const item = await LibraryModel.findById(id);

		if (!item) return res.status(409).send({ error: 'Item not Exists' });

		await LibraryModel.deleteOne({ _id: id });

		const allItems = await LibraryModel.find();
		return res.status(200).send(allItems);
	} catch (err) {
		return res.status(500).send({ error: 'Error reading database.' + err });
	}
};

// controlador subir imágenes
libraryController.uploadImage = async (req, res) => {
	console.log(req.files);
	try {
		if (!req.files || Object.keys(req.files).length === 0) {
			return res.status(400).send({ error: 'No files were uploaded.' });
		}

		const photo = req.files.photo;

		const uploadPath = path.join(__dirname, '../uploads', photo.name);

		await photo.mv(uploadPath);

		const nameForCloudinary = path.parse(photo.name).name;

		const restultUpload = await cloudinary.uploader.upload(uploadPath, {
			public_id: nameForCloudinary
		});

		fsPromises.unlink(uploadPath);

		res.status(201).send({ url: restultUpload.secure_url });
	} catch (error) {
		console.error('Error uploading file:', error);
		res.status(500).send(error.message || 'Internal Server Error');
	}
};

module.exports = libraryController;
