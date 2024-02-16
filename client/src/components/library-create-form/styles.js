import styled from 'styled-components';

export const StyledDragDropDiv = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border-width: 2px;
	border-radius: 2px;
	border-color: #eeeeee;
	border-style: dashed;
	background-color: #fafafa;
	color: #bdbdbd;
	outline: none;
	transition: border 0.24s ease-in-out;

	&:focus {
		border-color: #2196f3;
	}
	&:hover {
		background-color: #ececec;
		transition: background-color 0.5s ease-in-out;
	}
`;
