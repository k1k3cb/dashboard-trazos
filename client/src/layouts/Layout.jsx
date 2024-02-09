import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import NavBar from '../components/nav-bar/NavBar';
import SideBar from '../components/side-bar/SideBar';

const Layout = () => {
	return (
		<>
			<NavBar />
			<SideBar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
