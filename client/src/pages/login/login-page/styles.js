import styled from 'styled-components';

export const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	
`;

export const StyledLoginCard = styled.div`
	background-color: #fff;
	border-radius: 10px;
	box-shadow:
		0 14px 28px rgba(0, 0, 0, 0.25),
		0 10px 10px rgba(0, 0, 0, 0.22);
	width: 768px;
	max-width: 100%;
	min-height: 480px;
	display: flex;
	overflow: hidden;
`;

export const StyledLeftContent = styled.div`
	flex: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-inline: 50px;
	box-sizing: border-box;
`;

export const StyledRightContent = styled.div`
	flex: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #33242b;
`;

export const StyledFormFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const StyledForgot = styled.p`
	font-size: 14px;
`;

export const StyledSubmitBtn = styled.button`
	border-radius: 20px;
	border: 1px solid #da4b2d;
	background-color: #da4b2d;
	color: #ffffff;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	cursor: pointer;
`;

export const StyledImg = styled.img`
	/* border-radius: 50%; */
	width: 60%;
`;
