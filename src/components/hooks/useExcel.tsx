import { useEffect, useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

// MODELS
import { ContextProviderProps, GridObjectInterface } from 'components/models/hooks';

// HELPERS
import { spliceIntoChunks } from 'components/helpers/spliceIntoChunks';
import { getRandomNumber } from 'components/helpers/randomNumber';
import { arrayObjectSum, updateArray } from 'components/helpers/arrayHelpers';

export const useExcel = () => {
	const [allItemsCounter, setAllItemsCounter] = useState(0);
	const [row, setRow] = useState(3);
	const [col, setCol] = useState(3);
	const [gridArray, setGridArray] = useState<GridObjectInterface[]>([]);
	const [rowsResults, setRowsResults] = useState<GridObjectInterface[][]>([]);

	const generateNewObject = () => {
		const newValue: GridObjectInterface = {
			uuid: uuidv4(),
			value: getRandomNumber(),
		};
		return newValue;
	};

	const updateInputs = (item: GridObjectInterface) => {
		const newValues = updateArray(gridArray, item);
		setGridArray(newValues);
	};

	useEffect(() => setGridArray(Array.from({ length: col * row }, () => generateNewObject())), []);

	useEffect(() => {
		if (gridArray.length > 0) setGridArray([...gridArray, ...Array.from({ length: col }, () => generateNewObject())]);
	}, [row]);

	useEffect(() => {
		const newGridArray: GridObjectInterface[] = [];
		rowsResults.forEach((item) => {
			const newValue = [...item, generateNewObject()];
			newValue.forEach((i) => newGridArray.push(i));
		});
		if (newGridArray.length > 0) setGridArray(newGridArray);
	}, [col]);

	useEffect(() => {
		setRowsResults(spliceIntoChunks(gridArray, col));
		setAllItemsCounter(arrayObjectSum(gridArray));
	}, [gridArray]);

	return {
		row,
		col,
		gridArray,
		rowsResults,
		allItemsCounter,
		setRow,
		setCol,
		updateInputs,
	};
};

export const ContextData = createContext({} as ReturnType<typeof useExcel>);

export const ContextProvider = ({ children }: ContextProviderProps) => (
	<ContextData.Provider value={useExcel()}>{children}</ContextData.Provider>
);
