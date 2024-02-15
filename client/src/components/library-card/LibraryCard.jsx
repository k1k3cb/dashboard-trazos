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

const LibraryCard = () => {
	return (
		<StyledCard>
			<StyledLeftColumn>
				<StyledImg
					src='https://musicsheetcovers.s3.eu-west-3.amazonaws.com/couv53/668/HD0010111668.jpg'
					alt=''
				/>
			</StyledLeftColumn>
			<StyledRightColumn>
				<StyledAuthorDiv>
					<h5>Autor</h5>
					<h6>Arreglista</h6>
				</StyledAuthorDiv>

				<h4>LA LA LAND</h4>

				<StyledDesc>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sit.
				</StyledDesc>
				<div>
					<StyledCategory>Papel</StyledCategory>
					<StyledCategory> Digital</StyledCategory>
				</div>
				<Link to=''>Ver</Link>
			</StyledRightColumn>
		</StyledCard>
	);
};

export default LibraryCard;
