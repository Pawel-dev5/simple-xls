/* eslint-disable @typescript-eslint/no-unused-vars */
// HOOKS
import { tokenMaker } from 'components/helpers/tokenMaker';
import { useExcel } from 'components/hooks/useExcel';

import { StyledGrid } from 'components/Styles';

export const Excel = () => {
	const { row, setRow, col, setCol, rows, cols } = useExcel();
	const tmp = Array(col * row);
	return (
		<div>
			<div>
				<button type="button" onClick={() => setCol(col + 1)}>
					+
				</button>
				<span>Columns: {col}</span>
				<button type="button" onClick={() => setCol(col - 1)}>
					-
				</button>
			</div>
			<br />
			<div>
				<button type="button" onClick={() => setRow(row + 1)}>
					+
				</button>
				<span>Rows: {row}</span>
				<button type="button" onClick={() => setRow(row - 1)}>
					-
				</button>
			</div>
			<br />
			<br />
			<br />
			<StyledGrid col={col} row={row}>
				{[...Array(col * row)].map((index) => (
					<span className="busterCards" key={tokenMaker(9)}>
						1
					</span>
				))}
			</StyledGrid>
		</div>
	);
};
