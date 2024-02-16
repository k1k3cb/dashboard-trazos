import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LIBRARY_ITEMS_FORMATS } from '../../constants/library-items-format';
import { URLS } from '../../constants/urls';
import { createData } from '../../utils/api/common.api';

import { useDropzone } from 'react-dropzone';
import { StyledDragDropDiv } from './styles';

const LibraryCreateForm = () => {
	const [libraryItem, setLibraryItem] = useState({});

	const onDrop = useCallback(acceptedFiles => {
		console.log('acceptedFiles', acceptedFiles[0]);
	}, []);
	const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
		useDropzone({ onDrop });
	const {
		handleSubmit,
		register

		// formState: { errors }
	} = useForm();
	const navigate = useNavigate();

	return (
		<form
			onSubmit={handleSubmit(data =>
				formSubmit(data, navigate, setLibraryItem, acceptedFiles)
			)}
		>
			<div>
				<label htmlFor='title'>Título:</label>
				<input
					type='text'
					name='title'
					id='title'
					{...register('title', {
						required: true
					})}
				/>
			</div>

			<div>
				<label htmlFor='author'>Autor/compositor:</label>
				<input
					type='text'
					name='author'
					id='author'
					{...register('author', { required: true })}
				/>
			</div>

			<div>
				<label>Formato:</label>
				{LIBRARY_ITEMS_FORMATS.map(format => (
					<div key={format.id}>
						<input
							type='checkbox'
							id={format.id}
							name='format'
							value={format.name}
							{...register('format', { required: true })}
						/>
						<label htmlFor={format.id}>{format.name}</label>
					</div>
				))}
			</div>
			<div>
				<label>Imagen principal:</label>
				<StyledDragDropDiv {...getRootProps()}>
					<input {...getInputProps()} />

					<p>Selecciona o arrastra un archivo aquí</p>
				</StyledDragDropDiv>
				
				{acceptedFiles[0] && (
					<img src={URL.createObjectURL(acceptedFiles[0])} alt='' />
				)}
			</div>

			<button type='submit'>Crear</button>
		</form>
	);
};

const formSubmit = async (data, navigate, setLibraryItem, acceptedFiles) => {
	console.log('data', data);
	// const libraryData = { ...data };
	const LibraryItems = await createData(URLS.API_LIBRARY, { ...data });

	setLibraryItem(LibraryItems);
	navigate('/dashboard/library/items');
};

export default LibraryCreateForm;
