import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {


	return (
		<Routes>
			<Route path='/' element={<LoginPage />} />
			<Route path='/*' element={<ProtectedRoute />} />
		</Routes>
	);
};

export default Router;
