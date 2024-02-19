import CardBody from '../../../components/UI/card-body/CardBody';

import LibraryCreateForm from '../../../components/library-create-form/LibraryCreateForm';

const LibraryNewItem = () => {
	return (
		<>
			<h3>New Item</h3>
			<CardBody>
				<LibraryCreateForm />
			</CardBody>
		</>
	);
};

export default LibraryNewItem;
