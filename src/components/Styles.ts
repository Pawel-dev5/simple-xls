import styled, { css } from 'styled-components';

const BaseWrapper = css`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	gap: 2rem;
`;

const BaseGrid = css`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 1rem;
`;

export const StyledGrid = styled.div<{ col: number; row: number }>`
	${BaseGrid}
	width: 100%;
	max-width: 100%;
	padding-left: 1rem;
	overflow-x: auto;

	${({ col }) =>
		col &&
		css`
			grid-template-columns: repeat(${col}, 1fr);
		`};

	${({ row }) =>
		row &&
		css`
			grid-template-rows: repeat(${row}, 1fr);
		`};
`;

export const StyledResultsGrid = styled.div<{ row: number }>`
	${BaseGrid}
	grid-template-columns: repeat(1, 1fr);
	padding-right: 1rem;

	${({ row }) =>
		row &&
		css`
			grid-template-rows: repeat(${row + 1}, 1fr);
		`};
`;

export const StyledExcel = styled.div`
	${BaseWrapper}
`;

export const StyledGridWrapper = styled.div`
	${BaseWrapper}
	align-items: end;
	flex-flow: row nowrap;
`;
