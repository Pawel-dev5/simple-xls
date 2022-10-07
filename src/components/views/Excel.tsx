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
import { GridObjectInterface } from 'components/models/hooks';

export const ExcelWrapper = () => {
	const { row, col, gridArray, rowsResults } = useContext(ContextData);

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
					{rowsResults?.map((item: any) => {
						const sum = item?.reduce((accumulator: any, object: { value: any }) => accumulator + object.value, 0);
						return <div key={tokenMaker(9)}>{sum}</div>;
					})}
				</StyledResultsGrid>
			</StyledGridWrapper>
		</StyledExcel>
	);
};

export const Excel = () => (
	<ContextProvider>
		<ExcelWrapper />
	</ContextProvider>
);
