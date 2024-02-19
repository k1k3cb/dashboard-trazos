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
	const { title, author, arrangement, mainImage, formats } = item;
	console.log('formats', formats);
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

				{formats.map(format => (
					<StyledCategory key={format.id}>{format.name}</StyledCategory>
				))}

				<Link to=''>Ver</Link>
			</StyledRightColumn>
		</StyledCard>
	);
};

export default LibraryCard;
