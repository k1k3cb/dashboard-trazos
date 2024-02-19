import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Dashboard from '../pages/dashboard/Dashboard';
import LibraryNewItem from '../pages/library/library-new-item/LibraryNewItem';
import LibraryItemList from '../pages/library/items-list/LibraryItemList';
import NewUser from '../pages/users/new-user/NewUser';

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
				<Route
					path='/dashboard/library'
					element={<LibraryItemList />}
				/>
					<Route
					path='/dashboard/users/new-user'
					element={<NewUser />}
				/>
			</Route>
		</Routes>
	);
};

export default ProtectedRoute;
