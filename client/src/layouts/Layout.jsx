import { Outlet } from 'react-router-dom';

import SideBar from '../components/side-bar/SideBar';
import UserMenu from '../components/user-menu/UserMenu';
import { StyledContentSpace, StyledFlex } from './styles';

const Layout = () => {
	return (
		<>
			<UserMenu />
			<StyledFlex>
				<SideBar />
				<StyledContentSpace>
					<Outlet />
				</StyledContentSpace>
			</StyledFlex>
		</>
	);
};

export default Layout;
