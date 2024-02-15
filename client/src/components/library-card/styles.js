import styled from 'styled-components';

export const StyledCard = styled.div`
	width: 300px;
	height: 200px;
	background: #fff;
	display: flex;
	flex-direction: row;
	border-radius: 25px;
	box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
	overflow: hidden;
`;

export const StyledLeftColumn = styled.div`
	min-width: 100px;
`;

export const StyledRightColumn = styled.div`
	flex-grow: 1;
	padding: 1.5em;
`;

export const StyledImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: left;
`;
export const StyledAuthorDiv = styled.div`
	text-align: end;
	margin-bottom: 10px;
`;
export const StyledDesc = styled.p`
	font-size: 12px;
`;

export const StyledCategory = styled.span`
	background-color: gray;
	padding: 2px;
	margin-right: 2px;
	font-size: 12px;
	color: white;
	border-radius: 5px;
`;
