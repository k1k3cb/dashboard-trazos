import { v4 } from 'uuid';

const DASHBOARD = {
	id: v4(),
	title: 'Dashboard',
	icon: '/assets/icons/OutlinedDashBoard.svg',
	path: '/dashboard',
	subMenus: []
};

const USERS = {
	id: v4(),
	title: 'Usuarios',
	icon: '/assets/icons/User.svg',
	path: '',
	subMenus: [
		{
			id: v4(),
			name: 'new user',
			icon: '',
			path: '/dashboard/users/new-user'
		},
		{
			id: v4(),
			name: 'List',
			icon: '',
			path: '/dashboard/users'
		}
	]
};

const LIBRARY = {
	id: v4(),
	title: 'Biblioteca',
	icon: '/assets/icons/Library.svg',
	path: '',
	subMenus: [
		{
			id: v4(),
			name: 'new item',
			icon: '',
			path: '/dashboard/library/new-item'
		},
		{
			id: v4(),
			name: 'List',
			icon: '',
			path: '/dashboard/library'
		},
		{
			id: v4(),
			name: 'new Category',
			icon: '',
			path: ''
		}
	]
};

const INVENTARY = {
	id: v4(),
	title: 'Inventario',
	icon: '/assets/icons/Inventory.svg',
	path: '',
	subMenus: [
		{
			id: v4(),
			name: 'create',
			icon: '',
			path: ''
		}
	]
};

const CALENDAR = {
	id: v4(),
	title: 'Calendario',
	icon: '/assets/icons/Calendar.svg',
	path: '',
	subMenus: [
		{
			id: v4(),
			name: 'create',
			icon: '',
			path: ''
		}
	]
};

const TASKS = {
	id: v4(),
	title: 'Tareas',
	icon: '/assets/icons/Tasks.svg',
	path: '',
	subMenus: [
		{
			id: v4(),
			name: 'create',
			icon: '',
			path: ''
		}
	]
};

export const SIDENAV_ITEMS = {
	DASHBOARD,
	USERS,
	LIBRARY,
	INVENTARY,
	CALENDAR,
	TASKS
};
