import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import NavBar from '../components/nav-bar/NavBar';
import SideBar from '../components/side-bar/SideBar';
import { StyledFlex } from './styles';

const Layout = () => {
	return (
		<>
			<NavBar />
			<StyledFlex>
				<SideBar />
				<Outlet />
			</StyledFlex>
			<Footer />
		</>
	);
};

export default Layout;
