import { v4 } from 'uuid';

const DASHBOARD = {
	title: 'Dashboard',
	icon: '/assets/icons/OutlinedDashBoard.svg',
	path: '/dashboard',
	subMenus: []
};

const USERS = {
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

export const SIDENAV_ITEMS = [
	{
		id: v4(),
		section: DASHBOARD
	},
	{
		id: v4(),
		section:USERS
	},
	{
		id: v4(),
		section:LIBRARY
	},
	{
		id: v4(),
		section:INVENTARY
	},
	{
		id: v4(),
		section:CALENDAR
	},
	{
		id: v4(),
		section:TASKS
	}
];
