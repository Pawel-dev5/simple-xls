import { useContext } from 'react';

// CONTEXT
import { ContextData } from 'components/hooks/useExcel';

// COMPONENTS
import { Button } from 'components/items';

// STYLES
import { StyledButtonWrapper, StyledCounter } from 'components/sections/Styles';

export const Buttons = () => {
	const { row, setRow, col, setCol } = useContext(ContextData);

	return (
		<div>
			<StyledButtonWrapper>
				<span>Columns: </span>
				<div>
					<Button disabled={col === 1} onClick={() => setCol(col - 1)} icon="-" />
					<StyledCounter>{col}</StyledCounter>
					<Button onClick={() => setCol(col + 1)} icon="+" />
				</div>
			</StyledButtonWrapper>

			<StyledButtonWrapper>
				<span>Rows: </span>
				<div>
					<Button disabled={row === 1} onClick={() => setRow(row - 1)} icon="-" />
					<StyledCounter>{row}</StyledCounter>
					<Button onClick={() => setRow(row + 1)} icon="+" />
				</div>
			</StyledButtonWrapper>
		</div>
	);
};
