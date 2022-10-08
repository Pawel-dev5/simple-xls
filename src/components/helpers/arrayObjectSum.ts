import { GridObjectInterface } from 'components/models/hooks';

export const arrayObjectSum = (arr: GridObjectInterface[]) =>
	arr?.reduce((accumulator: number, object: { value: number }) => accumulator + object.value, 0);
