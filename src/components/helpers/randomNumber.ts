export const getRandomNumber = () => {
	const min = 1;
	const max = 999;
	return Math.floor(Math.random() * (max - min) + min);
};
