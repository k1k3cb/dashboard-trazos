import {
	StyledHeader,
	StyledImg,
	StyledInfo,
	StyledUserInfo,
	StyledUserName,
	StyledUserNameRole,
	StyledUserRole,
	StyledUserSpan
} from './styles';

const NavBar = () => {
	return (
		<StyledHeader>
			<h2>LOGO</h2>
			<StyledInfo>
				<i></i>
				<i>
					<img src='assets/icons/DarkMode.svg' alt='' />
				</i>
				<i></i>
				<StyledUserInfo>
					<StyledUserNameRole>
						<StyledUserName>Mark Lenders</StyledUserName>
						<StyledUserRole>Admin</StyledUserRole>
					</StyledUserNameRole>
					<StyledUserSpan>
						<StyledImg src='/assets/images/user-01.png' alt='' />
						<i>
							<img src='/assets/icons/ArrowDropDownLine.svg' alt='' />
						</i>
					</StyledUserSpan>
				</StyledUserInfo>
			</StyledInfo>
		</StyledHeader>
	);
};

export default NavBar;
