import styled from 'styled-components';
import { SIZE } from '../styles/sizes';

export const StyledFlex = styled.div`
	display: flex;
	height: calc(100vh - ${SIZE.header});
`;

export const StyledContentSpace = styled.div`
	padding: 50px;
	width: 100%;
`;
