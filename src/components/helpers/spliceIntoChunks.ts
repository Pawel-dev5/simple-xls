// MODELS
import { GridObjectInterface } from 'components/models/hooks';

export const spliceIntoChunks = (arr: GridObjectInterface[], chunkSize: number) => {
	const res = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunkSize);
		res.push(chunk);
	}
	return res;
};
