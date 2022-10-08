// CONTEXT
import { ContextProvider } from 'components/hooks/useExcel';

// COMPONENTS
import { Buttons, Grid } from 'components/sections';

// STYLES
import { StyledExcel } from 'components/Styles';

export const Excel = () => (
	<ContextProvider>
		<StyledExcel>
			<h1>Simple grid xls</h1>
			<Buttons />
			<Grid />
		</StyledExcel>
	</ContextProvider>
);
