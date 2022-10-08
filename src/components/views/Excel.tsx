// CONTEXT
import { ContextProvider } from 'components/hooks/useExcel';

// COMPONENTS
import { Buttons, Grid } from 'components/sections';

// STYLES
import { StyledExcel } from 'components/Styles';

export const Excel = () => (
	<ContextProvider>
		<StyledExcel>
			<Buttons />
			<Grid />
		</StyledExcel>
	</ContextProvider>
);
