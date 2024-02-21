import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../pages/login/login-page/LoginPage';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<LoginPage />} />
			<Route path='/*' element={<ProtectedRoute />} />
		</Routes>
	);
};

export default Router;
