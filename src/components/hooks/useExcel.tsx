import { useEffect, useState } from 'react';

export const useExcel = () => {
	const [row, setRow] = useState(3);
	const [col, setCol] = useState(3);
	const [rows, setRows] = useState<number[]>([]);
	const [cols, setCols] = useState<number[]>([]);

	const generateGrid = () => {
		rows.length = 0;
		cols.length = 0;
		for (let i = 0; i < row; i++) {
			rows.push(i);
		}
		for (let j = 0; j < col; j++) {
			cols.push(j);
		}
		setRows(() => [...rows]);
		setCols(() => [...cols]);
	};

	useEffect(() => {
		generateGrid();
	}, [row, col]);

	return {
		row,
		rows,
		col,
		cols,
		setRow,
		setCol,
	};
};
