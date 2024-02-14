import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAside = styled.aside`
	min-width: 260px;
	max-width: 30vw;
	padding: 50px 1.25rem;
	background-color: brown;
	color: white;
`;

export const StyledLinkTitle = styled(Link)`
	display: flex;
	gap: 1rem;
	margin-bottom: 20px;
`;

export const StyledTitleDiv = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	width: 80%;
`;

// padding: 9px 15px;
