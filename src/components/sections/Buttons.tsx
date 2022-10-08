import { useContext } from 'react';

// CONTEXT
import { ContextData } from 'components/hooks/useExcel';

// COMPONENTS
import { Button } from 'components/items';

// STYLES
import { StyledButtonWrapper, StyledCounter, StyledCountersWrapper, StyledButtons } from 'components/sections/Styles';

export const Buttons = () => {
	const { row, setRow, col, setCol } = useContext(ContextData);

	return (
		<StyledButtons>
			<StyledButtonWrapper>
				<span>Columns: </span>
				<StyledCountersWrapper>
					<Button disabled={col === 1} onClick={() => setCol(col - 1)} icon="-" />
					<StyledCounter>{col}</StyledCounter>
					<Button onClick={() => setCol(col + 1)} icon="+" />
				</StyledCountersWrapper>
			</StyledButtonWrapper>

			<StyledButtonWrapper>
				<span>Rows: </span>
				<StyledCountersWrapper>
					<Button disabled={row === 1} onClick={() => setRow(row - 1)} icon="-" />
					<StyledCounter>{row}</StyledCounter>
					<Button onClick={() => setRow(row + 1)} icon="+" />
				</StyledCountersWrapper>
			</StyledButtonWrapper>
		</StyledButtons>
	);
};
