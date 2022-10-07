import { ReactNode } from 'react';

export interface ContextProviderProps {
	children?: ReactNode | ReactNode[] | null;
}

export interface GridObjectInterface {
	position: string;
	value: number;
}
