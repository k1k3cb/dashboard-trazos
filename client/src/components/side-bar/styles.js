import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SIZE } from '../../styles/sizes';

export const StyledAside = styled.aside`
	min-width: ${SIZE.aside};
	max-width: 30vw;
	padding: 50px 1.25rem;
	background-color: brown;
	color: white;
`;

export const StyleTitle = styled.span`
	display: flex;
	gap: 1rem;
`;
export const StyledLinkTitle = styled(Link)`
	display: flex;
	gap: 1rem;
`;

export const StyledTitleDiv = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	width: 80%;
`;

export const StyledLi = styled.li`
	margin-bottom: 20px;
`;

export const StyledSubMenuUl = styled.ul`
	padding-left: 50px;
	list-style: circle;
`;


