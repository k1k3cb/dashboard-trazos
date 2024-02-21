import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Layout from '../layouts/Layout';
import Dashboard from '../pages/dashboard/Dashboard';
import ItemDetailsPage from '../pages/library/item-details/ItemDetailsPage';
import ItemEditPage from '../pages/library/item-edit/ItemEditPage';
import LibraryItemListPage from '../pages/library/items-list/LibraryItemListPage';
import LibraryNewItemPage from '../pages/library/library-new-item/LibraryNewItemPage';
import FirstLoginPage from '../pages/login/first-login/FirstLoginPage';
import NewUser from '../pages/users/new-user/NewUser';
import UserListPage from '../pages/users/users-list/UserListPage';

const ProtectedRoute = () => {
	const { userData, loading } = useContext(AuthContext);

	if (loading) return <h1>Loading...</h1>;
	if (!userData) return <Navigate to='/' replace />;

	return (
		<Routes>
			<Route path='/login-first-use/' element={<FirstLoginPage />} />
			<Route path='/dashboard' element={<Layout />}>
				<Route index element={<Dashboard />} />
				<Route path='/dashboard/library' element={<LibraryItemListPage />} />
				<Route
					path='/dashboard/library/new-item'
					element={<LibraryNewItemPage />}
				/>
				<Route path='/dashboard/library/:id' element={<ItemDetailsPage />} />
				<Route
					path='/dashboard/library/edit-item/:id'
					element={<ItemEditPage />}
				/>
				<Route path='/dashboard/users' element={<UserListPage />} />
				<Route path='/dashboard/users/new-user' element={<NewUser />} />
			</Route>
		</Routes>
	);
};

export default ProtectedRoute;
