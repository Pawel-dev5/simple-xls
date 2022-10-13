import { ReactNode } from 'react';

export enum HandlerTypes {
	ADD = 'ADD',
	DELETE = 'DELETE',
}

export interface ContextProviderProps {
	children?: ReactNode | ReactNode[] | null;
}

export interface GridObjectInterface {
	uuid: string;
	value: number;
}
