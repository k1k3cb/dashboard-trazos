import { Link } from 'react-router-dom';
import LibraryEditForm from '../../../components/library-edit-form/LibraryEditForm';

const ItemEditPage = () => {
	return (
		<>
			<h2>Edit Item</h2>
			<LibraryEditForm />
			<form action=''>
				<Link to='ir a pagina anterior'>
					<button type='button'>Cancelar</button>
				</Link>
				<button type='submit'>Guardar</button>
			</form>
		</>
	);
};

export default ItemEditPage;
