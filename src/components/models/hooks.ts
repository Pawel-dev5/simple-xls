import { ReactNode } from 'react';

export interface ContextProviderProps {
	children?: ReactNode | ReactNode[] | null;
}

export interface GridObjectInterface {
	uuid: string;
	value: number;
}
