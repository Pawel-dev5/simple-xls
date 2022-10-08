import { useContext } from 'react';

// CONTEXT
import { ContextData } from 'components/hooks/useExcel';

// COMPONENTS
import { Input } from 'components/items';

// STYLES
import { StyledGrid, StyledResultsGrid, StyledGridWrapper, StyledSum } from 'components/sections/Styles';

// HELPERS
import { tokenMaker } from 'components/helpers/tokenMaker';
import { arrayObjectSum } from 'components/helpers/arrayHelpers';

// MODELS
import { GridObjectInterface } from 'components/models/hooks';

export const Grid = () => {
	const { row, col, gridArray, rowsResults, allItemsCounter } = useContext(ContextData);

	return (
		<>
			<StyledGridWrapper>
				<StyledGrid col={col} row={row}>
					{gridArray?.map((item: GridObjectInterface) => (
						<Input key={item?.uuid} {...item} />
					))}
				</StyledGrid>

				<StyledResultsGrid row={row}>
					{rowsResults?.map((item: GridObjectInterface[]) => {
						const sum = arrayObjectSum(item);
						return <StyledSum key={tokenMaker(9)}>{sum}</StyledSum>;
					})}
				</StyledResultsGrid>
			</StyledGridWrapper>

			<span>All sum: {allItemsCounter}</span>
		</>
	);
};
