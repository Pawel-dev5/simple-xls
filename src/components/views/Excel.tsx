import { useContext } from 'react';

// CONTEXT
import { ContextProvider, ContextData } from 'components/hooks/useExcel';

// COMPONENTS
import { Buttons } from 'components/sections';
import { Input } from 'components/items';

// STYLES
import { StyledGrid, StyledExcel, StyledResultsGrid, StyledGridWrapper } from 'components/Styles';

// HELPERS
import { tokenMaker } from 'components/helpers/tokenMaker';
import { arrayObjectSum } from 'components/helpers/arrayObjectSum';

// MODELS
import { GridObjectInterface } from 'components/models/hooks';

export const ExcelWrapper = () => {
	const { row, col, gridArray, rowsResults, allItemsCounter } = useContext(ContextData);

	return (
		<StyledExcel>
			<Buttons />

			<StyledGridWrapper>
				<StyledGrid col={col} row={row}>
					{gridArray?.map((item: GridObjectInterface) => (
						<Input key={tokenMaker(9)} value={item.value} />
					))}
				</StyledGrid>

				<StyledResultsGrid row={row}>
					<span>Sum</span>
					{rowsResults?.map((item: GridObjectInterface[]) => {
						const sum = arrayObjectSum(item);
						return <div key={tokenMaker(9)}>{sum}</div>;
					})}
				</StyledResultsGrid>
			</StyledGridWrapper>

			<span>All sum: {allItemsCounter}</span>
		</StyledExcel>
	);
};

export const Excel = () => (
	<ContextProvider>
		<ExcelWrapper />
	</ContextProvider>
);
