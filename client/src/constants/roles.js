import { v4 } from 'uuid';

export const USER_ROLES_LIST = [
	{ id: v4(), name: 'Admin' },
	{ id: v4(), name: 'Editor biblioteca' },
	{ id: v4(), name: 'Editor inventario' },
	{ id: v4(), name: 'Alumno' },
	{ id: v4(), name: 'Profesor' }
];

export const USER_ROLES = {
	ADMIN: 'Admin',
	LIBRARY_EDITOR: 'Editor biblioteca',
	INVENTARY_EDITOR: 'Editor inventario',
	STUDENT: 'Alumno',
	TEACHER: 'Profesor'
};
