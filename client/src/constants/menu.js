import { v4 } from 'uuid';

// poner permisos de los roles?
//  path de forma dinamica?

export const SIDENAV_ITEMS = [
	{
		id: v4(),
		title: 'usuarios',
		icon: '',
		path: '',
		submenu: true,
		subMenus: [
			{
				name: 'create',
				icon: '',
				path: ''
			}
		]
	},

	{
		title: 'Dashboard',
		links: [
			{
				name: 'ecommerce',
				icon: ''
			}
		]
	},

	{
		title: 'Pages',
		links: [
			{
				name: 'orders',
				icon: ''
			},
			{
				name: 'employees',
				icon: ''
			},
			{
				name: 'customers',
				icon: ''
			}
		]
	}
];
