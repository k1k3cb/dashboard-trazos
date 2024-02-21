import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { URLS } from '../../../constants/urls';
import { AuthContext } from '../../../contexts/AuthContext';
import { updateData } from '../../../utils/api/common.api';

const FirstLoginPage = () => {
	const { userData } = useContext(AuthContext);
	console.log('userData', userData);

	const {
		handleSubmit,
		register,
		watch
		// formState: { errors }
	} = useForm({});

	const navigate = useNavigate();

	return (
		<>
			<h1>FirstLoginPage</h1>
			<form
				onSubmit={handleSubmit(formData =>
					formSubmit(formData, navigate, userData)
				)}
			>
				<div>
					<label htmlFor='name'>Nombre:</label>
					<input type='text' id='title' defaultValue={userData.name} disabled />
				</div>

				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='text'
						id='email'
						defaultValue={userData.email}
						disabled
					/>
				</div>

				<div>
					<label htmlFor='username'>username:</label>
					<input
						type='text'
						id='username'
						defaultValue={userData.username}
						{...register('username')}
					/>
				</div>

				<div>
					<label htmlFor='password'>new Password:</label>
					<input
						type='password'
						id='password'
						{...register('password', { required: true })}
					/>
				</div>
				<div>
					<label htmlFor='password'>Confirma elPassword:</label>
					<input
						type='password'
						id='confirm-password'
						{...register('confirmPassword')}
					/>
				</div>

				<Link to='/'>Cancelar</Link>
				<button>Guardar</button>
			</form>
			<pre>{JSON.stringify(watch(), null, 2)}</pre>
		</>
	);
};

const formSubmit = async (formData, navigate, userData) => {
	console.log(formData);
	await updateData(`${URLS.API_USERS}/${userData.id}`, formData);

	navigate('/dashboard');
};

export default FirstLoginPage;
