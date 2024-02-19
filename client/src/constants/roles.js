import { v4 } from 'uuid';

export const USER_ROLES = [
	{ id: v4(), name: 'Admin' },
	{ id: v4(), name: 'Editor biblioteca' },
	{ id: v4(), name: 'Editor inventario' },
	{ id: v4(), name: 'Alumno' },
	{ id: v4(), name: 'Profesor' }
];
