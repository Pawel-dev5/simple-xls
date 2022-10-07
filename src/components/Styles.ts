import styled, { css } from 'styled-components';

export const StyledGrid = styled.div<{ col: number; row: number }>`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;

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

export const StyledButton = styled.button`
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 0.25rem;
`;
