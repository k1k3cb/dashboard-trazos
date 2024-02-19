import { Link } from 'react-router-dom';
import {
	StyledAuthorDiv,
	StyledCard,
	StyledCategory,
	StyledDesc,
	StyledImg,
	StyledLeftColumn,
	StyledRightColumn
} from './styles';

const LibraryCard = ({ ...item }) => {
	const { _id, title, author, arrangement, mainImage, formats } = item;
	console.log('item', item);
	return (
		<StyledCard>
			<StyledLeftColumn>
				<StyledImg src={mainImage} alt='' />
			</StyledLeftColumn>
			<StyledRightColumn>
				<StyledAuthorDiv>
					<h5>{author}</h5>
					{arrangement && <h6>{arrangement}</h6>}
				</StyledAuthorDiv>

				<h4>{title}</h4>

				<StyledDesc>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sit.
				</StyledDesc>
				<div>
					{formats.map(format => (
						<StyledCategory key={format.id}>{format.name}</StyledCategory>
					))}
				</div>

				<Link to={`/dashboard/library/${_id}`}>Ver</Link>
			</StyledRightColumn>
		</StyledCard>
	);
};

export default LibraryCard;
