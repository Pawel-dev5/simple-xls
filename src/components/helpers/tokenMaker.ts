export const tokenMaker = (length: number) => {
	let string = '';
	const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 1; i <= length ?? 10; i += 1) {
		string += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return string;
};
