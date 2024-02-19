import { useEffect, useState } from 'react';
import LibraryCard from '../../../components/library-card/LibraryCard';
import { URLS } from '../../../constants/urls';
import { getAllData } from '../../../utils/api/common.api';
import { StyledGrid } from './styles';

const LibraryItemListPage = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		getAllItems(setItems);
	}, []);

	return (
		<>
			<h2>Library Items</h2>
			<StyledGrid>
				{items.map(item => (
					<LibraryCard key={item._id} {...item} />
				))}
			</StyledGrid>
		</>
	);
};

const getAllItems = async setItems => {
	const allItems = await getAllData(URLS.API_LIBRARY);
	setItems(allItems);
};

export default LibraryItemListPage;
