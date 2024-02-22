import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { logoutUser } from '../../utils/api/auth.api';
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
	const { userData, setUserData, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<StyledHeader>
			<h2>LOGO</h2>
			<StyledInfo>
				<img src='assets/icons/DarkMode.svg' alt='' />

				<StyledUserInfo>
					<button onClick={() => logoutUser(setUserData, navigate)}>
						LOG OUT
					</button>
					<StyledUserNameRole>
						<StyledUserName>{userData.name}</StyledUserName>
						<StyledUserRole>role</StyledUserRole>
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
