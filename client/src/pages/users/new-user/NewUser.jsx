import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { USER_ROLES } from '../../../constants/roles';
import { ROUTES } from '../../../constants/routes';
import { registerRequest } from '../../../utils/api/auth.api';

const NewUser = () => {
	const [isAdminChecked, setIsAdminChecked] = useState(false);

	const {
		handleSubmit,
		register,
		watch,
		formState: { errors }
	} = useForm({});
	const navigate = useNavigate();
	const password = useRef({});
	password.current = watch('password', '');
	return (
		<>
			<h3>New User</h3>
			<form
				onSubmit={handleSubmit(formData =>
					formSubmit(formData, navigate, handleAdminCheckboxChange)
				)}
			>
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
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						id='password'
						{...register('password', { required: true })}
					/>
				</div>
				<div>
					<label htmlFor='confirm-password'>Confirm Password:</label>
					<input
						type='password'
						id='confirm-password'
						{...register('confirmPassword', {
							required: true,
							validate: value =>
								value === password.current || 'Las contraseñas no coinciden'
						})}
					/>
				</div>
				{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

				<div>
					<label>Roles:</label>
					{USER_ROLES.map(rol => (
						<div key={rol.id}>
							<input
								type='checkbox'
								id={rol.id}
								value={rol.name}
								onClick={event =>
									handleAdminCheckboxChange(event, setIsAdminChecked)
								}
								disabled={rol.name !== 'Admin' && isAdminChecked}
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

//* Si selecciono el rol de admin se desabilitan los checkboxes de los otro roles
const handleAdminCheckboxChange = (event, setIsAdminChecked) => {
	if (event.target.value === 'Admin') {
		setIsAdminChecked(event.target.checked);
	}
};

const formSubmit = async (formData, navigate) => {
	// if (formData.password !== formData.confirmPassword) {
	// 	setPasswordError('Las contraseñas no coinciden');
	// } else {
	// 	setPasswordError('');
	// 	const roles = formData.roles.map(rol => ({ id: v4(), name: rol }));
	// 	const userData = { ...formData, roles };
	// 	console.log('userData', userData);

	// 	await registerRequest(userData);

	// 	navigate(`${ROUTES.DASHBOARD}/users`);
	// }

	const roles = formData.roles.map(rol => ({ id: v4(), name: rol }));
	const userData = { ...formData, roles };
	console.log('userData', userData);

	await registerRequest(userData);

	navigate(`${ROUTES.DASHBOARD}/users`);
};

export default NewUser;
