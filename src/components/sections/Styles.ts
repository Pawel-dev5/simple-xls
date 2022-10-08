import styled, { css } from 'styled-components';

export const StyledButtonWrapper = styled.div`
	width: 15rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.25rem;
	padding-bottom: 1rem;
`;

export const StyledCounter = styled.span`
	padding: 0 1rem;
`;

// GRID START

const BaseGrid = css`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 1rem;
	padding: 0.5rem;
`;

export const StyledGrid = styled.div<{ col: number; row: number }>`
	${BaseGrid}
	width: 100%;
	max-width: 100%;
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
	min-height: 100%;

	${({ row }) =>
		row &&
		css`
			grid-template-rows: repeat(${row}, 1fr);
		`};
`;

export const StyledGridWrapper = styled.div`
	width: fit-content;
	max-width: 100%;
	height: 100%;
	display: flex;
	align-items: end;
	justify-content: center;
	flex-flow: row nowrap;
`;

export const StyledSum = styled.span`
	height: 2.13rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledCountersWrapper = styled.div`
	width: 6.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledButtons = styled.div`
	margin-top: 2rem;
`;

//  GRID END
