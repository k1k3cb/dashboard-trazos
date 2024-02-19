import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { USER_ROLES } from '../../../constants/roles';
import { URLS } from '../../../constants/urls';
import { createData } from '../../../utils/api/common.api';

const NewUser = () => {
	const {
		handleSubmit,
		register,
		watch

		// formState: { errors }
	} = useForm({});
	const navigate = useNavigate();

	return (
		<>
			<h3>New User</h3>
			<form onSubmit={handleSubmit(formData => formSubmit(formData, navigate))}>
				<div>
					<label htmlFor='name'>Nombre:</label>
					<input
						type='text'
						id='name'
						{...register('name', {
							required: true
						})}
					/>
				</div>

				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						{...register('email', { required: true })}
					/>
				</div>

				<div>
					<label>Roles:</label>
					{USER_ROLES.map(rol => (
						<div key={rol.id}>
							<input
								type='checkbox'
								id={rol.id}
								value={rol.name}
								{...register('roles', { required: true })}
							/>
							<label htmlFor={rol.id}>{rol.name}</label>
						</div>
					))}
				</div>

				<button type='submit'>Crear</button>
				<pre>{JSON.stringify(watch(), null, 2)}</pre>
			</form>
		</>
	);
};

const formSubmit = async (formData, navigate) => {
	console.log('formData', formData);
	const roles = formData.roles.map(rol => ({ id: v4(), name: rol }));

	const userData = { ...formData, roles };
	console.log('userData', userData);

	await createData(URLS.API_USERS, userData);

	navigate('/dashboard/users');
};

export default NewUser;
