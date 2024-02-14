import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Dashboard from '../pages/dashboard/Dashboard';
import LibraryNewItem from '../pages/library/library-new-item/LibraryNewItem';

// const user = false;
const ProtectedRoute = () => {
	// if (!user) return <Navigate to='/'  replace/>;

	return (
		<Routes>
			<Route path='/dashboard' element={<Layout />}>
				<Route index element={<Dashboard />} />
				<Route
					path='/dashboard/library/new-item'
					element={<LibraryNewItem />}
				/>
			</Route>
		</Routes>
	);
};

export default ProtectedRoute;
