import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LibraryNewItem = () => {
	const {
		handleSubmit,
		register

		// formState: { errors }
	} = useForm();
	const navigate = useNavigate();
	return (
		<main>
			<h3>New Item</h3>
			<form
				onSubmit={handleSubmit(data => formSubmit(data, navigate, setUsers))}
			>
				<div>
					<label htmlFor='name'>Título:</label>
					<input
						type='text'
						name='title'
						id='title'
						{...register('title', { required: true })}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						id='email'
						{...register('email', { required: true })}
					/>
				</div>

				<div>
					<label htmlFor='username'>Username:</label>
					<input
						type='text'
						name='username'
						id='username'
						{...register('username', { required: true })}
					/>
				</div>

				<button type='submit'>Crear</button>
			</form>
		</main>
	);
};

const formSubmit = async (data, navigate, setUsers) => {
	const userData = { ...data };
	const users = await registerRequest({ ...userData });

	setUsers(users);
	// navigate('/');
};

export default LibraryNewItem;
