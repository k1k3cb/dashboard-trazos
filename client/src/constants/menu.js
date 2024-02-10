import { v4 } from 'uuid';

export const SIDENAV_ITEMS = [
	{
		id: v4(),
		title: 'Dashboard',
		icon: '',
		path: '/dashboard',
		subMenus: []
	},
	{
		id: v4(),
		title: 'usuarios',
		icon: '',
		path: '',
		subMenus: [
			{
				name: 'create',
				icon: '',
				path: ''
			}
		]
	},
	{
		id: v4(),
		title: 'Biblioteca',
		icon: '',
		path: '',
		subMenus: [
			{
				name: 'create',
				icon: '',
				path: ''
			}
		]
	},
	{
		id: v4(),
		title: 'Inventario',
		icon: '',
		path: '',
		subMenus: [
			{
				name: 'create',
				icon: '',
				path: ''
			}
		]
	},
	{
		id: v4(),
		title: 'Tareas',
		icon: '',
		path: '',
		subMenus: [
			{
				name: 'create',
				icon: '',
				path: ''
			}
		]
	}
];
