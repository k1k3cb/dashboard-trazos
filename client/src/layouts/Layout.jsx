import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav-bar/NavBar';
import SideBar from '../components/side-bar/SideBar';
import { StyledContentSpace, StyledFlex } from './styles';

const Layout = () => {
	return (
		<>
			<NavBar />
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
