import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Dashboard from '../pages/dashboard/Dashboard';

const ProtectedRoute = () => {
	return (
		<Routes>
			<Route path='/dashboard' element={<Layout />}>
				<Route index element={<Dashboard />} />
			</Route>
		</Routes>
	);
};

export default ProtectedRoute;
