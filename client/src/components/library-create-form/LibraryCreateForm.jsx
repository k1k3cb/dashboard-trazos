import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LIBRARY_ITEMS_FORMATS } from '../../constants/library-items-format';
import { URLS } from '../../constants/urls';
import { createData } from '../../utils/api/common.api';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 } from 'uuid';
import { StyledDragDropDiv } from './styles';

const LibraryCreateForm = () => {
	const onDrop = useCallback(acceptedFiles => {
		console.log('acceptedFiles', acceptedFiles);
	}, []);
	const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
		useDropzone({ onDrop, maxSize: 5 * 1024 * 1024, maxFiles: 1 });

	const {
		handleSubmit,
		register,
		watch

		// formState: { errors }
	} = useForm({});
	const navigate = useNavigate();

	return (
		<form
			onSubmit={handleSubmit(formData =>
				formSubmit(formData, navigate, acceptedFiles)
			)}
		>
			<div>
				<label htmlFor='title'>Título:</label>
				<input
					type='text'
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
					id='author'
					{...register('author', { required: true })}
				/>
			</div>

			<div>
				<label>Formatos:</label>
				{LIBRARY_ITEMS_FORMATS.map(format => (
					<div key={format.id}>
						<input
							type='checkbox'
							id={format.id}
							value={format.name}
							{...register('formats', { required: true })}
						/>
						<label htmlFor={format.id}>{format.name}</label>
					</div>
				))}
			</div>
			<div>
				<label>Imagen principal:</label>
				<StyledDragDropDiv {...getRootProps()}>
					<input {...getInputProps()} {...register('mainImage')} />
					{isDragActive ? (
						<p>Drop the files here ...</p>
					) : (
						<>
							<p>Selecciona o arrastra un archivo aquí</p>
							<em>
								(1 files are the maximum number of files you can drop here, 5MB
								max)
							</em>
						</>
					)}
				</StyledDragDropDiv>

				{acceptedFiles[0] && (
					<img src={URL.createObjectURL(acceptedFiles[0])} alt='' />
				)}
			</div>

			<button type='submit'>Crear</button>
			<pre>{JSON.stringify(watch(), null, 2)}</pre>
		</form>
	);
};

const formSubmit = async (formData, navigate, acceptedFiles) => {
	const formats = formData.formats.map(format => ({ id: v4(), name: format }));

	const libraryData = { ...formData, formats, mainImage: acceptedFiles[0] };
	console.log('libraryData', libraryData);

	await createData(URLS.API_LIBRARY, libraryData);

	navigate('/dashboard/library');
};

export default LibraryCreateForm;
