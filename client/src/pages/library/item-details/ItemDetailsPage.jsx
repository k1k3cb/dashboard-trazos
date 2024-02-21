import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URLS } from '../../../constants/urls';
import { deleteData, getData } from '../../../utils/api/common.api';

const ItemDetailsPage = () => {
	const { id } = useParams();

	const [item, setItem] = useState();

	const navigate = useNavigate();

	useEffect(() => {
		getItem(id, setItem);
	}, []);

	if (!item) return <h1>Loading Item...</h1>;

	const { title, author } = item;

	return (
		<>
			<Link to='/dashboard/library'>Home</Link>
			<Link to={`/dashboard/library/edit-item/${id}`}>
				Edit
			</Link>

			<button onClick={() => deleteItem(id, navigate)}>Delete</button>
			<div>
				<p>
					<span>Título: </span>
					{title}
				</p>
				<p>
					<span>Autor: </span>
					{author}
				</p>
			</div>
		</>
	);
};

const getItem = async (id, setItem) => {
	const itemData = await getData(`${URLS.API_LIBRARY}/${id}`);
	setItem(itemData);
};

const deleteItem = async (id, navigate) => {
	await deleteData(`${URLS.API_LIBRARY}/${id}`);
	navigate('/dashboard/library');
};

export default ItemDetailsPage;
