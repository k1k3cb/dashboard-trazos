import { v4 } from 'uuid';

export const SIDENAV_ITEMS = [
	{
		id: v4(),
		title: 'Dashboard',
		icon: '/assets/icons/OutlinedDashBoard.svg',
		path: '/dashboard',
		subMenus: []
	},
	{
		id: v4(),
		title: 'Usuarios',
		icon: '/assets/icons/User.svg',
		path: '',
		subMenus: [
			{
				id: v4(),
				name: 'create',
				icon: '',
				path: ''
			}
		]
	},
	{
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
				path: '/dashboard/library/items'
			},
			{
				id: v4(),
				name: 'new Category',
				icon: '',
				path: ''
			}
		]
	},
	{
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
	},
	{
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
	},
	{
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
	}
];
