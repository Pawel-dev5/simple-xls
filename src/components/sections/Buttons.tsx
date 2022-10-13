import { useContext } from 'react';

// CONTEXT
import { ContextData } from 'components/hooks/useExcel';

// COMPONENTS
import { Button } from 'components/items';

// STYLES
import { StyledButtonWrapper, StyledCounter, StyledCountersWrapper, StyledButtons } from 'components/sections/Styles';

// MODELS
import { HandlerTypes } from 'components/models/hooks';

export const Buttons = () => {
	const { row, col, handleRow, handleCol } = useContext(ContextData);

	return (
		<StyledButtons>
			<StyledButtonWrapper>
				<span>Columns: </span>
				<StyledCountersWrapper>
					<Button disabled={col === 1} onClick={() => handleCol(HandlerTypes.DELETE)} icon="-" />
					<StyledCounter>{col}</StyledCounter>
					<Button onClick={() => handleCol(HandlerTypes.ADD)} icon="+" />
				</StyledCountersWrapper>
			</StyledButtonWrapper>

			<StyledButtonWrapper>
				<span>Rows: </span>
				<StyledCountersWrapper>
					<Button disabled={row === 1} onClick={() => handleRow(HandlerTypes.DELETE)} icon="-" />
					<StyledCounter>{row}</StyledCounter>
					<Button onClick={() => handleRow(HandlerTypes.ADD)} icon="+" />
				</StyledCountersWrapper>
			</StyledButtonWrapper>
		</StyledButtons>
	);
};
