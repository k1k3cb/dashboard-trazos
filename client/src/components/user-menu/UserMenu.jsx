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

const UserMenu = () => {
	return (
		<StyledHeader>
			<h2>LOGO</h2>
			<StyledInfo>
				<img src='assets/icons/DarkMode.svg' alt='' />

				<StyledUserInfo>
					<StyledUserNameRole>
						<StyledUserName>Mark Lenders</StyledUserName>
						<StyledUserRole>Admin</StyledUserRole>
					</StyledUserNameRole>
					<StyledUserSpan>
						<StyledImg src='/assets/images/user-01.png' alt='' />
						<img src='/assets/icons/ArrowDropDownLine.svg' alt='' />
					</StyledUserSpan>
				</StyledUserInfo>
			</StyledInfo>
		</StyledHeader>
	);
};

export default UserMenu;
