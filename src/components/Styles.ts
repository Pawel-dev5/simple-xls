import styled, { css } from 'styled-components';

export const StyledGrid = styled.div<{ col: number; row: number }>`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 1rem;

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
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 1rem;

	${({ row }) =>
		row &&
		css`
			grid-template-rows: repeat(${row}, 1fr);
		`};
`;

export const StyledExcel = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	gap: 2rem;
`;

export const StyledGridWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: row nowrap;
	gap: 2rem;
`;
