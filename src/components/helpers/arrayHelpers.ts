import { GridObjectInterface } from 'components/models/hooks';

export const arrayObjectSum = (arr: GridObjectInterface[]) =>
	arr?.reduce((accumulator: number, object: { value: number }) => accumulator + object.value, 0);

export const CheckIfArrayContainsString = (array: string[], string: string) => array?.includes(string);

export const findObjectInArray = <T, U extends keyof T>(array: T[], key: U, arg?: any) => {
	if (array?.length > 0) {
		let searchedObject = -1;

		if (key && arg) {
			searchedObject = array?.findIndex((item) => item[key] === arg);
		}
		if (key && !arg) {
			searchedObject = array?.findIndex((item) => item[key]);
		}
		if (searchedObject >= 0) {
			return array[searchedObject];
		}
	}

	return null;
};

export const checkArrayType = (arr: any[], type: string) => arr?.every((element) => typeof element === type);

export const updateArray = <T, U extends keyof T>(array: T[], value: T, key: U = 'uuid' as U) => {
	const newArray = array || [];

	// If array doesn't exist return newArray with value
	if (array?.length === 0) {
		newArray.push(value);
		return newArray;
	}

	// If array is typeof string[]
	if (checkArrayType(newArray, 'string') && typeof value === 'string') {
		if (CheckIfArrayContainsString(newArray as any, value)) return newArray;
		newArray.push(value);
		return newArray;
	}

	// If array is typeof obj[]
	const item = findObjectInArray(newArray, key, value[key]);
	if (item) {
		const updatedItems = newArray.map((arrayItem) => {
			if (arrayItem[key] !== item[key]) {
				// Since we only want to update one item, preserve all others as they are now
				return { ...arrayItem };
			}

			// Use the provided callback to create an updated item
			const itemData = { ...item };
			const updatedItem = Object.assign(itemData, value);
			return { ...updatedItem };
		});

		return updatedItems;
	}
	newArray.push(value);
	return newArray;
};
