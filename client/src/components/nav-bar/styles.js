import styled from 'styled-components';

export const StyledHeader = styled.header`
	width: 100%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-inline: 1.25rem;
    filter: drop-shadow(0px 1px 0px #e2e8f0);
`;

export const StyledInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const StyledUserInfo = styled.div`
	display: flex;
	gap: 1rem;
`;
export const StyledUserNameRole = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: center;
`;

export const StyledUserName = styled.h5`
	margin: 0;
`;
export const StyledUserRole = styled.h6`
	margin: 0;
`;

export const StyledUserSpan = styled.span`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const StyledImg = styled.img`
	width: 3rem;
	height: auto;
`;
