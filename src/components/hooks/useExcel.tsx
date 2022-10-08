import { useEffect, useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

// MODELS
import { ContextProviderProps, GridObjectInterface } from 'components/models/hooks';

// HELPERS
import { spliceIntoChunks } from 'components/helpers/spliceIntoChunks';
import { getRandomNumber } from 'components/helpers/randomNumber';
import { arrayObjectSum } from 'components/helpers/arrayObjectSum';

export const useExcel = () => {
	const [allItemsCounter, setAllItemsCounter] = useState(0);
	const [row, setRow] = useState(3);
	const [col, setCol] = useState(3);
	const [gridArray, setGridArray] = useState<GridObjectInterface[]>([]);
	const [rowsResults, setRowsResults] = useState<GridObjectInterface[][]>([]);

	const generateNewObject = () => {
		const newValue: GridObjectInterface = {
			position: uuidv4(),
			value: getRandomNumber(),
		};
		return newValue;
	};

	useEffect(() => setGridArray(Array.from({ length: col * row }, () => generateNewObject())), [row, col]);

	useEffect(() => {
		setRowsResults(spliceIntoChunks(gridArray, col));
		setAllItemsCounter(arrayObjectSum(gridArray));
	}, [gridArray]);

	return {
		row,
		col,
		gridArray,
		rowsResults,
		setRow,
		setCol,
		allItemsCounter,
	};
};

export const ContextData = createContext({} as ReturnType<typeof useExcel>);

export const ContextProvider = ({ children }: ContextProviderProps) => (
	<ContextData.Provider value={useExcel()}>{children}</ContextData.Provider>
);
