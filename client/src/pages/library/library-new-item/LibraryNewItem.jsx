import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CardBody from '../../../components/UI/card-body/CardBody';
import { FORM_VALIDATIONS } from '../../../constants/form-validations';

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
			<CardBody>
				<form
					onSubmit={handleSubmit(data => formSubmit(data, navigate, setUsers))}
				>
					<div>
						<label htmlFor='title'>Título:</label>
						<input
							type='text'
							name='title'
							id='title'
							{...register('title', {
								...FORM_VALIDATIONS.NAME,
								required: true
							})}
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
			</CardBody>
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
